import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './pantallas/HomeScreen';
import DetailScreen from './pantallas/DetailScreen';



const AppNavigator = createStackNavigator({
  
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);