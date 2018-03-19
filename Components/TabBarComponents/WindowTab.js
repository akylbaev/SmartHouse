import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class WindowTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="windows" style={{ color: tintColor }} size={23}/>
    ),
    // tabBarLabel: "Window",
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>WindowTab</Text>
      </View>
    );
  }
}

export default WindowTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});