import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
const NearItem = ({name, hour, distance}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Placeholders/placeholder-img.jpg')}
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.text}>{hour}</Text>
        <Text style={styles.text}>{distance}</Text>
      </View>
    </View>
  );
};

export default NearItem;
