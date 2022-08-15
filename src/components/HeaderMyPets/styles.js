import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    height: 110,
    borderRadius: 10,
    backgroundColor: '#9ADCFF',
    justifyContent: 'center',
    borderBottomColor: 'grey',
  },
  text: {
    paddingLeft: 110,
    color: '#000000',
    fontFamily: theme.FONT_FAMILY_BOLD,
    marginVertical: -42,
    paddingTop: 18,
    fontSize: 45,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
