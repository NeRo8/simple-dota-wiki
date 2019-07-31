import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import IconAttr from '../IconAttr';

import styles from './styles';
import { Icon } from 'react-native-elements';

/*
  {
    
    base_mr: 25,
    base_attack_min: 29,
    base_attack_max: 33,
   
    attack_range: 150,
    projectile_speed: 0,
    attack_rate: 1.4,
    
    turn_rate: 0.5,
    cm_enabled: true,
    legs: 2,
    pro_ban: 155,
    hero_id: 1,
    pro_win: 47,
    pro_pick: 96,
    '2_pick': 7816,
    '2_win': 3773,
    '1_pick': 1297,
    '1_win': 611,
    null_pick: 7606880,
    null_win: 0,
    '7_pick': 1258,
    '7_win': 572,
    '4_pick': 24027,
    '4_win': 11646,
    '3_pick': 15875,
    '3_win': 7596,
    '8_pick': 224,
    '8_win': 108,
    '5_pick': 21448,
    '5_win': 10603,
    '6_pick': 9273,
    '6_win': 4467
  },
*/

class HeroProfile extends Component {
  _renderAttrView = hero => (
    <View style={styles.attrViewContainer}>
      <View style={styles.attrView}>
        <IconAttr item={'str'} />
        <View style={styles.attr}>
          <Text>{hero.base_str} / </Text>
          <Text style={styles.attr_inc}>+{hero.str_gain}</Text>
        </View>
      </View>
      <View style={styles.attrView}>
        <IconAttr item={'agi'} />
        <View style={styles.attr}>
          <Text>{hero.base_agi} / </Text>
          <Text style={styles.attr_inc}>+{hero.agi_gain}</Text>
        </View>
      </View>
      <View style={styles.attrView}>
        <IconAttr item={'int'} />
        <View style={styles.attr}>
          <Text>{hero.base_int} / </Text>
          <Text style={styles.attr_inc}>+{hero.int_gain}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    const { hero } = this.props;
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

        <Text>Attack Type:{hero.attack_type}</Text>

        <Text>Roles:{hero.roles}</Text>

        <View style={styles.infoRow}>
          <Text>HP:{hero.base_health + hero.base_str * 20} / </Text>
          <Text style={styles.attr_inc}>+{hero.base_health_regen}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text>MP:{hero.base_mana} / </Text>
          <Text style={styles.attr_inc}>+{hero.base_mana_regen}</Text>
        </View>

        <Text>Main Armor:{hero.base_armor + hero.base_agi * 0.16}</Text>

        <Text>Move Speed: {hero.move_speed}</Text>

        {this._renderAttrView(hero)}
      </View>
    );
  }
}

export default HeroProfile;
