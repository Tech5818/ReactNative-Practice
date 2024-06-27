import React from 'react';

import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@/screens/HomeScreen';
import {RegisterScreen} from '@/screens/RegisterScreen';

type RootStackScreens = {
  main: undefined;
  register: undefined;
};

const Stack = createStackNavigator<RootStackScreens>();

const RootNavigation = () => {
  return (
    <>
      <StatusBar translucent />
      <Stack.Navigator
        initialRouteName="register"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="main" component={HomeScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigation;
