import {View, Text} from 'react-native';
import React from 'react';
import Pru from '../../assets/svg/a.svg';
const TypeIcon = ({type}) => {
  return (
    <View>
      {type === 'a' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'b' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'c' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'd' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'e' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'f' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'g' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : (
        <>
          <Text>none icon</Text>
        </>
      )}
    </View>
  );
};

export default TypeIcon;
