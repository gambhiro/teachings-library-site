export interface Author {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  description: string;
  downloads: Download[];
}

export interface Download {
  ext: string;
  url: string;
  name: string;
}

export interface Talk {
  id: number;
  title: string;
  author: Author;
  description: string;
  // eslint-disable-next-line camelcase
  album_title: string;
  // eslint-disable-next-line camelcase
  track_number: number;
}

export interface Link {
  toPath: string;
  label: string;
}
