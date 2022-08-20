import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useCard} from '../../methods/hook/useCard';
const InputCreditCard = ({
  title,
  placeholder,
  type,
  value,
  inputType,
  test,
}) => {
  const {number, expery, code, onChange, valuePlaceholder, setnumber} =
    useCard();

  function onFocus() {
    console.log('jeje');
  }

  //console.log(number);
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.numberCard}
          placeholder={placeholder}
          keyboardType={type}
          //value={}
          onChangeText={text => setnumber(text)}
          onFocus={test}
        />
        <View style={styles.line}></View>
      </View>
    </View>
  );
};

export default InputCreditCard;

const styles = StyleSheet.create({
  container: {},
  text: {
    //backgroundColor: 'white',
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {fontWeight: 'bold', color: 'black'},
  input: {
    justifyContent: 'space-evenly',
    height: 80,
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'black',
    //backgroundColor: 'blue',
  },
  numberCard: {
    //backgroundColor: 'white',
  },
});
