import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {},
  nearContainer: {
    marginTop: theme.HEIGHT_SCREEN / 13,
    backgroundColor: '#efefef',
    height: theme.HEIGHT_SCREEN / 2.5,
    borderTopWidth: 1,
  },
  containerButtons: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  texto: {
    backgroundColor: '#b3b0ff',
    height: 400,
  },
  botones: {
    backgroundColor: '#dde4f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
