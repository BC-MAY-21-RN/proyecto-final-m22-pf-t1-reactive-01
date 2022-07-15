import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FacebookIcon from '../../assets/svg/facebook.svg';
import GoogleIcon from '../../assets/svg/google.svg';
import theme from '../../assets/theme/theme';

const SocialButton = ({type, size}) => {
  return (
    <TouchableOpacity style={(styles.container, {width: size, height: size})}>
      {type === 'facebook' ? (
        <FacebookIcon widht={size} height={size} />
      ) : type === 'google' ? (
        <GoogleIcon widht={size} height={size} />
      ) : null}
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
