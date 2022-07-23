import {View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Layout from '../../layout/Layout';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/CustomButton';
import {resetPassword} from '../../database/passwordReset';
import Header from '../../components/Header/Header';

const ResetPasswordScreen = ({navigation}) => {
  const [email, setState] = useState();
  return (
    <Layout>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        <Input type="email" title="Email" onChangeText={setState} />
        <View style={styles.buttonContainer}>
          <Button
            title="Send Request"
            onPress={() => {
              resetPassword(navigation, email);
            }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default ResetPasswordScreen;
