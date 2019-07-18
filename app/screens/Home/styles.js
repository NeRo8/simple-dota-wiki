import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
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
