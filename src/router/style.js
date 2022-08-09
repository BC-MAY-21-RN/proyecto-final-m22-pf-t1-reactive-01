import {StyleSheet} from 'react-native';
import theme from '../assets/theme/theme';

export const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#fbfbfbe5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    maxWidth: theme.WIDTH_SCREEN / 1.5,
  },
  item: {
    backgroundColor: theme.BACKGROUND_COLOR,
    borderWidth: 1,
    marginLeft: 0,
    width: theme.WIDTH_SCREEN,
    borderColor: theme.PRIMARY_COLOR,
  },
  text: {
    color: theme.SECONDARY_COLOR,
    fontFamily: theme.FONT_FAMILY_BOLD,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});
