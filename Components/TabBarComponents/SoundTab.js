import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SoundTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="volume-up" style={{ color: tintColor }} size={23}/>
    ),
    // tabBarLabel: "Sound",
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>SoundTab</Text>
      </View>
    );
  }
}

export default SoundTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});