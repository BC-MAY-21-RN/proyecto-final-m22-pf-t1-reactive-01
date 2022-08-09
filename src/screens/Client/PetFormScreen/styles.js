import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingRight: 240,
    color: '#818181',
    fontFamily: 'OpenSans-Bold',
    marginVertical: 20,
    fontSize: 25,
  },
  buttonContainer: {
    marginTop: theme.HEIGHT_SCREEN / 8,
  },
});
