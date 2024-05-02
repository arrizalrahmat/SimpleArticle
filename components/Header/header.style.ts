import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff', // White background color
    paddingVertical: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: '#0984e3',
    marginHorizontal: 14,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    color: '#0984e3', // Dark gray text color
    fontSize: 16,
  },
});
