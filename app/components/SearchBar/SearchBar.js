import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { Icon } from 'react-native-elements';

import colors from '../../constants/colors';

import styles from './styles';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} />
        <Icon
          name="ios-search"
          type="ionicon"
          color={colors.SILVER}
          size={35}
          containerStyle={styles.iconSearch}
        />
      </View>
    );
  }
}

export default SearchBar;
