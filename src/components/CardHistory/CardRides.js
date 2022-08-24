import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Date from '../../assets/svg/rides/date.svg';
import Price from '../../assets/svg/rides/price.svg';
import Reloj from '../../assets/svg/rides/reloj.svg';
import Gps from '../../assets/svg/menuWalker/findpet.svg';
import Perfil from '../../assets/svg/rides/perfil.svg';
const CardRides = ({data, navigation}) => {
  const {date, nameWalker, hours, price, latitude, longitude} = data;

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/image/perfil/messi.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.iconText}>
          <Perfil widht={20} height={20} />
          <Text style={styles.nameWalker}>{nameWalker}</Text>
        </View>
        <View style={styles.iconText}>
          <Date widht={20} height={20} />
          <Text style={styles.textIcon}>{date}</Text>
        </View>
        <View style={styles.iconText}>
          <Price widht={20} height={20} />
          <Text style={styles.textIcon}>{price}</Text>
        </View>
        <View style={styles.iconText}>
          <Reloj widht={20} height={20} />
          <Text style={styles.textIcon}>{hours} hs</Text>
        </View>
      </View>
      <View style={styles.containerGps}>
        <View style={styles.gps}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('LocalitationPet', {latitude, longitude})
            }>
            <Gps widht={50} height={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardRides;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dae5f5',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    borderRadius: 10,
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 4,
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'space-around',

    paddingLeft: 5,
    paddingRight: 20,
  },
  nameWalker: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textTransform: 'capitalize',
    paddingLeft: 10,
  },
  iconText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 150,
  },
  textIcon: {fontWeight: 'bold', fontSize: 14, color: 'grey', paddingLeft: 10},
  containerGps: {
    flex: 0.4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  gps: {
    padding: 10,
    //justifyContent: 'center',
    //backgroundColor: 'white',
    //borderRadius: 150,
  },
});
