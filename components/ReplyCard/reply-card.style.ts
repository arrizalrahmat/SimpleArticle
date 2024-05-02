import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 24,
  },
  replyToReplyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 48,
  },
  iconContainer: {
    height: 24,
    width: 24,
    backgroundColor: 'rgba(209, 204, 192, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 6,
  },
  commentText: {
    fontSize: 12,
  },
  replySectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    padding: 4,
    borderColor: 'rgba(170, 166, 157,1.0)',
    borderRadius: 6,
    marginLeft: 24,
    marginBottom: 8,
  },
  replyHeaderContainer: {
    marginBottom: 8,
    marginLeft: 24,
  },
  replyToReplyHeaderContainer: {
    marginBottom: 8,
    marginLeft: 24,
  },
  replyHeaderText: {
    fontSize: 10,
    color: '#666',
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 24,
  },
});
