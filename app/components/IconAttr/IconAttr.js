import React, { Component } from 'react';
import { View, Image } from 'react-native';

import iconAttr from '../../constants/iconAttr';

import styles from './styles';

class IconAttr extends Component {
  render() {
    const { item } = this.props;
    return (
      <View>
        {item === 'str' ? (
          <Image source={iconAttr.STR} style={styles.icon} />
        ) : item === 'agi' ? (
          <Image source={iconAttr.AGI} style={styles.icon} />
        ) : (
          <Image source={iconAttr.INT} style={styles.icon} />
        )}
      </View>
    );
  }
}

export default IconAttr;
