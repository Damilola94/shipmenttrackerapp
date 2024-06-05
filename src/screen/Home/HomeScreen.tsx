import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ShipmentsScreen from '../ShipmentScreen';
import ScanScreen from '../ScanScreen';
import WalletScreen from '../WalletScreen';
import ProfileScreen from '../ProfileScreen';

import AvatarIcon from '../../../assets/icons/ShipmentIcon';
import ScanIcon from '../../../assets/icons/Scan';
import WalletIcon from '../../../assets/icons/WalletIcon';
import ShipmentIcon from '../../../assets/icons/AvatarIcon';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon: ({color, size, focused} : any) => {
          if (route.name === 'Shipments') {
            return <ShipmentIcon fill={focused ? '#2F58C1' : '#A7A3B3'} />;
          } else if (route.name === 'Scan') {
            return <ScanIcon fill={focused ? '#2F58C1' : '#A7A3B3'} />;
          } else if (route.name === 'Wallet') {
            return <WalletIcon fill={focused ? '#2F58C1' : '#A7A3B3'} />;
          } else if (route.name === 'Profile') {
            return <AvatarIcon fill={focused ? '#2F58C1' : '#A7A3B3'} />;
          }
        },
        headerShown: false,
        tabBarActiveTintColor: '#2f50c1',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Shipments" component={ShipmentsScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Home;
