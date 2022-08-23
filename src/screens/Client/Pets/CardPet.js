import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
const CardPet = ({
  age,
  breed,
  color,
  description,
  gender,
  namePet,
  typepet,
  url,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgaContainer}>
        <Image style={styles.imageCard} source={{uri: url}} />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.namePet}>{namePet}</Text>
        <View style={styles.male}>
          <Text style={styles.maledscript}>{gender}</Text>
        </View>
        <View style={styles.color}>
          <Text style={styles.colordscript}>{color}</Text>
        </View>
        <View style={styles.age}>
          <Text style={styles.agedscript}>{age}</Text>
        </View>
        <View style={styles.characteristics}>
          <Text style={styles.characteristicsdscript}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardPet;
