import { createSlice } from '@reduxjs/toolkit';
import { CommentStateType } from './type';
import 'react-native-get-random-values';
import * as uuid from 'uuid';

const initialState: CommentStateType = {
  comments: [],
  replies: [],
  repliesToReply: [],
  isLoading: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    createComment: (state, action) => {
      state.isLoading = true;
      const payload = {
        id: uuid.v4(),
        ...action.payload,
      };
      state.comments.push(payload);
      //   state.comments = [...state.comments, ...payload];
      state.isLoading = false;
    },
    createReply: (state, action) => {
      state.isLoading = true;
      const payload = {
        id: uuid.v4(),
        ...action.payload,
      };
      state.replies.push(payload);
      state.isLoading = false;
    },
    createReplyToReply: (state, action) => {
      state.isLoading = true;
      const payload = {
        id: uuid.v4(),
        ...action.payload,
      };

      state.repliesToReply.push(payload);
      state.isLoading = false;
    },
  },
});

export const {
  createComment,
  createReply,
  createReplyToReply,
} = commentSlice.actions;

export default commentSlice.reducer;
