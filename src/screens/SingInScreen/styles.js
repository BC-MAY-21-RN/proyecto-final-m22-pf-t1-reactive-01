import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    height: theme.HEIGHT_SCREEN / 6,
    alignItems: 'center',
  },
  body: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 400,
    marginBottom: theme.HEIGHT_SCREEN / 7,
  },
  buttonContainer: {
    marginTop: theme.HEIGHT_SCREEN / 33,
  },
});
