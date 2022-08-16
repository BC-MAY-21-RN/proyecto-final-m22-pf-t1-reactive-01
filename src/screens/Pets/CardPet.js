import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
const CardPet = ({name, image, male, color, age, characteristics}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imageCard} source={{uri: image}} />

      <View style={styles.infoCard}>
        <Text style={styles.namePet}>{name}</Text>
        <View style={styles.male}>
          <Text style={styles.maledscript}>{male}</Text>
        </View>
        <View style={styles.color}>
          <Text style={styles.colordscript}>{color}</Text>
        </View>
        <View style={styles.age}>
          <Text style={styles.agedscript}>{age}</Text>
        </View>
        <View style={styles.characteristics}>
          <Text style={styles.characteristicsdscript}>{characteristics}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardPet;
