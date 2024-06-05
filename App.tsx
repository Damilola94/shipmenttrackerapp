import React, {useState} from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {View, StyleSheet, StatusBar} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';

import SplashScreen from './src/screen/Splash';
import LoginScreen from './src/screen/Login/LoginScreen';
import Home from './src/screen/Home';

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  const Stack = createStackNavigator();

  const config = {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
    },
  };
  
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.in(Easing.poly(4)),
    },
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <NavigationContainer>
    <SafeAreaProvider>
    <View style={styles.container}>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
      )}
    </View>
    </SafeAreaProvider>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
