import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: '#F4FBFB',
    paddingBottom: 50,
    borderRadius: 10,
    borderColor: '#9ADCFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    width: 155,
    height: 155,
    borderRadius: 10,
  },
  infoCard: {
    paddingHorizontal: 25,
  },
  namePet: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 50,
  },
  male: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  maledscript: {
    fontSize: 18,
    color: '#000000',
  },
  color: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
  },
  colordscript: {
    fontSize: 18,
    color: '#000000',
  },
  age: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
  },
  agedscript: {
    fontSize: 18,
    color: '#000000',
  },
  characteristics: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
  },
  characteristicsdscript: {
    fontSize: 18,
    color: '#000000',
  },
});
