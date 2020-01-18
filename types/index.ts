export interface Author {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  description: string;
}

export interface Talk {
  id: number;
  title: string;
  author: Author;
  description: string;
}
