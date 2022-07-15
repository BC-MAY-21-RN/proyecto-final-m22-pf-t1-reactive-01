import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FacebookIcon from '../../assets/svg/facebook.svg';
import GoogleIcon from '../../assets/svg/google.svg';
import theme from '../../assets/theme/theme';

const SocialButton = ({type, size}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {type === 'facebook' ? (
        <FacebookIcon />
      ) : type === 'google' ? (
        <GoogleIcon widht={size} height={size} />
      ) : null}
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 50,
    height: 52,
    borderRadius: 25,
    margin: 5,
  },
});
