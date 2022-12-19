import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Home,Setting} from "../screen/Index";
import BottomTab from './BottomTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Setting" component={Setting} />
        {/* <Drawer.Screen name='AppBottomStack' component={BottomTab} /> */}
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}