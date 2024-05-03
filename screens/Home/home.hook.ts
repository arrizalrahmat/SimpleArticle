import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  fetchArticles,
  refetchArticles,
} from '../../store/reducers/article';
import { Article } from '../../types/article.type';
import {
  createComment,
  createReply,
  createReplyToReply,
} from '../../store/reducers/comment';

export const useHome = () => {
  const { data } = useSelector(
    (state: RootState) => state.article
  );
  const { comments } = useSelector(
    (state: RootState) => state.comment
  );
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState<string>('');
  const [isModalShown, setIsModalShown] =
    useState<boolean>(false);
  const [articleDetail, setArticleDetail] =
    useState<Article>();

  const handleArticlePress = useCallback(
    (id: string) => {
      const article = data.articles.find(
        (el) => el.id === id
      );
      if (!article) return;
      setArticleDetail(article);
      setIsModalShown(true);
    },
    [data]
  );

  const handleCloseModal = useCallback(() => {
    setIsModalShown(false);
    setArticleDetail(null);
  }, []);

  const handleChangeQuery = useCallback((q: string) => {
    setQuery(q);
  }, []);

  const handleSubmitSearch = useCallback(() => {
    dispatch(fetchArticles({ search: query }));
  }, [query]);

  const handleOnEnd = useCallback(() => {
    if (data.pagination) {
      dispatch(refetchArticles(data.pagination.next));
    }
  }, [data]);

  const getComments = useCallback(
    (articleId: string) => {
      return comments.filter(
        (el) => el.articleId === articleId
      );
    },
    [comments]
  );

  const handleSubmitComment = useCallback(
    (comment: string, articleId: string) => {
      dispatch(createComment({ comment, articleId }));
    },
    []
  );

  const handleSubmitReply = useCallback(
    (
      reply: string,
      commentId: string,
      articleId: string
    ) => {
      dispatch(
        createReply({
          comment: reply,
          commentId,
          articleId,
        })
      );
    },
    []
  );

  const handleSubmitReplyToReply = useCallback(
    (
      reply: string,
      commentId: string,
      articleId: string,
      replyId: string
    ) => {
      dispatch(
        createReplyToReply({
          comment: reply,
          commentId,
          articleId,
          replyId,
        })
      );
    },
    []
  );

  useEffect(() => {
    dispatch(fetchArticles({}));
  }, []);

  return {
    query,
    articles: data?.articles,
    isModalShown,
    articleDetail,
    handleChangeQuery,
    handleOnEnd,
    handleArticlePress,
    handleCloseModal,
    getComments,
    handleSubmitComment,
    handleSubmitReply,
    handleSubmitReplyToReply,
    handleSubmitSearch,
  };
};
