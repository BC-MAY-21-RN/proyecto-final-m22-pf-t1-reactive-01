import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: theme.WIDTH_SCREEN,
    backgroundColor: theme.backgroundColor,
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.6,
  },
});
