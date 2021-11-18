import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import local Files
import Home from './components/Home';
import CounterApp from './components/CounterApp';
import Catalogue from './components/Catalogue';
import Shopping from './components/Shopping';
import Status from './components/Status';
import Contact from './components/Contact';
import Profile from './components/Profile';
import store from './store/Store';
const Stack = createNativeStackNavigator();





const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="Shopping">
        <Drawer.Navigator initialRouteName="Shopping">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Other" component={CounterApp} />
          <Drawer.Screen name="Catalogue" component={Catalogue} />
          <Drawer.Screen name="Shopping" component={Shopping} />
          <Drawer.Screen name="Status" component={Status} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Profile" component={Profile}   />
        </Drawer.Navigator>
        
        </NavigationContainer>
    </Provider>
    
    
  );
}

export default App;
