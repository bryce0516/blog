import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen'
import { Provider as BlogProvider } from './src/context/BlogContext'
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import NextScreen from './src/screens/NextScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
const App = createCompatNavigatorFactory(createStackNavigator)(
  {
    Index: { screen: IndexScreen },
    Next: { screen: NextScreen},
    Show: { screen: ShowScreen},
    Create: {screen: CreateScreen},
    Edit: { screen: EditScreen },
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions:{
      title:'Blogs'
    }
  }
);

export default () => {
  return(
      <BlogProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </BlogProvider>
  )
}