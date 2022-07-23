import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from '../../assets/svg/chevron.svg';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
