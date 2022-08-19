import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import CustomButton from '../../../components/Button/CustomButton';
import UploadButton from '../../../components/Button/UploadButton';

import UploadPhoto from '../../../methods/UploadPhoto';

const UploadPets = ({navigation}) => {
  const {selectImageGalery} = UploadPhoto();
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <UploadButton onPress={selectImageGalery} />
          <Text style={styles.title}>Take Picture</Text>
        </View>
        <View style={styles.containerButton}>
          <CustomButton title="Next" onPress={() => navigation.navigate('')} />
        </View>
      </View>
    </Layout>
  );
};

export default UploadPets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerIcon: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 25,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
