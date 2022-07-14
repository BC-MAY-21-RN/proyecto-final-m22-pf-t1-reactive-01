import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  View1: {
    backgroundColor: theme.BACKGROUND_COLOR,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  View3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    width: '95%',
    borderRadius: 10,
    height: 60,
    marginLeft: 20,
  },
  input: {
    position: 'relative',
    height: '100%',
    width: '90%',
    fontFamily: 'OpenSans-Medium',
    paddingLeft: 20,
  },
  View4: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    width: '95%',
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginTop: 20,
  },
  google_btn: {
    height: 75,
    width: '50%',

    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  facebook_btn: {
    height: 75,
    width: '50%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  social_img: {
    width: 70,
    height: 75,
    marginLeft: 45,
  },
  forgot: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#818181',
    alignSelf: 'flex-end',
    paddingTop: 20,
  },
  socialView: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  View5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
    backgroundColor: '#fff',
  },
});
