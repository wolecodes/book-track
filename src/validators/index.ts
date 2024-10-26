import { z } from 'zod';

export const bookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  genre: z.string().min(1, 'Genre is required'),
  publicationDate: z.coerce.date(),
  status: z.enum(['available', 'borrowed', 'lost', 'damaged']),
  edition: z.string().min(1, 'Edition is required'),
  summary: z.string().min(1, 'Summary is required'),
});
