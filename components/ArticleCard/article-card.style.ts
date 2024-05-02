import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  publishedAt: {
    fontSize: 14,
    color: '#666',
  },
  commentHeaderContainer: {
    alignItems: 'flex-end',
    marginVertical: 6,
  },
  commentSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    padding: 4,
    borderColor: 'rgba(170, 166, 157,1.0)',
    borderRadius: 6,
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
});
