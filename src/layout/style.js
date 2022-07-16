import {StyleSheet} from 'react-native';
import theme from '../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: theme.WIDTH_SCREEN,
    height: theme.HEIGHT_SCREEN,
    padding: 10,
    backgroundColor: theme.BACKGROUND_COLOR,
  },
});
