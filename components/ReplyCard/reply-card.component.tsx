import { FontAwesome6 } from '@expo/vector-icons';
import {
  View,
  Text,
  Pressable,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './reply-card.style';
import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ReplyCardPropTypes } from './reply-card.type';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ReplyCard: React.FC<ReplyCardPropTypes> = (props) => {
  const { reply, submitReplyToReply } = props;
  const { repliesToReply } = useSelector(
    (state: RootState) => state.comment
  );

  const [newReplyToReply, setNewReplyToReply] =
    useState<string>('');
  const [
    isReplyToReplySectionShown,
    setIsReplyToReplySectionShown,
  ] = useState<boolean>(false);

  const currentRepliesToReply = useMemo(
    () =>
      repliesToReply.filter(
        (el) => el.replyId === reply.id
      ),
    [repliesToReply, reply]
  );

  const handlePressReplyHeader = useCallback(
    () =>
      setIsReplyToReplySectionShown(
        !isReplyToReplySectionShown
      ),
    [isReplyToReplySectionShown]
  );

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.replyToReplyContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome6
            name="user-secret"
            size={16}
            color="#84817a"
          />
        </View>
        <Text style={styles.commentText}>
          {item.comment}
        </Text>
      </View>
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
          {reply.comment}
        </Text>
      </View>
      <Pressable
        style={styles.replyHeaderContainer}
        onPress={handlePressReplyHeader}
      >
        <Text style={styles.replyHeaderText}>Reply</Text>
      </Pressable>
      {isReplyToReplySectionShown ? (
        <View>
          <FlatList
            data={currentRepliesToReply}
            keyExtractor={(item, index) => item.id + index}
            renderItem={renderItem}
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
              value={newReplyToReply}
              onChangeText={setNewReplyToReply}
              onSubmitEditing={() => {
                submitReplyToReply(
                  newReplyToReply,
                  reply.id,
                  reply.articleId,
                  reply.id
                );
                setNewReplyToReply('');
              }}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ReplyCard;
