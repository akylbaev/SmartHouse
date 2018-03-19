import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TemperatureTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="thermometer-half" style={{ color: tintColor }} size={23}/>
    ),
    // tabBarLabel: "Temperature",
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>TemperatureTab</Text>
      </View>
    );
  }
}

export default TemperatureTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});