import { Reply } from '../../types/comment.type';

export type ReplyCardPropTypes = {
  reply: Reply;
  submitReplyToReply: (
    reply: string,
    commentId: string,
    articleId: string,
    replyId: string
  ) => void;
};
