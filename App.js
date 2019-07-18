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
  TouchableOpacity,
  Modal,
  Button,
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements';

import Hero from './app/data/Hero';
import HeroStats from './app/data/HeroStats';

import color from './app/constants/colors';
import iconAttr from './app/constants/iconAttr';
import colors from './app/constants/colors';

export default class App extends Component {
  state = {
    filter: 'all'
  };

  _renderAttr = item => (
    <TouchableOpacity>
      <View>
        {item === 'str' ? (
          <Image source={iconAttr.STR} style={styles.icon} />
        ) : item === 'agi' ? (
          <Image source={iconAttr.AGI} style={styles.icon} />
        ) : (
          <Image source={iconAttr.INT} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );

  _renderRoles = item => (
    <FlatList
      horizontal
      data={item.roles}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text style={styles.roles}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.toString()}
    />
  );

  _renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.listContainer}>
        <Text style={styles.id}>{item.id}</Text>
        {this._renderAttr(item.primary_attr)}
        <View style={{ flexDirection: 'column', width: '60%' }}>
          <TouchableOpacity>
            <Text style={styles.localized_name}>{item.localized_name}</Text>
          </TouchableOpacity>
          {this._renderRoles(item)}
        </View>
        <TouchableOpacity>
          <View style={styles.attack_type}>
            <Text>{item.attack_type}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  _renderSearchBar = item => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TextInput
        style={{
          height: 40,
          marginVertical: 5,
          flex: 1,
          padding: 5,
          backgroundColor: colors.SILVER,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10
        }}
      />
      <Icon
        name="ios-search"
        type="ionicon"
        color="#000"
        size={35}
        containerStyle={{
          backgroundColor: colors.SILVER,
          height: 40,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10
        }}
        iconStyle={{ paddingRight: 5 }}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Hero}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={this._renderSearchBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#B50058'
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  id: {
    color: colors.SILVER,
    fontSize: 14,
    width: 30,
    fontWeight: '500'
  },
  localized_name: {
    color: colors.SILVER,
    fontWeight: '500',
    fontSize: 18
  },
  icon: {
    height: 29,
    width: 29,
    marginRight: 10
  },
  attack_type: {
    fontWeight: '300',
    fontSize: 14,
    backgroundColor: colors.SILVER,
    borderRadius: 20,
    padding: 5,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  roles: {
    margin: 5,
    color: colors.SILVER
  }
});
