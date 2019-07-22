import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class HeroProfile extends Component {
  componentDidMount() {
    console.log(this.props.hero);
  }
  render() {
    const { hero } = this.props;
    return (
      <View>
        <Text>{hero.localized_name}</Text>
      </View>
    );
  }
}

export default HeroProfile;
