import React from 'react';
import { HeaderPropTypes } from './header.type';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './header.style';
import { Feather } from '@expo/vector-icons';

const Header: React.FC<HeaderPropTypes> = (props) => {
  const { query, onChange, onSubmit } = props;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Feather
          name="search"
          size={24}
          color="#34ace0"
          style={styles.searchIcon}
        />
        <TextInput
          value={query}
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="rgba(9, 132, 227, 0.4))" // Light gray placeholder text color
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
        />
      </View>
    </View>
  );
};

export default Header;
