import {View, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../components/Button/CustomButton';
import ImgBackground from '../../assets/svg/dogwalk.svg';
import Layout from '../../layout/Layout';
import {styles} from './styles';
const OnBoardingScreen = ({navigation}) => {
  return (
    <Layout>
      <StatusBar />
      <View style={styles.img}>
        <ImgBackground width={300} height={300} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={'Get Started'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </Layout>
  );
};

export default OnBoardingScreen;
