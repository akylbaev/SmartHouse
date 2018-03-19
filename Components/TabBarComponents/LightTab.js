import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class LightTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="window" style={{ color: tintColor }} size={23}/>
    ),
    // tabBarLabel: "Light",
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>LightTab</Text>
      </View>
    );
  }
}

export default LightTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});