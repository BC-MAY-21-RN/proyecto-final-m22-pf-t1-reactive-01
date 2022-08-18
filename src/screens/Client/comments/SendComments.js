import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import {styles} from './styles';
import Button from '../../../components/Button/CustomButton';
import Input from '../../../components/InputComment/Input';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SendComments = navigation => {
  const [value, setValue] = useState('');
  const uploadComments = () => {
    firestore()
      .collection('reviews')
      .doc('reviewGeneral')
      .update({
        uid: auth().currentUser.uid,
        review: firestore.FieldValue.arrayUnion(value),
      })
      .then(() => Alert.alert('Comentario agregado', value))
      .catch(error => Alert.alert('ERROR', error));
  };
  return (
    <Layout>
      <Header navigation={navigation} />
      <Text style={styles.text}>Please enter your comment</Text>
      <View style={styles.containerText}>
        <Input
          type="comment"
          onChangeText={commentText => setValue(commentText)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Send'} onPress={uploadComments} />
      </View>
    </Layout>
  );
};

export default SendComments;
