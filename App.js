/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';

import Hero from './app/data/Hero';
import HeroStats from './app/data/HeroStats';

export default class App extends Component {
  state = {
    modalVisible: false,
    hero: null
  };

  renderPrimaryAttr = item => (
    <View>
      {item === 'str' ? (
        <Image
          source={require('./icon/str.png')}
          style={{ height: 29, width: 29, marginRight: 10 }}
        />
      ) : item === 'agi' ? (
        <Image
          source={require('./icon/agi.png')}
          style={{ height: 29, width: 29, marginRight: 10 }}
        />
      ) : (
        <Image
          source={require('./icon/int.png')}
          style={{ height: 29, width: 29, marginRight: 10 }}
        />
      )}
    </View>
  );

  renderHeroList = ({ item }) => (
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <Text style={{ width: 25, marginRight: 10 }}>{item.id}</Text>
      {this.renderPrimaryAttr(item.primary_attr)}
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 10 }}>{item.localized_name} /</Text>
          <View style={{ borderRadius: 20, backgroundColor: 'silver' }}>
            <Text>{item.attack_type}</Text>
          </View>
        </View>
        <FlatList
          horizontal
          contentContainerStyle={{ flexGrow: 1 }}
          data={item.roles}
          renderItem={item => (
            <Text style={{ marginRight: 5 }}>{item.item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );

  render() {
    const { hero } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          vertical
          data={Hero}
          renderItem={item => (
            <TouchableWithoutFeedback onPress={() => {}}>
              {this.renderHeroList(item)}
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    height: '100%',
    backgroundColor: '#F5FCFF'
  }
});
