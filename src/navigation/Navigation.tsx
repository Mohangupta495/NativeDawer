import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppDrawerStack" component={DrawerNavigation} />
      </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
};

export default Navigation;

const styles = StyleSheet.create({});
