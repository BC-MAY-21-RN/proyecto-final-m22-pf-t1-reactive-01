import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {getHistoryPayments} from '../../methods/HistoryPayments';
import {useEffect} from 'react';
import CardPayment from '../../components/CardHistory/CardPayment';
import {ScrollView} from 'react-native-gesture-handler';
import Layout from '../../layout/Layout';
import Header from '../../components/Header/Header';
const HistoryPayment = ({navigation}) => {
  const [history, setHistory] = useState([]);

  const traerDatos = async () => {
    const datos = await getHistoryPayments();
    setHistory(datos);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      traerDatos();
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>History Payments</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {history.map((item, key) => (
            <CardPayment key={key} data={item} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default HistoryPayment;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerTitle: {alignItems: 'center', marginBottom: 10, marginTop: 10},
  title: {fontSize: 30, fontWeight: 'bold', color: 'black'},
});
