import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  localizedName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  },
  infoRow: {
    flexDirection: 'row',
    color: '#ffffff'
  },
  hp: {
    color: 'red'
  },
  mp: {
    color: 'blue'
  },
  attrViewContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attrView: {
    width: 100,
    alignItems: 'center'
  },
  attr: {
    flexDirection: 'row'
  },
  attr_inc: {
    fontWeight: '600',
    color: 'green'
  },
  history: {
    color: 'white',
    textAlign: 'justify'
  }
});
