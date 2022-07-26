import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FacebookIcon from '../../assets/svg/facebook.svg';
import GoogleIcon from '../../assets/svg/google.svg';
import theme from '../../assets/theme/theme';

const SocialButton = ({type, size}) => {
  const styles = StyleSheet.create({
    button: {
      margin: 5,
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: theme.BACKGROUND_COLOR,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
  });
  return (
    <TouchableOpacity style={styles.button}>
      {type === 'facebook' ? (
        <FacebookIcon widht={size} height={size} />
      ) : type === 'google' ? (
        <GoogleIcon widht={size} height={size} />
      ) : null}
    </TouchableOpacity>
  );
};

export default SocialButton;
