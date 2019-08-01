import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Hero from '../../data/Hero';

import SearchBar from '../../components/SearchBar';

import iconAttr from '../../constants/iconAttr';

import styles from './styles';
import colors from '../../constants/colors';

class Home extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

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
            onPress={() => this.props.navigation.navigate('Profile', { heroId: item.id })}
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

  getHeroList = heroArr => heroArr.filter(item => item.localized_name.toLowerCase().match(this.props.searchStr.toLowerCase()))

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getHeroList(Hero)}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<SearchBar />}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchStr: state.searchBar.searchBar
  };
}

export default connect(mapStateToProps)(Home);
