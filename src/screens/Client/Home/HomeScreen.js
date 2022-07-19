import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import ListScroll from '../../../components/ListScroll/ListScroll';
import Input from '../../../components/Inputs/Input';

const HomeScreen = ({navigator}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.texto}>
          <Input />
        </View>
        <ListScroll title="lista de paseadores" />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    padding: 10,
  },
  texto: {
    backgroundColor: '#b3b0ff',
    height: 400,
  },
});
