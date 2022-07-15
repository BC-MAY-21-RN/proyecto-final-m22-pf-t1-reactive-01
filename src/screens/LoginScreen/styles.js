import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  body: {
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    flexDirection: 'column',
    height: 400,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {marginTop: theme.HEIGHT_SCREEN / 11},
});
