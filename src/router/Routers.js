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
import PaymentScreen from '../screens/Client/Payment/PaymentScreen';
import HistoryPayment from '../screens/HistoryPaymentets/HistoryPayment';

import RidesScreen from '../screens/Home/RidesScreen';
import HistoryPaymentsWalkers from '../screens/Home/HistoryPaymentsWalker';
import ProfileWalker from '../screens/Home/ProfileWalker';
import LocalitationPet from '../screens/Home/LocalitationPet';

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
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="HistoryPayment" component={HistoryPayment} />
        <Stack.Screen name="SendComments" component={SendComments} />
        <Stack.Screen name="HomeWalker" component={Home} />
        <Stack.Screen name="Rides" component={RidesScreen} />
        <Stack.Screen name="LocalitationPet" component={LocalitationPet} />

        <Stack.Screen
          name="HistoryPaymentsWalkers"
          component={HistoryPaymentsWalkers}
        />
        <Stack.Screen name="ProfileWalker" component={ProfileWalker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;
