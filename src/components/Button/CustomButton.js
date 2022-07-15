import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../assets/theme/theme';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: theme.SECONDARY_COLOR,
    height: 50,
    marginBottom: 30,
    borderRadius: 20,
  
  },
  title: {
    fontSize: 20,
    letterSpacing: 1.5,
    textAlign: 'center',
    position: 'relative',
    fontFamily: theme.FONT_FAMILY_BOLD,
    color: theme.BACKGROUND_COLOR,
  },
});
