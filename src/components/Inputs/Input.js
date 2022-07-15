import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import EmailIcon from '../../assets/svg/email.svg';
import PasswordIcon from '../../assets/svg/lock.svg';
import ShowPasswordIcon from '../../assets/svg/unlock.svg';

const Input = ({type, onChangeText, placeholder, state}) => {
  return (
    <View>
      {type === 'email' ? (
        <>
          <EmailIcon widht={25} height={20} style={styles.icon} />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Enter your email"
            placeholderTextColor="#818181"
            style={styles.text}
          />
        </>
      ) : type === 'password' ? (
        <>
          {state ? (
            <PasswordIcon widht={25} height={25} style={styles.icon} />
          ) : (
            <ShowPasswordIcon widht={25} height={25} style={styles.icon} />
          )}
          <TextInput
            onChangeText={onChangeText}
            placeholder="Enter your password.. "
            placeholderTextColor="#818181"
            style={styles.text}
            secureTextEntry={state}
          />
        </>
      ) : (
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.text}
          placeholderTextColor="#818181"
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    marginTop: 25,
    zIndex: 1,
  },
  text: {
    paddingLeft: 35,
    backgroundColor: '#ededed',
    fontFamily: 'OpenSans-Medium',
    marginVertical: 10,
  },
});
