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
  // eslint-disable-next-line camelcase
  book_chapters: BookChapter[];
}

export interface BookChapter {
  id: number;
  title: string;
  content: string;
  // eslint-disable-next-line camelcase
  toc_order: number;
  // eslint-disable-next-line camelcase
  toc_part: string;
  talks: Talk[];
  book: Book | null;
}

export interface Download {
  id: number;
  ext: string;
  url: string;
  name: string;
  mime: string;
}

export interface Talk {
  id: number;
  title: string;
  author: Author;
  cover: Download;
  description: string;
  // eslint-disable-next-line camelcase
  album_title: string;
  // eslint-disable-next-line camelcase
  track_number: number;
  // eslint-disable-next-line camelcase
  book_chapter: BookChapter;
  // eslint-disable-next-line camelcase
  talk_collections: TalkCollection;
}

export interface TalkCollection {
  id: number;
  title: string;
  description: string;
  category: number;
  book: number;
  cover: Download;
}

export interface MenuLink {
  path: string;
  label: string;
  sub: MenuLink[];
}
