import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/theme';

export const styles = StyleSheet.create({
  card: {
    display: 'flex',

    marginVertical: 20,
    paddingBottom: 50,
    borderRadius: 10,
    borderColor: '#9ADCFF',
    borderWidth: 2,
    height: 250,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  imageCard: {
    borderRadius: 10,
    flex: 1,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    aspectRatio: 2,
  },
  namePet: {
    color: '#c2cece',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 25,
    marginTop: 60,
    textShadowRadius: 15,
    fontFamily: theme.FONT_FAMILY,
  },
  dataContainer: {
    height: 50,
    backgroundColor: '#e7dfdfc5',
    justifyContent: 'center',
    width: 125,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 5,
  },
  dataText: {
    fontWeight: 'bold',
    textShadowRadius: 10,
  },
  rowcontainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
  },
  textDescritption: {
    maxWidth: 250,
    textShadowRadius: 15,
    marginLeft: 30,
    marginTop: 10,
    color: 'white',
    fontSize: 13,
    fontWeight: 'blod',
  },
});
