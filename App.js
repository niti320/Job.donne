// App.js
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Completed from './screens/Completed';
import About from './screens/About';
import User from './screens/User';
import { StatusBar } from 'expo-status-bar';
import Inspire from './screens/Inspire';
import { View } from 'react-native';
import { UserProvider } from './components/userinfo';
import { NavigationProvider } from './components/NavigationContext';
import { StylesProvider } from './StylesContext'; 
import Footer from './components/Footer';
import { useStyles } from './StylesContext';



const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        config: { duration: 50 }, 
        headerShown: false,
        animation: 'fade',
        // animationTypeForReplace:'push',
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Completed" component={Completed} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Inspire" component={Inspire} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:"#14141c" }}>
      <UserProvider>
        <StylesProvider> 
          <NavigationContainer>
            <NavigationProvider>
              <View style={{ flex: 1 }}>
                <AppNavigator />
                <Footer />
              </View>
            </NavigationProvider>
          </NavigationContainer>
        </StylesProvider>
      </UserProvider>
      
    </GestureHandlerRootView>
  );
}
