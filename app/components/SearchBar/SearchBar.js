import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { Icon } from 'react-native-elements';

import colors from '../../constants/colors';

import styles from './styles';
import { connect } from 'react-redux';
import { searchHeroByName, clearSearchBar } from '../../actions/searchActions';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.props.searchBar}
          onChangeText={value => this.props.searchHeroByName(value)}
        />
        {this.props.searchBar ? (
          <Icon
            name="ios-close-circle"
            type="ionicon"
            color={colors.CRIMSON}
            size={35}
            containerStyle={styles.iconSearch}
            onPress={this.props.clearSearchBar}
          />
        ) : (
          <Icon
            name="ios-search"
            type="ionicon"
            color={colors.SILVER}
            size={35}
            containerStyle={styles.iconSearch}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchBar: state.searchBar.searchBar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearSearchBar: () => dispatch(clearSearchBar()),
    searchHeroByName: name => dispatch(searchHeroByName(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
