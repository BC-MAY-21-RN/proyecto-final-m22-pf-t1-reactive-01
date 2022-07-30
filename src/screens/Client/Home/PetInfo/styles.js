import {StyleSheet} from 'react-native';
import theme from '../../../../assets/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    color: theme.BACKGROUND_COLOR,
  },
  header: {
    height: theme.HEIGHT_SCREEN / 5,
    alignItems: 'center',
  },
  img:{
    width:250,
    height:250,
    borderRadius:120,

  },
  body: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: 300,
  },
  detail: {
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: theme.FONT_FAMILY_BOLD,
    color: theme.FONT_COLOR,
    fontSize: theme.FONT_SIZE_HIGHER,
  },
  TextDetail: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.FONT_COLOR,
    fontSize: theme.FONT_SIZE_XLARGE,
  },
});
