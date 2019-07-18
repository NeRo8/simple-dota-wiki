import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    height: 40,
    marginVertical: 5,
    padding: 5,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  iconSearch: {
    backgroundColor: colors.WHITE,
    height: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingRight: 10
  }
});
