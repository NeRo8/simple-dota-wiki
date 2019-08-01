import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';

import IconAttr from '../IconAttr';

import HoH from '../../data/HistorysOfHeroes';

import styles from './styles';

class HeroProfile extends Component {
  render() {
    const { hero } = this.props;
    const heroHistory = HoH.find(item => item.id === hero.id);
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.header}
          source={{ uri: `https://api.opendota.com${hero.img}` }}
        >
          <View style={styles.headerTitle}>
            <IconAttr item={hero.primary_attr} />
            <Text style={styles.localizedName}>{hero.localized_name}</Text>
          </View>
        </ImageBackground>
        <ScrollView>
          <Text style={styles.history}>{heroHistory.history}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default HeroProfile;
