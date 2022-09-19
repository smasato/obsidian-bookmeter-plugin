export type Book = {
  id: string;
  asin: string;
  title: string;
  imageUrl?: string;
};

export type BookMetadata = {
  status?: 'read' | 'reading' | 'stacked' | 'wish';
  publisher?: string;
  pages?: number;
  bindingName: string;
};

export type MyReview = {
  book: Book;
  text: string | null;
  read_at: Date;
  bookcases: [];
};

export type bookcase = {
  id: number;
  name: string;
  books: Book[];
};

export type BookMeterAccount = {
  id: number;
  name: string;
};
