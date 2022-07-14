import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.SCREEN_HEIGHT,
    width: theme.SCREEN_WIDTH,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  containerStatusBar: {
    hidden: true,
  },
  logo: {
    fontFamily: theme.FONT_FAMILY_LOGO,
    fontSize: theme.FONT_SIZE_HIGHER,
    color: theme.BACKGROUND_COLOR,
  },
});
