import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {getHistoryPayments} from '../../methods/HistoryPayments';
import {useEffect} from 'react';
import ListScroll from '../../components/ListScroll/ListScroll';
import CardPayment from './CardPayment';
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
        <Text style={styles.text}>LISTA</Text>
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
  container: {flex: 1, backgroundColor: '#aecdeb'},
  title: {},
});
