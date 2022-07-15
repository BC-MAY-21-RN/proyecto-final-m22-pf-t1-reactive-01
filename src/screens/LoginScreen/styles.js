import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    height: theme.HEIGHT_SCREEN / 5,
    alignItems: 'center',
  },
  body: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: 300,
  },
  forPass: {
    textAlign: 'right',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    marginTop: theme.HEIGHT_SCREEN / 33,
  },
  signup: {
    textAlign: 'center',
    fontSize: 18,
    textDecorationLine: 'underline ',
    color: theme.PRIMARY_COLOR,
  },
});
