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
        <Text>Frederic</Text>
        <Text>NearItem</Text>
      </View>
      <View style={styles.info}>
        <Text>3:20</Text>
        <Text>1.2 Km</Text>
      </View>
    </View>
  );
};

export default NearItem;
