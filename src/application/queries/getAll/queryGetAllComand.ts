export class QueryGetAllComand {
  constructor(
    readonly page?: string,
    readonly page_size?: string
  ) {}

  static create(page?: string, page_size?: string): QueryGetAllComand {
    const defaultPage = page || '1';
    const defaultPageSize = page_size || '10';

    return new QueryGetAllComand(defaultPage, defaultPageSize);
  }
}
