import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    color: theme.BACKGROUND_COLOR,
    alignItems: 'center',
    height: theme.HEIGHT_SCREEN / 5,
  },
  header: {
    height: theme.HEIGHT_SCREEN / 5,
    alignItems: 'center',
  },
  mainText: {
    fontFamily: theme.FONT_FAMILY_BOLD,
    fontSize: theme.FONT_SIZE_HIGHER,
    fontWeight:theme.FONT_WEIGHT_BOLD
  },
  switcher: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',

  },
  switcherText: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_HIGHER,
    fontWeight:theme.FONT_WEIGHT_LIGHT

  },
});
