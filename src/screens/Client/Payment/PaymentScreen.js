import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import {useCard} from '../../../methods/hook/useCard';
import CardCreditFront from '../../../components/CreditCard/CardCreditFront';
import CardCreditBack from '../../../components/CreditCard/CardCreditBack';
import GestureFlipView from 'react-native-gesture-flip-card';
import InputCreditCard from '../../../components/CreditCard/InputCreditCard';
import Button from '../../../components/Button/CustomButton';
const PaymentScreen = () => {
  const {number, expery, code} = useCard();
  const renderFront = () => {
    return (
      <View style={styles.containerTarjetas}>
        <CardCreditFront number={number} expery={expery} />
      </View>
    );
  };

  const renderBack = () => {
    return (
      <View style={styles.containerTarjetas}>
        <CardCreditBack code={code} />
      </View>
    );
  };
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.container_tarjeta}>
          <GestureFlipView width={300} height={300}>
            {renderBack()}
            {renderFront()}
          </GestureFlipView>
        </View>
        <View style={styles.container_informacion}>
          <InputCreditCard
            title="CARD NUMBER"
            placeholder={number}
            type="numeric"
            inputType="cardNumber"
          />
          <InputCreditCard
            title="EXPIRY"
            placeholder="02/23"
            type="numeric"
            //value={numberCard}
            inputType="expiry"
          />
          <InputCreditCard
            title="CVC/CCV"
            placeholder="952"
            type="numeric"
            inputType="code"
          />
        </View>
        <View style={styles.container_boton}>
          <Button title="enviar" />
        </View>
      </View>
    </Layout>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#eda1e1',
    justifyContent: 'space-around',
  },
  container_tarjeta: {
    //backgroundColor: 'green',
    alignItems: 'center',
  },
  container_informacion: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container_boton: {
    flex: 1,
    justifyContent: 'center',
  },
});
