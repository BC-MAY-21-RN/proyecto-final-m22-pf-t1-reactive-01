import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import {store} from '../../store/store';
import {setemail, setpassword} from '../../store/slices/users/userSlice';
const HomeScreen = () => {
  console.log(store.getState().userinformation.email);
  store.dispatch(setemail('Ayeza'));
  return (
    <Layout>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>

      <Text>HomeScreen</Text>

      <Text>HomeScreen</Text>

      <Text>HomeScreen</Text>
    </Layout>
  );
};

export default HomeScreen;
