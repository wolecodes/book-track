import prisma from '../lib/client';
import type { Request, Response } from 'express';
import { bookSchema } from '../validators';
import { BookInputType } from '../types';

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
    const totalBooks = await prisma.book.count();
    const totalPages = Math.ceil(totalBooks / limit);

    res.json({
      status: 'success',
      message: 'Books retrieved successfully',
      data: books,
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
