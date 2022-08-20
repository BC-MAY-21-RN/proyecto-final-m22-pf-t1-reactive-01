import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import {useCard} from '../../../methods/hook/useCard';
import GestureFlipView from 'react-native-gesture-flip-card';
import InputCreditCard from '../../../components/CreditCard/InputCreditCard';
import Button from '../../../components/Button/CustomButton';
import {useMoveCard} from '../../../methods/hook/useMoveCard';
import {renderFront, renderBack} from './RenderViews';

const PaymentScreen = () => {
  const {number, expery, code} = useCard();
  const {viewRef, onFrontPress, onBackPress} = useMoveCard();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.container_creditCard}>
          <GestureFlipView
            ref={ref => (viewRef.current = ref)}
            width={300}
            height={300}
            gestureEnabled={true}>
            {renderFront()}
            {renderBack()}
          </GestureFlipView>
        </View>
        <View style={styles.container_info}>
          <InputCreditCard
            title="CARD NUMBER"
            placeholder={number}
            type="numeric"
            inputType="cardNumber"
            test={() => onFrontPress()}
          />
          <InputCreditCard
            title="EXPIRY"
            placeholder="02/23"
            type="numeric"
            //value={numberCard}
            inputType="expiry"
            test={() => onFrontPress()}
          />
          <InputCreditCard
            title="CVC/CCV"
            placeholder="952"
            type="numeric"
            inputType="code"
            onFocus={renderBack()}
            test={() => onBackPress()}
          />
        </View>
        <View style={styles.container_boton}>
          <Button title="TO PAY" onPress={onFrontPress} />
        </View>
      </View>
    </Layout>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  container_creditCard: {
    alignItems: 'center',
  },
  container_info: {
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
