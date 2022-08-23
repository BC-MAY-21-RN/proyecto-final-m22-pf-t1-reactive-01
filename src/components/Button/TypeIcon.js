import {View, Text} from 'react-native';
import React from 'react';
import Pru from '../../assets/svg/a.svg';
import Mypets from '../../assets/svg/MenuIcons/mypets.svg';
import Find from '../../assets/svg/MenuIcons/petlocation.svg';
import FindWalker from '../../assets/svg/MenuIcons/findpet.svg';
import User from '../../assets/svg/user.svg';
import Phone from '../../assets/svg/phone.svg';
import Star from '../../assets/svg/star.svg';
import Hiy from '../../assets/svg/hiy.svg';
import Invite from '../../assets/svg/invite.svg';
import Lock from '../../assets/svg/lock.svg';
import Trash from '../../assets/svg/trash.svg';
import Exit from '../../assets/svg/exit.svg';
import HistoryWalker from '../../assets/svg/menuWalker/history.svg';
import PetsWalker from '../../assets/svg/menuWalker/pets.svg';
import ExitWalker from '../../assets/svg/menuWalker/exit.svg';
import ProfileWalker from '../../assets/svg/menuWalker/profile.svg';

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
      ) : type === 'profile' ? (
        <>
          <Pru widht={100} height={100} />
        </>
      ) : type === 'history' ? (
        <>
          <Hiy widht={100} height={100} />
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
      ) : type === 'User' ? (
        <>
          <User widht={30} height={30} />
        </>
      ) : type === 'Phone' ? (
        <>
          <Phone widht={30} height={30} />
        </>
      ) : type === 'Hiy' ? (
        <>
          <Hiy widht={30} height={30} />
        </>
      ) : type === 'Invite' ? (
        <>
          <Invite widht={30} height={30} />
        </>
      ) : type === 'Trash' ? (
        <>
          <Trash widht={30} height={30} />
        </>
      ) : type === 'Lock' ? (
        <>
          <Lock widht={30} height={30} />
        </>
      ) : type === 'Star' ? (
        <>
          <Star widht={30} height={30} />
        </>
      ) : type === 'historyWalker' ? (
        <>
          <HistoryWalker widht={100} height={100} />
        </>
      ) : type === 'acceptRides' ? (
        <>
          <PetsWalker widht={100} height={100} />
        </>
      ) : type === 'exit' ? (
        <>
          <Exit widht={100} height={100} />
        </>
      ) : type === 'exitWalker' ? (
        <>
          <ExitWalker widht={100} height={100} />
        </>
      ) : type === 'profileWalker' ? (
        <>
          <ProfileWalker widht={100} height={100} />
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
