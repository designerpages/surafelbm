import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './RootNavigation';

const AppNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
