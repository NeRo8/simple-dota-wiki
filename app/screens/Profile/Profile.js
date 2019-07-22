import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import HeroStat from '../../data/HeroStats';
import HeroProfile from '../../components/HeroProfile';
import styles from './styles';

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    const heroId = navigation.getParam('heroId', 'NO-ID');
    const item = HeroStat.find(item => item.id === heroId);
    return (
      <View style={styles.container}>
        <HeroProfile hero={item} />
        <Button title="Back" onPress={() => navigation.goBack()} color="#fff" />
      </View>
    );
  }
}

export default Profile;
