import { Article } from '../../types/article.type';
import { Comment } from '../../types/comment.type';

export type ArticleCardPropTypes = {
  article: Article;
  comments: Comment[];
  onPress?: (id: string) => void;
  onSubmitComment: (
    comment: string,
    articleId: string
  ) => void;
  onSubmitReply: (
    reply: string,
    commentId: string,
    articleId: string
  ) => void;
  onSubmitReplyToReply: (
    reply: string,
    commentId: string,
    articleId: string,
    replyId: string
  ) => void;
};
