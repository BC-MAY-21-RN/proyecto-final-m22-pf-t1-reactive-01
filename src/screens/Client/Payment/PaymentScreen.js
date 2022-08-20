import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import {useCard} from '../../../methods/hook/useCard';
import GestureFlipView from 'react-native-gesture-flip-card';
import InputCreditCard from '../../../components/CreditCard/InputCreditCard';
import Button from '../../../components/Button/CustomButton';
import {useMoveCard} from '../../../methods/hook/useMoveCard';
import {renderFront, renderBack} from './RenderViews';
import {useFormik} from 'formik';
import * as Yup from 'yup';
const PaymentScreen = () => {
  const {number, expery, code} = useCard();
  const {viewRef, onFrontPress, onBackPress} = useMoveCard();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: formValue => {
      alert('Pago check');
    },
  });
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.container_creditCard}>
          <GestureFlipView
            ref={ref => (viewRef.current = ref)}
            width={300}
            height={300}
            gestureEnabled={false}>
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
            onFocus={() => onFrontPress()}
            error={formik.errors.numberCard}
            value={formik.values.numberCard}
            onChangeText={text => formik.setFieldValue('numberCard', text)}
          />
          <InputCreditCard
            title="EXPIRY"
            placeholder="02/23"
            type="numeric"
            inputType="expiry"
            onFocus={() => onFrontPress()}
            error={formik.errors.expiry}
            value={formik.values.expiry}
            onChangeText={text => formik.setFieldValue('expiry', text)}
          />
          <InputCreditCard
            title="CVC/CCV"
            placeholder="952"
            type="numeric"
            inputType="code"
            onFocus={() => onBackPress()}
            error={formik.errors.code}
            value={formik.values.code}
            onChangeText={text => formik.setFieldValue('code', text)}
          />
        </View>
        <View style={styles.container_boton}>
          <Button title="TO PAY" onPress={formik.handleSubmit} />
        </View>
      </View>
    </Layout>
  );
};

function initialValues() {
  return {
    numberCard: '',
    expiry: '',
    code: '',
  };
}

function validationSchema() {
  return {
    numberCard: Yup.string()
      .min(16)
      .max(16)
      .required('Full numberCard is required'),
    expiry: Yup.string().min(4).max(4).required('expiry is required'),
    code: Yup.string().min(3).max(3).required('code is required'),
  };
}

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
