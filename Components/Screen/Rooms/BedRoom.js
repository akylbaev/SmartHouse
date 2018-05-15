import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

class BedRoom extends React.Component {

    state = {
        toggle: false
    }

    _onPressLight(){
        const newState = !this.state.toggle;
        this.setState({toggle: newState})
        const {toggle} = this.state;
        const textValue = toggle?"off":"on";
        fetch('http://192.168.1.222/?ArduinoPIN3='+ textValue, {
            method: 'GET'
        });
    }
    
  render() {
    const {toggle} = this.state;
    const textValue = toggle?"On":"Off";
    const bgButton = toggle?'red':'transparent';
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
            <View style = {{flex: 2}}>
                <View style = {{}}>
                    <ImageBackground source = {require('../../../Assets/bedroom.jpg')} resizeMode = 'stretch' style = {{width: windowWidth, height: windowHeight*0.4,}}>
                        <View style = {{backgroundColor: 'rgba(26, 13, 57, 0.4)', flex: 1}}>
                            <View style = {{bottom: 0, left: 0, paddingLeft: 20, paddingBottom: 10, position: 'absolute'}}>
                                <Text style = {{fontSize: 50, color: '#fff', marginBottom: 15}}>Bed Room</Text>
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
                        backgroundColor: bgButton
                    }}>
                        <Icon name = "md-bulb" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.box}>
                        <Icon name = "md-volume-up" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Music</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity style = {styles.box}>
                        <IconAwesome name = "table" style={{color: '#fff', marginBottom: 7}} size = {70}/>
                        <Text style = {{color: '#fff', fontSize: 16}}>Window</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.box}>
                        <Icon name = "ios-snow" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Freeze</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}

export default BedRoom;

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