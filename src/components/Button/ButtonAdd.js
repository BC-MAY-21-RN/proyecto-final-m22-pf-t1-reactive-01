import {TouchableOpacity} from 'react-native';
import React from 'react';
import Add from '../../assets/svg/add.svg';
const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Add widht={50} height={50} />
    </TouchableOpacity>
  );
};

export default ButtonAdd;
