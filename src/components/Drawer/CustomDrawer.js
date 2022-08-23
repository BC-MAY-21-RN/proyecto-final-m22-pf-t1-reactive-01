import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles} from './style';
import auth from '@react-native-firebase/auth';

export default function CustomDrawer(props) {
  const current = auth().currentUser;
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{uri: current.photoURL}} style={styles.img} />
        <Text style={styles.textHeader}>{current.displayName}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
