import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles} from './style';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/Placeholders/placeholder-img.jpg')}
          style={styles.img}
        />
        <Text style={styles.textHeader}>Jheniffer Stifler Madisson</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Exit</Text>
      </View>
    </View>
  );
}
