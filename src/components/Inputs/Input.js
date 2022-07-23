import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import EmailIcon from '../../assets/svg/email.svg';
import PasswordIcon from '../../assets/svg/lock.svg';
import UserIcon from '../../assets/svg/user.svg';

const Input = ({title, type, onChangeText, placeholder, error, value}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text>{title}</Text>
        <Text style={styles.error}>{error}</Text>
      </View>

      {type === 'name' ? (
        <>
          <UserIcon widht={25} height={20} style={styles.icon} />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Enter your full Name"
            placeholderTextColor="#818181"
            style={styles.text}
            value={value}
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
            value={value}
            keyboardType="email-address"
          />
        </>
      ) : type === 'password' ? (
        <>
          <PasswordIcon widht={25} height={25} style={styles.iconPassword} />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Enter your password.. "
            placeholderTextColor="#818181"
            style={styles.text}
            secureTextEntry={true}
            value={value}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
    textAlign: 'right',
  },
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
