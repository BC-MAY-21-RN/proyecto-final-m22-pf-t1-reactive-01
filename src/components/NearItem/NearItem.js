import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
const NearItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('WalkerView', {data})}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Placeholders/placeholder-img.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.text}>{data.firstname}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{data.km} km</Text>
          <Text style={styles.text}>{data.star} stars</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearItem;
