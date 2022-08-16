import {TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from '../../assets/svg/user.svg';

const HeaderProffile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/Placeholders/placeholder-img2.jpg')}
      />
      <View style={styles.containerText}>
        <Text style={styles.TextName}>Martín Montes</Text>
        <Text>Calle: 5 de mayo #25</Text>
        <Text>3121183837</Text>
      </View>

      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderProffile;
