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

import Hero from '../../data/Hero';

import SearchBar from '../../components/SearchBar';

import iconAttr from '../../constants/iconAttr';
import colors from '../../constants/colors';

import styles from './styles';

class Home extends Component {
  _renderAttr = item => (
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

  _renderRoles = item => (
    <FlatList
      horizontal
      data={item.roles}
      renderItem={({ item }) => <Text style={styles.roles}>{item}</Text>}
      keyExtractor={item => item.toString()}
    />
  );

  _renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.listContainer}>
        <Text style={styles.id}>{item.id}</Text>
        {this._renderAttr(item.primary_attr)}
        <View style={{ flexDirection: 'column', width: '60%' }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Profile', { heroId: item.id })
            }
          >
            <Text style={styles.localized_name}>{item.localized_name}</Text>
          </TouchableOpacity>
          {this._renderRoles(item)}
        </View>
        <View style={styles.attack_type}>
          <Text>{item.attack_type}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Hero}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<SearchBar />}
        />
      </View>
    );
  }
}

export default Home;
