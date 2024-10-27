import prisma from '../lib/client';
import type { Request, Response } from 'express';
import { bookSchema } from '../validators';
import type { BookInputType } from '../types';

function parsePositiveInt(value: unknown, defaultValue: number): number {
  if (typeof value === 'string') {
    const parsedValue = parseInt(value, 10);
    return isNaN(parsedValue) ? defaultValue : Math.max(1, parsedValue);
  }
  return defaultValue;
}
/**
 * Fetches all books from the database.
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */

export async function getBooks(req: Request, res: Response): Promise<void> {
  try {
    const pageParam = parsePositiveInt(req.query.page, 1);
    const limit = parsePositiveInt(req.query.limit, 10);
    const offset = (pageParam - 1) * limit;

    const books = await prisma.book.findMany({
      skip: offset,
      take: limit,
      orderBy: { title: 'asc' },
    });
    if (books === null) {
      res.json({
        status: 'error',
        code: 404,
        message: 'No books found',
      });
      return;
    }
    const totalBooks = await prisma.book.count();
    const totalPages = Math.ceil(totalBooks / limit);

    res.json({
      status: 'success',
      message: 'Books retrieved successfully',
      data: {
        books,
      },
      pagination: {
        current_age: pageParam,
        per_page: limit,
        total_pages: totalPages,
        total_books: totalBooks,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to retrieve books',
    });
  }
}

/**
 * Fetches a single book from the database.
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
export async function getBook(req: Request, res: Response): Promise<void> {
  const { params } = req;
  try {
    if (params.id && params.id.length > 0) {
      const bookId = parseInt(params.id);
      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
      if (book === null) {
        res.status(400).json('Book Not Found');
        return;
      }
      res.json({
        status: 'success',
        code: 200,
        message: 'Book retrieved successfully',
        data: book,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to retrieve book',
    });
  }
}
/**
 * Creates a new book or books depending on request body.
 * @param req - The request object.
 * @param res - The response object.
 * @returns Promise resolving when book(s) are created
 */
export async function createBook(req: Request, res: Response): Promise<void> {
  const { body: bookDatas } = req;

  try {
    if (Array.isArray(bookDatas) && bookDatas.length > 0) {
      for (const singleBook of bookDatas) {
        bookSchema.parse(singleBook);
      }
      await createMultipleBook(bookDatas, res);
    } else if (typeof bookDatas === 'object' && bookSchema.parse(bookDatas)) {
      await createSingleBook(bookDatas, res);
    } else {
      res.json({
        status: 'error',
        code: 400,
        message: 'Invalid Request body',
      });
    }
  } catch (error: unknown) {
    res.json({
      status: 'error',
      code: 500,
      error: 'internal server error',
    });
  }
}

/**
 * Helper function to insert a single record into the database.
 * @param {BookInputType} book
 * @param {Response} res
 * @returns a promise that resloves when a book is created
 */

async function createSingleBook(body: BookInputType, res: Response) {
  try {
    const { title, author, genre, publicationDate, status, edition, summary } =
      body;

    const book = await prisma.book.create({
      data: {
        title,
        author,
        genre,
        publicationDate,
        status,
        edition,
        summary,
      },
    });
    res.json({
      status: 'success',
      code: 201,
      message: 'Book created successfully',
      id: book.id,
    });
  } catch (error) {
    console.error('Error creating student', error);
    if (error.code === 'P2002') {
      res.status(400).json('Unexpected error');
      return;
    }
    res.status(500).json('Internal Server Error');
  }
}
/**
 * Helper function to insert multiple record into the database.
 * @param bookArray book array of book to be created
 * @param {Response} res
 * @returns a promise that resloves when a books is created
 */

async function createMultipleBook(
  bookArray: BookInputType[],
  res: Response
): Promise<void> {
  try {
    const booksInserted = await Promise.all(
      bookArray.map(async (book) => {
        const {
          title,
          author,
          genre,
          publicationDate,
          status,
          edition,
          summary,
        } = book;
        const createdBook = await prisma.book.create({
          data: {
            title,
            author,
            genre,
            publicationDate,
            status,
            edition,
            summary,
          },
        });
        return createdBook;
      })
    );
    res.json(booksInserted.map((book) => ({ id: book.id })));
  } catch (error) {
    console.error('Error creating books: ', error);
    res.json({
      status: 'eroor',
      code: 500,
      message: 'Internal server Error',
    });
  }
}

export async function updateBook(req: Request, res: Response) {
  const { params } = req;
  try {
    const updatedData = bookSchema.parse(params.body);

    const bookId: number = parseInt(params.id);
    const updatedBook = await prisma.book.update({
      where: {
        id: bookId,
      },
      data: updatedData,
    });
    res.json({
      status: 'sucess',
      code: 200,
      message: 'Book Updated successfully',
      data: {
        datials: `Book with ${updatedBook.id} was updated`,
      },
    });
  } catch (error) {}
}
/**
 * delete a book record in the database record
 * @param {Request} req
 * @param {Response} res
 * returns a promise that resolve when a book is deleted
 */
export async function deleteBook(req: Request, res: Response) {
  const { params } = req;
  try {
    if (params.id && params.id.length > 0) {
      const bookId: number = parseInt(params.id);
      const book = await prisma.book.delete({
        where: {
          id: bookId,
        },
      });
      if (book === null) {
        res.status(400).json('Book Not found');
        return;
      }
    }
    res.json({
      status: 'sucess',
      code: 200,
      message: 'Book Deleted Sucessfully',
      suceess: {
        details: `Book with ${params.id} was deleted successfully `,
      },
    });
  } catch (error) {
    console.error('Error deleting book', error);
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'An error occurred while deleting the book',
    });
  }
}
