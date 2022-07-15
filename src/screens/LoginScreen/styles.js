import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  header: {
    height: theme.HEIGHT_SCREEN / 5,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  body: {
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    flexDirection: 'column',
    height: 300,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {marginTop: theme.HEIGHT_SCREEN / 11},
});
