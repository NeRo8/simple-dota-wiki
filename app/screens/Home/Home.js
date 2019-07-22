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
  state = {
    filter_by_attack: 'all',
    filter_by_role: 'all',
    filter_by_attr: 'all',
    hero_list: []
  };

  componentDidUpdate() {
    console.log(
      `${this.state.filter_by_attack}, ${this.state.filter_by_role}, ${
        this.state.filter_by_attr
      }`
    );
  }

  setFilterByRole = role => {
    this.setState({
      filter_by_role: role
    });
  };

  setFilterByAttr = attr => {
    this.setState({
      filter_by_attr: attr
    });
  };

  setFilterByAttackType = attack => {
    this.setState({
      filter_by_attack: attack
    });
  };

  getNewHeroList = oldHeroList => {
    const {
      filter_by_attack,
      filter_by_role,
      filter_by_attr,
      hero_list
    } = this.state;

    if (filter_by_attack != 'all') {
      return oldHeroList.filter(item => item.attack_type === filter_by_attack);
    }

    return oldHeroList;
  };

  _renderAttr = item => (
    <View>
      <TouchableOpacity
        onPress={() => {
          this.setFilterByAttr(item);
        }}
      >
        {item === 'str' ? (
          <Image source={iconAttr.STR} style={styles.icon} />
        ) : item === 'agi' ? (
          <Image source={iconAttr.AGI} style={styles.icon} />
        ) : (
          <Image source={iconAttr.INT} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );

  _renderRoles = item => (
    <FlatList
      horizontal
      data={item.roles}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            this.setFilterByRole(item);
          }}
        >
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
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Profile', { heroId: item.id })
            }
          >
            <Text style={styles.localized_name}>{item.localized_name}</Text>
          </TouchableOpacity>
          {this._renderRoles(item)}
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setFilterByAttackType(item.attack_type);
          }}
        >
          <View style={styles.attack_type}>
            <Text>{item.attack_type}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getNewHeroList(Hero)}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<SearchBar />}
        />
      </View>
    );
  }
}

export default Home;
