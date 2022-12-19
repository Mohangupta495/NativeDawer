import 'react-native-gesture-handler';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from './src/styles/Global';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomTab from './src/navigation/BottomTabs';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}></GestureHandlerRootView>
        <View style={styles.mainContainer}>
          {/* <Navigation /> */}
          <DrawerNavigation/>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
        </View>
        <GestureHandlerRootView />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.fullScreenContainer,
  },
});
