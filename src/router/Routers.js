import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Splash,
  Onboarding,
  Login,
  ResetPassword,
  HomeClient,
  SignInScreen,
} from '../screens/index';
import UploadPets from '../screens/Client/Upload/UploadPets';
const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
<<<<<<< HEAD
        initialRouteName="HomeClient"
=======
        initialRouteName="SplashScreen"
>>>>>>> master
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="HomeClient" component={HomeClient} />
        <Stack.Screen name="UploadPets" component={UploadPets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;
