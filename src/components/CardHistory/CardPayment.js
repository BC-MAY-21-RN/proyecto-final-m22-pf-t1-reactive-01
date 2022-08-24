import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Date from '../../assets/svg/cardPayment/date.svg';
import Price from '../../assets/svg/cardPayment/price.svg';
import Reloj from '../../assets/svg/cardPayment/reloj.svg';
import Walker from '../../assets/svg/cardPayment/walker.svg';
import Check from '../../assets/svg/cardPayment/check.svg';
import {useState} from 'react';
const CardPayment = ({data}) => {
  const {date, hours, price, nameWalker, completed} = data;
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/image/perfil/perfil1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.iconText}>
          <Walker widht={20} height={20} />
          <Text style={styles.nameWalker}>{nameWalker}</Text>
        </View>
        <View style={styles.iconText}>
          <Date widht={20} height={20} />
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
        <View style={styles.iconText}>
          <Check widht={20} height={20} />
          <Text style={styles.textIcon}>{completed} </Text>
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
  nameWalker: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textTransform: 'capitalize',
  },
  iconText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 150,
  },
  textIcon: {fontWeight: 'bold', fontSize: 14, color: 'grey'},
});
