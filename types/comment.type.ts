export interface Comment {
  id: string;
  comment: string;
  articleId: string;
}

export interface Reply extends Comment {
  commentId: string;
}

export interface ReplyToReply extends Reply {
  replyId: string;
}
