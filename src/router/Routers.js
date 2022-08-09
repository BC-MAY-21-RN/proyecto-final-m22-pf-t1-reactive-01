import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/Drawer/CustomDrawer';

import {
  Splash,
  Onboarding,
  Login,
  ResetPassword,
  HomeClient,
  SignInScreen,
} from '../screens/index';
import UploadPets from '../screens/Client/Upload/UploadPets';
import PetInfo from '../screens/Client/Home/PetInfo/PetInfo';
import ChoiseUser from '../screens/Client/ChoiseUser/ChoiseUser';
import {styles} from './style';
import ProfileScreen from '../screens/Client/Home/ProfileScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Menus = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        drawerStyle: [styles.drawer],
        drawerItemStyle: [styles.item],
        drawerLabelStyle: [styles.text],
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeClient} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menus"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menus" component={Menus} />
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="UploadPets" component={UploadPets} />
        <Stack.Screen name="PetInfo" component={PetInfo} />
        <Stack.Screen name="ChoiseUser" component={ChoiseUser} />
        <Stack.Screen name="Drawer" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;
