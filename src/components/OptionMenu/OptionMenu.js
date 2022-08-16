import {TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from '../../assets/svg/go.svg';
import TypeIcon from '../Button/TypeIcon';

const OptionMenu = ({navigation, title, type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconMenu}>
        <TypeIcon type={type} />
      </View>
      <View style={styles.Tex}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionMenu;
