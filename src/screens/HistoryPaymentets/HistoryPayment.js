import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {getHistoryPayments} from '../../methods/HistoryPayments';
import {useEffect} from 'react';
import CardPayment from '../../components/CardHistory/CardPayment';
import {ScrollView} from 'react-native-gesture-handler';
import Layout from '../../layout/Layout';
const HistoryPayment = () => {
  const [history, setHistory] = useState([]);

  const traerDatos = async () => {
    const datis = await getHistoryPayments();
    setHistory(datis);
  };
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      traerDatos();
    }, 20000);
    return () => clearInterval(interval);
  }, []);
*/

  const data = [
    {
      date: 'Sat Aug 20 17:12:16 2022',
      walker: 'mario',
      hours: '2',
      price: '100',
    },
    {
      date: 'Sat Aug 21 17:12:16 2022',
      walker: 'luis',
      hours: '2',
      price: '100',
    },
    {
      date: 'Sat Aug 22 17:12:16 2022',
      walker: 'carlos',
      hours: '2',
      price: '100',
    },
    {
      date: 'Sat Aug 23 17:12:16 2022',
      walker: 'dario',
      hours: '2',
      price: '100',
    },
    {
      date: 'Sat Aug 24 17:12:16 2022',
      walker: 'pedro',
      hours: '2',
      price: '100',
    },
  ];

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>History Payments</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {data.map((item, key) => (
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
  containerTitle: {alignItems: 'center'},
  title: {fontSize: 30, fontWeight: 'bold', color: 'black'},
});
