import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import EmailIcon from '../../assets/svg/email.svg';
import PasswordIcon from '../../assets/svg/lock.svg';
import ShowPasswordIcon from '../../assets/svg/unlock.svg';
import UserIcon from '../../assets/svg/user.svg';

const Input = ({title, type, onChangeText, placeholder, state}) => {
  return (
    <View>
      <Text>{title}</Text>

      {type === 'name' ? (
        <>
          <UserIcon widht={25} height={20} style={styles.icon} />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Enter your full Name"
            placeholderTextColor="#818181"
            style={styles.text}
          />
        </>
      ) : type === 'email' ? (
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
            <PasswordIcon widht={25} height={25} style={styles.iconPassword} />
          ) : (
            <ShowPasswordIcon
              widht={25}
              height={25}
              style={styles.iconPassword}
            />
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
    marginTop: 43,
    marginLeft: 7,
    zIndex: 1,
  },
  iconPassword: {
    position: 'absolute',
    marginTop: 40,
    zIndex: 1,
  },
  text: {
    paddingLeft: 35,
    backgroundColor: '#ededed',
    fontFamily: 'OpenSans-Medium',
    marginVertical: 10,
  },
});
