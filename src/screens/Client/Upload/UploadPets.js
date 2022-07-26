import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
const UploadPets = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>UploadPets</Text>
      </View>
    </Layout>
  );
};

export default UploadPets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
