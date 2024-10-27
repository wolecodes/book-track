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

router.get('/', getBooks);

// GET handler for retrieving a single book by ID

router.get('/:id', getBook);

// POST handler for creating book(s)

router.post('/', createBook);

// PUT handler for updating book by ID
router.post('/:id', updateBook);

// DELETE handler for deleting book by ID

router.delete('/:id', deleteBook);

export default router;
