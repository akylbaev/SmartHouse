import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabBar from './Components/TabBar';


export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  TabBar: {
    screen: TabBar
  }
})