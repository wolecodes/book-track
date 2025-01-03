import { Router } from 'express';
import {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from './handlers/book';

const router = Router();

// Create books route

// GET handler for retreiveing all books in the database.

/**
 * @openapi
 * /api/v1/books/:
 *   get:
 *     tags:
 *       - Books
 *     summary: Get all books
 *     description: Retrieve a list of all books
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "InternPulse Sample Book"
 *         author:
 *           type: string
 *           example: "John Diginee"
 *         genre:
 *           type: string
 *           example: "Interns"
 *         publicationDate:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *         availabilityStatus:
 *           type: string
 *           example: "Available"
 *         edition:
 *           type: string
 *           example: "2nd Edition"
 *         summary:
 *           type: string
 *           example: "A sample book summary"
 */
router.get('/', getBooks);

// GET handler for retrieving a single book by ID

//

/**
 * @openapi
 * /api/v1/books/{id}:
 *   get:
 *     tags:
 *       - Books
 *     summary: Get a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Sample Book"
 *         author:
 *           type: string
 *           example: "John Doe"
 *         genre:
 *           type: string
 *           example: "Fiction"
 *         publicationDate:
 *           type: string
 *           format: date
 *           example: "2023-01-01"
 *         availabilityStatus:
 *           type: string
 *           example: "Available"
 *         edition:
 *           type: string
 *           example: "2nd Edition"
 *         summary:
 *           type: string
 *           example: "A sample book summary"
 *
 */
router.get('/:id', getBook);

// POST handler for creating book(s)
/**
 * @openapi
 * /api/v1/books/:
 *   post:
 *     tags:
 *       - Books
 *     summary: Create one or multiple books
 *     description: Create a single book or an array of books in one request
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/Book'
 *               - type: array
 *                 items:
 *                   $ref: '#/components/schemas/Book'
 *           examples:
 *             singleBook:
 *               summary: Single Book Example
 *               value:
 *                 title: "The Great Gatsby"
 *                 author: "F. Scott Fitzgerald"
 *                 genre: "Fiction"
 *                 publicationDate: "2023-01-01T00:00:00Z"
 *                 status: "Available"
 *                 edition: "1st Edition"
 *                 summary: "A brief summary"
 *             multipleBooks:
 *               summary: Multiple Books Example
 *               value:
 *                 - title: "Book 1"
 *                   author: "Author 1"
 *                   genre: "Fiction"
 *                   publicationDate: "2024-01-01T00:00:00Z"
 *                   status: "Available"
 *                   edition: "1st Edition"
 *                   summary: "Summary 1"
 *                 - title: "Book 2"
 *                   author: "Author 2"
 *                   genre: "Non-Fiction"
 *                   publicationDate: "2023-02-01"
 *                   status: "Available"
 *                   edition: "2nd Edition"
 *     responses:
 *       201:
 *         description: Book(s) created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', createBook);
// PUT handler for updating book by ID
/**
 * @openapi
 * /api/books/{id}:
 *   put:
 *     tags:
 *       - Books
 *     summary: Update a book by ID
 *     description: Update an existing book by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Book Title"
 *               author:
 *                 type: string
 *                 example: "Updated Author"
 *               genre:
 *                 type: string
 *                 example: "Fiction"
 *               publicationDate:
 *                 type: string
 *                 format: date
 *                 example: "2023-01-01"
 *               status:
 *                 type: string
 *                 enum: [Available, Borrowed, Maintenance]
 *                 example: "Available"
 *               edition:
 *                 type: string
 *                 example: "2nd Edition"
 *               summary:
 *                 type: string
 *                 example: "Updated summary"
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 *       400:
 *         description: Invalid input
 */
router.put('/:id', updateBook);

// DELETE handler for deleting book by ID
/**
 * @openapi
 * /api/v1/books/{id}:
 *   delete:
 *     tags:
 *       - Books
 *     summary: Delete a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The book ID
 */
router.delete('/:id', deleteBook);

export default router;
