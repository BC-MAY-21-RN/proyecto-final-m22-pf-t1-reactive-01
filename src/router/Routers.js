import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/Drawer/CustomDrawer';
import {
  Home,
  Splash,
  Onboarding,
  Login,
  ResetPassword,
  HomeClient,
  SignInScreen,
  PetFormScreen,
  Mypet,
  SendComments,
} from '../screens/index';
import UploadPets from '../screens/Client/Upload/UploadPets';
import PetInfoScreen from '../screens/Client/PetFormScreen/PetFormScreen';
import ChoiseUser from '../screens/Client/ChoiseUser/ChoiseUser';
import ProfileScreen from '../screens/Client/Proffile/ProfileScreen';
import Geolocation from '../screens/Client/Geolocalization/GeolocationUser';
import WalkerView from '../screens/Client/WalkerView/WalkerView';
import SettingScreen from '../screens/Client/SettingScreen/Settingscreen';
import EditProfile from '../screens/Client/Proffile/EditProfile/EditProfile';
import {styles} from './style';

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
      <Drawer.Screen name="HomeClient" component={HomeClient} />
      <Drawer.Screen name="Geolocation" component={Geolocation} />
    </Drawer.Navigator>
  );
};
const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menus" component={Menus} />
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="UploadPets" component={UploadPets} />
        <Stack.Screen name="PetInfoScreen" component={PetInfoScreen} />
        <Stack.Screen name="ChoiseUser" component={ChoiseUser} />
        <Stack.Screen name="PetFormScreen" component={PetFormScreen} />
        <Stack.Screen name="Geolocation" component={Geolocation} />
        <Stack.Screen name="Mypet" component={Mypet} />
        <Stack.Screen name="WalkerView" component={WalkerView} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SendComments" component={SendComments} />
        <Stack.Screen name="SettingScreen" component={SettingScreen}/>
        <Stack.Screen name="Editprofile" component={EditProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;
