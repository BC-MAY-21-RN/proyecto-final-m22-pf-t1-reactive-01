import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import {styles} from './styles';
import SwitchBotton from '../../../components/Switch/Switch';
import CsutomButton from '../../../components/Button/CustomButton';
import {savetype} from '../../../methods/SaveType';
import {useSelector} from '../../../methods/hook/typeselector';
const ChoiseUser = () => {
  const {selectedPet, setSelectType} = useSelector();
  return (
    <Layout>
      <Header />
      <View style={styles.container}>
        <Text style={styles.mainText}>¿Are you?</Text>
      </View>
      <View style={styles.switcher}>
        <Text style={styles.switcherText}>Walker</Text>
        <SwitchBotton />
        <Text style={styles.switcherText}>Owner</Text>
      </View>
      <View style={styles.button}>
        <CsutomButton title="Next" onPress={() => savetype('')} />
      </View>
    </Layout>
  );
};

export default ChoiseUser;
