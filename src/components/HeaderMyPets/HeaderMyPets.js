import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from '../../assets/svg/arrow.svg';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>My pets</Text>
        <Icon width={90} height={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
