import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { useHome } from './home.hook';
import Header from '../../components/Header/header.component';
import styles from './home.style';
import ArticleCard from '../../components/ArticleCard/article-card.component';

const Home = () => {
  const {
    query,
    articles,
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
  } = useHome();

  const renderItem = ({ item, index }) => {
    return (
      <ArticleCard
        key={item.id + index}
        article={item}
        onPress={handleArticlePress}
        comments={getComments(item.id)}
        onSubmitComment={handleSubmitComment}
        onSubmitReply={handleSubmitReply}
        onSubmitReplyToReply={handleSubmitReplyToReply}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        query={query}
        onChange={handleChangeQuery}
        onSubmit={handleSubmitSearch}
      />
      <View style={styles.content}>
        {articles ? (
          <FlatList
            data={articles}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            onEndReachedThreshold={0.5}
            onEndReached={handleOnEnd}
          />
        ) : (
          <ActivityIndicator />
        )}
        {articleDetail ? (
          <Modal
            transparent={true}
            visible={isModalShown}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ArticleCard
                  article={articleDetail}
                  comments={getComments(articleDetail.id)}
                  onSubmitComment={handleSubmitComment}
                  onSubmitReply={handleSubmitReply}
                  onSubmitReplyToReply={
                    handleSubmitReplyToReply
                  }
                />
                <Pressable
                  onPress={handleCloseModal}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
