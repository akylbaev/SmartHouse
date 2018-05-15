import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

class LivingRoom extends React.Component {

    state = {
        light: false,
        heating: false
    }

    _onPressLight(){
        const newState = !this.state.light;
        this.setState({light: newState})
        const {light} = this.state;
        const textValue = light?"off":"on";
        fetch('http://192.168.1.222/?ArduinoPIN4='+ textValue, {
            method: 'GET'
        });
    }

    _onPressHeating(){
        const newState = !this.state.heating;
        this.setState({heating: newState})
        const {heating} = this.state;
        const textValue = heating?"off":"on";
        fetch('http://192.168.1.222/?ArduinoPIN5='+ textValue, {
            method: 'GET'
        });
    }

  render() {
    const {light, heating} = this.state;
    const bgButtonLight = light?'red':'transparent';
    const bgButtonHeating = heating?'red':'transparent';
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
            <View style = {{flex: 2}}>
                <View style = {{}}>
                    <ImageBackground source = {require('../../../Assets/livingroom.jpg')} resizeMode = 'stretch' style = {{width: windowWidth, height: windowHeight*0.4,}}>
                        <View style = {{backgroundColor: 'rgba(26, 13, 57, 0.4)', flex: 1}}>
                            <View style = {{bottom: 0, left: 0, paddingLeft: 20, paddingBottom: 10, position: 'absolute'}}>
                                <Text style = {{fontSize: 50, color: '#fff', marginBottom: 15}}>Living Room</Text>
                                <View style = {{width: windowWidth*0.6, height: 0.5, backgroundColor: '#fff', marginBottom: 15}} />
                                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name = "ios-thermometer-outline" style = {{color: '#fff', marginRight: 7, fontSize: 23}} />
                                    <Text style = {{color: '#fff', fontSize: 20, marginRight: 30}}>24°</Text>
                                    <Icon name = "ios-water" style = {{color: '#fff', marginRight: 7, fontSize: 23}} />
                                    <Text style = {{color: '#fff', fontSize: 20}}>56%</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    
                </View>
            </View>
            <View style = {{flex: 3, flexDirection: 'row'}}>
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress = {() => this._onPressLight()} style = {{
                        width: windowWidth*0.4,
                        height: windowWidth*0.4,
                        borderColor: '#fff',
                        borderRadius: 18,
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bgButtonLight
                    }}>
                        <Icon name = "md-bulb" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.box}>
                        <Icon name = "ios-desktop-outline" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>TV</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress = {() => this._onPressHeating()} style = {{
                        width: windowWidth*0.4,
                        height: windowWidth*0.4,
                        borderColor: '#fff',
                        borderRadius: 18,
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bgButtonHeating
                    }}>
                        <Icon name = "md-flame" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Heating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.box}>
                        <Icon name = "ios-game-controller-b-outline" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Game</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}

export default LivingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0d39',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: windowWidth*0.4,
    height: windowWidth*0.4,
    borderColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});