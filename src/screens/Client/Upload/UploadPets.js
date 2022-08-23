import {Text, View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import CustomButton from '../../../components/Button/CustomButton';
import UploadButton from '../../../components/Button/UploadButton';
import UploadPhoto from '../../../methods/UploadPhoto';
import Header from '../../../components/Header/Header';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';

const UploadPets = ({navigation}) => {
  const route = useRoute();
  const {namePet} = route.params;
  const {selectImageGalery} = UploadPhoto();
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <UploadButton onPress={selectImageGalery(namePet)} />
          <Text style={styles.title}>Take Picture</Text>
        </View>
        <View style={styles.containerButton}>
          <CustomButton
            title="Next"
            onPress={() => navigation.navigate('Menus')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default UploadPets;
