import {StyleSheet, View} from 'react-native';
import CardCreditBack from '../../../components/CreditCard/CardCreditBack';
import CardCreditFront from '../../../components/CreditCard/CardCreditFront';
import {useCard} from '../../../methods/hook/useCard';
import React from 'react';
export const renderFront = () => {
  return (
    <View style={styles.container}>
      <CardCreditFront number="1111 1111 1111 1111" expery="11/42" />
    </View>
  );
};

export const renderBack = () => {
  return (
    <View style={styles.container}>
      <CardCreditBack code="134" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
