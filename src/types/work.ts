export interface IWorkItem {
  title: string;
  cover: string;
  author: IWorkAuthor;
  content?: string;
}

export interface IWorkAuthor {
  name: string;
  avatar: string;
}
