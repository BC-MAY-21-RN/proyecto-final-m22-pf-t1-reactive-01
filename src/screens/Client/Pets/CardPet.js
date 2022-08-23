import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
const CardPet = ({age, color, description, namePet}) => {
  const imagen =
    'https://firebasestorage.googleapis.com/v0/b/mypets-6f047.appspot.com/o/Photos%2FF0I4UnMi5nS8umzIccCHJpdyQof2%2Frn_image_picker_lib_temp_ad02dda0-0655-4a63-b766-0d42f3abe336.jpg?alt=media&token=79a90e4d-95b3-4a24-86d2-4b4db0a40464 ';
  return (
    <View style={styles.card}>
      <Image style={styles.imageCard} source={{uri: imagen}} />
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
