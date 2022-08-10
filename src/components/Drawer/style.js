import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'transparent'},
  textHeader: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.FONT_FAMILY_BOLD,
    fontWeight: theme.FONT_WEIGHT_NORMAL,
    fontSize: theme.FONT_SIZE_LARGE,
    maxWidth: 150,
  },
  img: {
    width: theme.WIDTH_SCREEN / 5,
    height: theme.WIDTH_SCREEN / 5,
    borderRadius: theme.WIDTH_SCREEN,
    marginRight: 10,
  },
  profile: {
    flexDirection: 'row',
    margin: 10,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  footer: {
    backgroundColor: '#f4f4f4',
    height: theme.HEIGHT_SCREEN / 15,
    justifyContent: 'center',
    borderTopColor: theme.PRIMARY_COLOR,
    borderTopWidth: 1,
  },
  textFooter: {
    marginLeft: 10,
    color: theme.SECONDARY_COLOR,
    fontFamily: theme.FONT_FAMILY_BOLD,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});
