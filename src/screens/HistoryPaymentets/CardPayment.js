import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Date from '../../assets/svg/cardPayment/date.svg';
import Price from '../../assets/svg/cardPayment/price.svg';
import Reloj from '../../assets/svg/cardPayment/reloj.svg';

const CardPayment = ({data}) => {
  const {date, walker, hours, price} = data;

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/image/perfil/perfil1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{walker}</Text>
        </View>
        <View style={styles.iconText}>
          <Date widht={20} height={20} style={styles.nameText} />
          <Text style={styles.textIcon}>{date}</Text>
        </View>
        <View style={styles.iconText}>
          <Price widht={20} height={20} />
          <Text style={styles.textIcon}>$ {price}</Text>
        </View>
        <View style={styles.iconText}>
          <Reloj widht={20} height={20} />
          <Text style={styles.textIcon}>{hours} hs</Text>
        </View>
      </View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfa',
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfo: {
    justifyContent: 'space-between',
  },
  name: {
    paddingLeft: 25,
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 150,
  },
  nameText: {fontWeight: 'bold', fontSize: 18, color: 'black'},
  textIcon: {fontWeight: 'bold', fontSize: 14, color: 'grey'},
});
