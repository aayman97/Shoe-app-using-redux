import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { store } from './Redux/Store';
import Home from './Screens/Home';
import Details from './Screens/Details';

const { width, height } = Dimensions.get('screen')


const stack = createStackNavigator()


export default function App() {
  return (

    <NavigationContainer>
      <Provider store={store}>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <stack.Screen name="Details" component={Details} options={{ headerShown: false, }} />
        </stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
});
