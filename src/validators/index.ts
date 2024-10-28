import { z } from 'zod';

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  publicationDate: z.coerce.date(),
  status: z.string(),   // 'available' | 'borrowed' | 'lost'
  edition: z.string(),
  summary: z.string(),
});
