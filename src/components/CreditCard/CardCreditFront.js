import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const CardCreditFront = ({number, expery}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_card}>
        <ImageBackground
          source={require('../../assets/tarjeta/images/card-front.png')}
          resizeMode="stretch"
          style={styles.image}>
          <View style={styles.card_credit}>
            <View style={styles.icon_card}>
              <Image
                style={styles.icon}
                source={require('../../assets/tarjeta/icons/stp_card_visa.png')}
              />
            </View>
            <View style={styles.number_card}>
              <Text style={styles.number}>{number}</Text>
            </View>
            <View style={styles.expired_card}>
              <View style={styles.month}>
                <Text style={styles.text}>month/year</Text>
              </View>
              <View style={styles.valid}>
                <View style={styles.thru}>
                  <Text style={styles.text}>valid thru</Text>
                </View>
                <View style={styles.year}>
                  <Text style={styles.textYear}>{expery}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default CardCreditFront;

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
  icon_card: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {width: 60, height: 40, marginEnd: 15},
  number_card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {fontSize: 30, color: 'white'},
  expired_card: {
    flex: 1,
    paddingEnd: 10,
  },
  month: {
    alignItems: 'flex-end',
    paddingEnd: 15,
  },
  valid: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 15,
  },
  thru: {
    marginEnd: 15,
  },
  year: {
    marginEnd: 15,
  },
  text: {fontSize: 14, color: 'white'},
  textYear: {fontSize: 20, color: 'white'},
});
