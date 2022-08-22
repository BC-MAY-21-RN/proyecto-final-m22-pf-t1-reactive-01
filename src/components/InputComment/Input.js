import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles'
const Input = ({type, onChangeText, placeholder}) => {
  return (
    <View>
      {type === 'comment' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder=""
            placeholderTextColor="#818181"
            style={styles.inputmultiline}
          />
        </>
      ) : (
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#818181"
        />
      )}
    </View>
  );
};

export default Input;
