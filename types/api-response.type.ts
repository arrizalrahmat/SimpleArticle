export interface APIResponse<T = any> {
  data: T;
  pagination: Pagination;
}

export type Pagination = {
  total: number;
  cursors: Cursor[];
  prev?: string;
  next?: string;
};

type Cursor = {
  before?: string;
  after?: string;
};
