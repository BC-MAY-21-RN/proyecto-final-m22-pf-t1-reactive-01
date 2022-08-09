import theme from '../../assets/theme/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  input: {
    fontFamily: 'OpenSans-Medium',
    margin: 10,
    backgroundColor: '#ededed',
  },
  inputshort: {
    fontFamily: 'OpenSans-Medium',
    margin: 10,
    backgroundColor: '#ededed',
    width: theme.WIDTH_SCREEN / 1.5,
  },
  inputmultiline: {
    backgroundColor: '#ededed',
    height: 100,
    maxHeight: 100,
  },
  inputgroup: {
    fontFamily: 'OpenSans-Medium',
    margin: 10,
    backgroundColor: '#ededed',
    width: theme.WIDTH_SCREEN / 2.3,
  },
  dropdown: {
    margin: 10,
    width: theme.WIDTH_SCREEN / 2.3,
  },
  rowStyle: {
    width: 150,
    backgroundColor: '#F6F6F6',
  },
});
