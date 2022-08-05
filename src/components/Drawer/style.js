import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'transparent'},
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
  test: {backgroundColor: 'red'},
});
