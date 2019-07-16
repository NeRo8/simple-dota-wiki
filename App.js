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
  Modal,
  Button
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
          source={require('./app/icon/attr/str.png')}
          style={{ height: 29, width: 29, marginRight: 10 }}
        />
      ) : item === 'agi' ? (
        <Image
          source={require('./app/icon/attr/agi.png')}
          style={{ height: 29, width: 29, marginRight: 10 }}
        />
      ) : (
        <Image
          source={require('./app/icon/attr/int.png')}
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
          <Text style={{ marginRight: 10, fontSize: 15, fontWeight: '600' }}>
            {`${item.localized_name} /`}
          </Text>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'silver',
              paddingHorizontal: 10
            }}
          >
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

  getHeroList = (data, attr = 'all') => {
    if (attr === 'all') {
      return data;
    } else
      return data.filter(function(item) {
        if (item.primary_attr === attr) return item;
      });
  };

  render() {
    const { hero } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          vertical
          data={this.getHeroList(Hero)}
          renderItem={item => (
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({
                  modalVisible: true
                });
              }}
            >
              {this.renderHeroList(item)}
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal visible={this.state.modalVisible}>
          <Text>Hello kitty</Text>
          <Text>Hello kitty</Text>
          <Text>Hello kitty</Text>
          <Text>Hello kitty</Text>
          <Text>Hello kitty</Text>
          <Button
            title="Close"
            onPress={() => {
              this.setState({ modalVisible: false });
            }}
          />
        </Modal>
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
