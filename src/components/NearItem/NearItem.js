import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import Star from '../../assets/svg/star.svg';
const NearItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('WalkerView', {data})}>
      <View style={styles.container}>
        <View style={styles.ImageName}>
          <Image
            source={require('../../assets/Placeholders/placeholder-img.jpg')}
            style={styles.image}
          />
          <View>
            <Text style={styles.text}>{data.firstname}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.km}>
            <Text style={styles.text}>{data.km} km</Text>
          </View>
          <View style={styles.textIcon}>
            <Text style={styles.text}>{data.star} </Text>
            <Star widht={20} height={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearItem;
