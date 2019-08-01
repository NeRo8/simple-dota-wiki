import { StyleSheet, Platform } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'ios' ? 40 : 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: colors.CRIMSON
  },
  buttonBack: {
    backgroundColor: colors.CRIMSON,
    marginBottom: 20
  }
});
