import type { BookInputType } from '../../types';

export const Books: BookInputType[] = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    publicationDate: new Date('1954-07-29'),
    status: 'available',
    edition: 'George Allen & Unwin',
    summary:
      'An epic high-fantasy novel that follows hobbits Frodo and Sam on their quest to destroy the One Ring.',
  },
  {
    title: '48 Laws of Power',
    author: 'Robert Greene',
    genre: 'Self-help',
    publicationDate: new Date('1998-09-01'),
    status: 'available',
    edition: 'Viking Press',
    summary:
      ' A self-help book that offers advice on how to gain and maintain power.',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationDate: new Date('1960-07-11'),
    status: 'available',
    edition: 'First Edition',
    summary:
      'The story of racial injustice and the loss of innocence in the American South of the 1930s.',
  },
  {
    title: 'Mindset of sucessuful people',
    author: 'Carol Dweck',
    genre: 'Self-help',
    publicationDate: new Date('2006-02-28'),
    status: 'borrowed',
    edition: 'Random House',
    summary:
      'A self-help book that discusses the concept of fixed and growth mindsets, and how they impact success.',
  },

  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Coming-of-age Fiction',
    publicationDate: new Date('1951-07-16'),
    status: 'lost',
    edition: 'Little, Brown and Company',
    summary:
      'A story of teenage angst and alienation, told through the eyes of the protagonist, Holden Caulfield.',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    publicationDate: new Date('1937-09-21'),
    status: 'available',
    edition: 'First Edition',
    summary:
      "A children's fantasy novel about the adventures of hobbit Bilbo Baggins.",
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    publicationDate: new Date('2018-10-16'),
    status: 'available',
    edition: 'Chatto & Windus',
    summary:
      'A self-help book that offers practical strategies for building good habits and breaking bad ones.',
  },
  {
    title: 'A subtle art of not giving a f*ck',
    author: 'Mark Manson',
    genre: 'Self-help',
    publicationDate: new Date('2016-09-13'),
    status: 'available',
    edition: 'HarperOne',
    summary:
      'A self-help book that encourages readers to embrace life’s uncertainties and find meaning in their struggles.',
  },
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    genre: 'Fiction',
    publicationDate: new Date('1958-06-17'),
    status: 'available',
    edition: 'William Heinemann Ltd',
    summary:
      'A novel that explores the clash between traditional Igbo culture and colonialism in Nigeria.',
  },
];
