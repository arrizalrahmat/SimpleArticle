import React, { useCallback, useState } from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './article-card.style';
import { ArticleCardPropTypes } from './article-card.type';
import RenderHTML from 'react-native-render-html';
import { windowDimensions } from '../../utils/window-dimensions';
import { FontAwesome6 } from '@expo/vector-icons';
import dayjs from 'dayjs';
import CommentCard from '../CommentCard/comment-card.component';

const ArticleCard: React.FC<ArticleCardPropTypes> = (
  props
) => {
  const {
    article,
    comments,
    onPress,
    onSubmitComment,
    onSubmitReply,
    onSubmitReplyToReply,
  } = props;
  const { width } = windowDimensions();
  const [newComment, setNewComment] = useState<string>('');
  const [isCommentsShown, setIsCommentsShown] =
    useState<boolean>(false);

  const handlePressHeader = useCallback(() => {
    setIsCommentsShown(!isCommentsShown);
  }, [isCommentsShown]);

  const renderItem = ({ item, index }) => {
    return (
      <CommentCard
        comment={comments.find((el) => el.id === item.id)}
        submitReply={onSubmitReply}
        key={item.id + index}
        submitReplyToReply={onSubmitReplyToReply}
      />
    );
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          if (!onPress) return;
          onPress(article.id);
        }}
      >
        <Image
          source={{
            uri: article.image ?? article.imagePlaceholder,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{article.title}</Text>
        <RenderHTML
          source={{ html: article.description }}
          contentWidth={width}
        />
        <Text style={styles.publishedAt}>
          Published:{' '}
          {dayjs(article.publishedAt).format(
            'DD MMMM YYYY HH:mm:ss'
          )}
        </Text>
      </Pressable>
      <Pressable
        style={styles.commentHeaderContainer}
        onPress={handlePressHeader}
      >
        {comments.length ? (
          <Text style={styles.publishedAt}>
            {comments.length}{' '}
            {comments.length > 1 ? 'comments' : 'comment'}
          </Text>
        ) : null}
      </Pressable>
      {isCommentsShown ? (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : null}
      <View style={styles.commentSectionContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome6
            name="user-secret"
            size={16}
            color="#84817a"
          />
        </View>
        <TextInput
          placeholder="Write a comment"
          value={newComment}
          onChangeText={setNewComment}
          onSubmitEditing={() => {
            onSubmitComment(newComment, article.id);
            setNewComment('');
          }}
        />
      </View>
    </View>
  );
};

export default ArticleCard;
