import React from "react";
import {View } from "react-native";
import Button from '../../components/Button/CustomButton'
import Layout from "../../layout/Layout";
import Input from "../../components/Inputs/Input";
import Header from "../../components/Header/Header";
import { styles } from "../LoginScreen/styles";

const SignInScreen =({navigation}) =>{
return (
    <Layout>
        <View style={styles.container}>
            <View style={styles.header}>
            <Header navigation={navigation}/>
            </View>
            <View style={styles.body}>
                <Input type="name" title="Full name"/>
                <Input type="email" title="Email"/>
                <Input type="password" title="Password" state={true}/>
                <Input type="password" title="Password" state={true}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={'Sign In'}/>
            </View>

        </View>
    </Layout>
)
}
export default SignInScreen