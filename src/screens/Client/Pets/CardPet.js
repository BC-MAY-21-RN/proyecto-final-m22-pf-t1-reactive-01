import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
const CardPet = ({age, color, description, namePet, url}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imageCard} source={{uri: url}} />
      <Text style={styles.namePet}>{namePet}</Text>
      <View style={styles.rowcontainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>{age + ' years'}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>{color}</Text>
        </View>
      </View>
      <Text style={styles.textDescritption}>{description}</Text>
    </View>
  );
};

export default CardPet;
