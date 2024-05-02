import { Comment } from '../../types/comment.type';

export type CommentCardPropTypes = {
  comment: Comment;
  submitReply: (
    reply: string,
    commentId: string,
    articleId: string
  ) => void;
  submitReplyToReply: (
    reply: string,
    commentId: string,
    articleId: string,
    replyId: string
  ) => void;
};
