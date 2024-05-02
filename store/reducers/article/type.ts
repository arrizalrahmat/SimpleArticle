import {
  APIResponse,
  Pagination,
} from '../../../types/api-response.type';
import { Article } from '../../../types/article.type';

export type ArticleStateType = {
  data: ArticlesType | undefined;
  isLoading: boolean;
  error: APIResponse | undefined;
};

export type ArticlesType = {
  articles: Article[];
  pagination: Pagination;
};
