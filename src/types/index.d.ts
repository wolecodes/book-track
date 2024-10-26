export interface BookInputType {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  status: 'available' | 'borrowed' | 'lost' | 'damaged';
  edition: string;
  summary: string;
}
