import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './comment-card.style';
import { FontAwesome6 } from '@expo/vector-icons';
import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import { CommentCardPropTypes } from './comment-card.type';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReplyCard from '../ReplyCard/reply-card.component';

const CommentCard: React.FC<CommentCardPropTypes> = (
  props
) => {
  const { comment, submitReply, submitReplyToReply } =
    props;
  const { replies } = useSelector(
    (state: RootState) => state.comment
  );

  const [newReply, setNewReply] = useState<string>('');
  const [isReplySectionShown, setIsReplySectionShown] =
    useState<boolean>(false);

  const commentReplies = useMemo(
    () =>
      replies.filter(
        (el) =>
          el.commentId === comment.id &&
          el.articleId === comment.articleId
      ),
    [replies]
  );

  const handlePressReplyHeader = useCallback(
    () => setIsReplySectionShown(!isReplySectionShown),
    [isReplySectionShown]
  );

  const renderReplies = ({ item, index }) => {
    return (
      <ReplyCard
        reply={item}
        submitReplyToReply={(
          reply,
          commentId,
          articleId,
          replyId
        ) =>
          submitReplyToReply(
            reply,
            commentId,
            articleId,
            replyId
          )
        }
        key={item.id + index}
      />
      // <Text>{JSON.stringify(item)}</Text>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome6
            name="user-secret"
            size={16}
            color="#84817a"
          />
        </View>
        <Text style={styles.commentText}>
          {comment.comment}
        </Text>
      </View>
      <Pressable
        style={styles.replyHeaderContainer}
        onPress={handlePressReplyHeader}
      >
        <Text style={styles.replyHeaderText}>Reply</Text>
      </Pressable>
      {isReplySectionShown ? (
        <View>
          {/* <Text>{JSON.stringify(commentReplies)}</Text> */}
          <FlatList
            data={commentReplies}
            keyExtractor={(item, index) => item.id + index}
            renderItem={renderReplies}
          />
          <View style={styles.replySectionContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome6
                name="user-secret"
                size={16}
                color="#84817a"
              />
            </View>
            <TextInput
              placeholder="Write a comment"
              value={newReply}
              onChangeText={setNewReply}
              onSubmitEditing={() => {
                submitReply(
                  newReply,
                  comment.id,
                  comment.articleId
                );
                setNewReply('');
              }}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CommentCard;
