import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import Signup from '../screens/Signup';
import SignupSuccess from '../screens/SignupSuccess';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
    </Stack.Navigator>
  );
}