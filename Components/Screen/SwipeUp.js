import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SwipeUp extends React.Component {
  render() {

    const { navigate } = this.props.navigation;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <ImageBackground source = {require('../../Assets/bg.jpg')} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style = {styles.topText}>
                <Text style = {{
                    color: '#ffb9bc',
                    fontSize: 24
                    }}> Hey Guest, </Text>
                <Text style = {{
                    color: '#ffb9bc',
                    fontSize: 24
                    }}> Welcome back home! </Text>
                <Text style = {{
                    color: '#4f378b',
                    fontSize: 16
                }}> Located in Almaty </Text>
                <Text style = {{
                    color: '#7e2e51',
                    fontSize: 19
                }}> Locked </Text>
            </View>
            <View style = {styles.imageContainer}>
                <Image source = {require('../../Assets/AppIcon/Icon.png')} style = {{width: 100, height: 100}}/>
            </View>
            <Button title = "Go to Home" onPress = {() => navigate('HomeScreen')}/>
        </ImageBackground>
    );
  }
}

export default SwipeUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1a0d39',
    alignItems: 'center',
  },
  topText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  imageContainer: {
      width: 125,
      height: 125,
      borderColor: '#5272af',
      borderWidth: 1,
      borderRadius: 40,
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'red',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
  }

});