import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const CardCreditBack = ({code}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_card}>
        <ImageBackground
          source={require('../../assets/tarjeta/images/card-front.png')}
          resizeMode="stretch"
          style={styles.image}>
          <View style={styles.card_credit}>
            <View style={styles.lector}></View>
            <View style={styles.codeSegurity}>
              <View style={styles.containerTextCode}>
                <View>
                  <Text style={styles.textCode}>{code}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default CardCreditBack;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
  },
  container_card: {
    width: Dimensions.get('window').width - 15,
    height: 200,
    backgroundColor: '#5b02b5',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'black',
  },
  image: {width: '100%', height: 200},
  card_credit: {
    flex: 1,
  },
  lector: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    marginTop: 10,
  },
  codeSegurity: {
    flex: 1,
    alignSelf: 'stretch',
  },
  containerTextCode: {
    flex: 0.3,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    marginEnd: 15,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textCode: {
    color: 'black',
    fontSize: 15,
  },
});
