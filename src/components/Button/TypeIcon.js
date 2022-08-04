import {View, Text} from 'react-native';
import React from 'react';
import Pru from '../../assets/svg/a.svg';
import Mypets from '../../assets/svg/MenuIcons/mypets.svg';
import Find from '../../assets/svg/MenuIcons/petlocation.svg';
import FindWalker from '../../assets/svg/MenuIcons/findpet.svg';

const TypeIcon = ({type}) => {
  return (
    <View>
      {type === 'mypets' ? (
        <>
          <Mypets widht={100} height={100} />
        </>
      ) : type === 'find' ? (
        <>
          <FindWalker widht={100} height={100} />
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
