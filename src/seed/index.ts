import { Books } from './data';
import prisma from '../lib/client';

/**
 * Seeds the database by creating Books records.
 * @returns {Promise<void>}
 */
async function main(): Promise<void> {
  for (const book of Books) {
    await prisma.book.create({
      data: book,
    });
  }
}
main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    console.log('***💃🕺💫🎶🔥✨👯💃🕺SEEDING FINISHED!💃🕺💫🎶🔥✨👯💃🕺***');
    prisma
      .$disconnect()
      .then(() => console.log('prisma connection terminated successfully'))
      .catch(() => console.error('error disconnecting prisma instance'));
  });
