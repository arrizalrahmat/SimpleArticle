import {
  Comment,
  Reply,
  ReplyToReply,
} from '../../../types/comment.type';

export type CommentStateType = {
  comments: Comment[];
  replies: Reply[];
  repliesToReply: ReplyToReply[];
  isLoading: boolean;
};
