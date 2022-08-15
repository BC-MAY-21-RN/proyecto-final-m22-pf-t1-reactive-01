import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
const NearItem = ({data}) => {
  const navigation = useNavigation();
  //const {id, hour, distance} = data;
  //console.log('item');

  return (
    <TouchableOpacity onPress={() => navigation.navigate('WalkerView', {data})}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Placeholders/placeholder-img.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.text}>{data.id}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{data.hour}</Text>
          <Text style={styles.text}>{data.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearItem;
