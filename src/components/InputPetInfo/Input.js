/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import theme from '../../assets/theme/theme';

const Input = ({type, onChangeText, placeholder}) => {
  const petArray = ['Dog', 'Cat'];
  const [selectedPet, setSelectedPet] = useState('');

  const breedArray = [
    'Bulldog',
    'Pastor Aleman',
    'Husky',
    'Poodle',
    'Pomerania',
    'Pug',
    'Gran Danes',
    'Doberman',
  ];
  const [selectedBreed, setSelectedBreed] = useState('');

  return (
    <View>
      <View style={styles.header} />

      {type === 'firstname' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="First Name"
            placeholderTextColor="#818181"
            style={styles.firstname}
          />
        </>
      ) : type === 'lastname' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Last Name"
            placeholderTextColor="#818181"
            style={styles.lastname}
          />
        </>
      ) : type === 'typepet' ? (
        <View>
          <SelectDropdown
            buttonStyle={styles.dropdownPet}
            defaultButtonText="Type Pet"
            data={petArray}
            onSelect={pet => {
              setSelectedPet(pet);
            }}
            buttonTextAfterSelection={(selectedPet, index) => {
              return selectedPet;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            rowStyle={{width: 150, backgroundColor: '#F6F6F6'}}
          />
        </View>
      ) : type === 'breed' ? (
        <View>
          <SelectDropdown
            buttonStyle={styles.dropdownBreed}
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
            rowStyle={{width: 150, backgroundColor: '#F6F6F6'}}
          />
        </View>
      ) : type === 'age' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Age"
            placeholderTextColor="#818181"
            style={styles.age}
          />
        </>
      ) : type === 'gender' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Gender"
            placeholderTextColor="#818181"
            style={styles.gender}
          />
        </>
      ) : type === 'color' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Color of your Pet"
            placeholderTextColor="#818181"
            style={styles.color}
          />
        </>
      ) : type === 'description' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Description :"
            placeholderTextColor="#818181"
            style={styles.description}
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
  },

  firstname: {
    paddingLeft: 10,
    backgroundColor: '#ededed',
    fontFamily: 'OpenSans-Medium',
    width: '150%',
    borderRadius: 10,
  },
  lastname: {
    paddingLeft: 20,
    backgroundColor: '#ededed',
    fontFamily: 'OpenSans-Medium',
    marginHorizontal: 100,
    borderRadius: 10,
    width: '60%',
  },
  dropdownPet: {
    width: 170,
    paddingLeft: 60,
    borderRadius: 10,
  },
  dropdownBreed: {
    width: 150,
    paddingLeft: 40,
    marginHorizontal: 70,
    borderRadius: 10,
  },
  age: {
    paddingLeft: 10,
    width: 150,
    backgroundColor: '#ededed',
    borderRadius: 10,
  },
  gender: {
    width: 150,
    marginHorizontal: 70,
    paddingLeft: 10,
    backgroundColor: '#ededed',
    borderRadius: 10,
    position: 'static',
  },
  color: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    width: '70%',
  },
  description: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    width: '70%',
    paddingTop: 80,
    position: 'absolute',
  },
});
