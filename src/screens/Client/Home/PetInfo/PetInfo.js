import React from 'react';
import {View, Text, Image} from 'react-native';
import Layout from '../../../../layout/Layout';
import {styles} from './styles';
import Heart from '../../../../assets/svg/heart.svg';
import Header from '../../../../components/Header/Header';
import CustomButton from '../../../../components/Button/CustomButton';

const PetInfo = () => {
  return (
    <Layout>
      <Header />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={require('../../../../assets/Placeholders/placeholder-img.jpg')}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.detail}>
          <Text style={styles.name}>Sara</Text>
          <Heart width={40} height={40} />
        </View>
        <View style={styles.detail}>
          <Text style={styles.TextDetail}>Dog</Text>
          <Text style={styles.TextDetail}> Bred: None</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.TextDetail}>Gender: Gril</Text>
          <Text style={styles.TextDetail}>Age: 2 </Text>
        </View>

        <Text style={styles.TextDetail}>Color: whithe and brown</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title={"Finish"}/>
      </View>
    </Layout>
  );
};

export default PetInfo;
