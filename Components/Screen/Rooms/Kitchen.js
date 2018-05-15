import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    
class Kitchen extends React.Component {

    state = {
        light: false,
        air: false
    }

    _onPressLight(){
        const newState = !this.state.light;
        this.setState({light: newState})
        const {light} = this.state;
        const textValue = light?"off":"on";
        fetch('http://192.168.1.222/?ArduinoPIN1='+ textValue, {
            method: 'GET'
        });
    }

    _onPressAir(){
        const newState = !this.state.air;
        this.setState({air: newState})
        const {air} = this.state;
        const textValue = air?"off":"on";
        fetch('http://192.168.1.222/?ArduinoPIN6='+ textValue, {
            method: 'GET'
        });
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         bgColor: 'rgba(0,0,0,1)'
    //     }
    // }

    // changeColor(){
    //     this.setState = {
    //         bgColor: 'red'
    //     }
    // }

  render() {
    const {light, air} = this.state;
    const bgButtonLight = light?'red':'transparent';
    const bgButtonAir = air?'red':'transparent';
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
            <View style = {{flex: 2}}>
                <View style = {{}}>
                    <ImageBackground source = {require('../../../Assets/kitchen.jpg')} resizeMode = 'stretch' style = {{width: windowWidth, height: windowHeight*0.4,}}>
                        <View style = {{backgroundColor: 'rgba(26, 13, 57, 0.4)', flex: 1}}>
                            <View style = {{bottom: 0, left: 0, paddingLeft: 20, paddingBottom: 10, position: 'absolute'}}>
                                <Text style = {{fontSize: 50, color: '#fff', marginBottom: 15}}>Kitchen</Text>
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
            <ImageBackground source = {require('../../../Assets/bg1.jpg')} style = {{flex: 3, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity style = {{
                        width: windowWidth*0.4,
                        height: windowWidth*0.4,
                        borderColor: '#fff',
                        borderRadius: 18,
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bgButtonLight
                    }} onPress = {() => this._onPressLight()}>
                        <Icon name = "md-bulb" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.box}>
                        <Icon name = "ios-archive" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Oven</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress = {() => this._onPressAir()} style = {{
                        width: windowWidth*0.4,
                        height: windowWidth*0.4,
                        borderColor: '#fff',
                        borderRadius: 18,
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bgButtonAir
                    }}>
                        <Icon name = "md-aperture" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Air</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.box}>
                        <Icon name = "ios-snow" style={{color: '#fff', fontSize: 70, marginBottom: 7}} />
                        <Text style = {{color: '#fff', fontSize: 16}}>Freeze</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
  }
}

export default Kitchen;

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
    justifyContent: 'center'
  }
});