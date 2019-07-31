import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import IconAttr from '../IconAttr';

import styles from './styles';

/*
  {
    
    base_armor: -1,
    base_mr: 25,
    base_attack_min: 29,
    base_attack_max: 33,
    base_str: 23,
    base_agi: 24,
    base_int: 12,
    str_gain: 1.3,
    agi_gain: 3.2,
    int_gain: 1.8,
    attack_range: 150,
    projectile_speed: 0,
    attack_rate: 1.4,
    move_speed: 310,
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
  render() {
    const { hero } = this.props;
    return (
      <View>
        <Image
          resizeMode={'contain'}
          style={{ width: 200, height: 100 }}
          source={{ uri: `https://api.opendota.com${hero.img}` }}
        />
        <Text>{hero.localized_name}</Text>
        <IconAttr item={hero.primary_attr} />
        <Text>{hero.base_health}</Text>
        <Text>{hero.base_health_regen}</Text>
        <Text>{hero.attack_type}</Text>
        <Text>{hero.roles}</Text>
        <Text>{hero.base_mana}</Text>
        <Text>{hero.base_mana_regen}</Text>
        <Text>{hero.base_armor}</Text>
      </View>
    );
  }
}

export default HeroProfile;
