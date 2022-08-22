import {TextInput, View, Text} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './style';
import {useSelector} from '../../methods/hook/useSelector';
const Input = ({type, onChangeText, placeholder, value, error}) => {
  const petArray = ['Select', 'Dog', 'Cat'];
  const breedArray = [
    'Bulldog',
    'Pastor Aleman',
    'Husky',
    'Poodle',
    'Pomerania',
    'Pug',
    'Gran Danes',
    'Doberman',
    'Mongrel',
    'Undefined',
  ];

  const {setSelectedPet, setSelectedBreed} = useSelector();

  return (
    <View>
      <View style={styles.header} />

      {type === 'firstname' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="First Name"
            placeholderTextColor="#818181"
            style={styles.inputshort}
            value={value}
          />
        </>
      ) : type === 'lastname' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Last Name"
            placeholderTextColor="#818181"
            style={styles.inputgroup}
            value={value}
          />
        </>
      ) : type === 'typepet' ? (
        <View>
          <SelectDropdown
            buttonStyle={styles.dropdown}
            defaultButtonText="Type Pet"
            data={petArray}
            onSelect={pet => {
              setSelectedPet(pet);
            }}
            buttonTextAfterSelection={(selectedPet, index) => {
              return index;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            rowStyle={styles.rowStyle}
            value={value}
          />
        </View>
      ) : type === 'breed' ? (
        <View>
          <SelectDropdown
            buttonStyle={styles.dropdown}
            defaultButtonText="Breed"
            data={breedArray}
            onSelect={breed => {
              setSelectedBreed(breed);
            }}
            buttonTextAfterSelection={(selectedBreed, index) => {
              return selectedBreed;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            rowStyle={styles.rowStyle}
            value={value}
          />
        </View>
      ) : type === 'age' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Age"
            placeholderTextColor="#818181"
            style={styles.inputgroup}
            value={value}
          />
        </>
      ) : type === 'gender' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Gender"
            placeholderTextColor="#818181"
            style={styles.inputgroup}
            value={value}
          />
        </>
      ) : type === 'color' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Color of your Pet"
            placeholderTextColor="#818181"
            style={styles.input}
            value={value}
          />
        </>
      ) : type === 'description' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Description"
            multiline
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
          value={value}
        />
      )}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Input;
