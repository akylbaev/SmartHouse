import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = ""
  }

  // componentWillMount(){
  //   var date = new Date().getDate();
  //   var month = new Date().getMonth() + 1;
  //   var year = new Date().getFullYear();
  //   this.setState({
  //   })
  // }

  render() {

    const { navigate } = this.props.navigation;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
          <View style = {{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            {/* <Text> {this.state} </Text> */}
            {/* <Button title = "Get Date" onPress = {() => this._componentWillMount()}/> */}
            <View style = {styles.imageContainer}>
              <Image source = {require('../../Assets/AppIcon/Icon.png')} style = {{width: 75, height: 75}} />
            </View>
            <Text style = {{
                    color: '#ffb9bc',
                    fontSize: 26
                    }}> My Home </Text>
          </View>
          <View style = {{flex: 3, flexDirection: 'row'}}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigate('KitchenScreen')}
                >
                <Image source = {require('../../Assets/Icons/oven.png')} style = {{width: 60, height: 60, marginBottom: 20}} />
                <Text style = {styles.buttonTitle}>Kitchen</Text>
                <View style = {{width: windowWidth*0.5, height: 1, backgroundColor: '#fff', position: 'absolute', bottom: 0}}/>
                <View style = {{width: windowWidth*0.5, height: 1, backgroundColor: '#fff', position: 'absolute', top: 0}}/>
              </TouchableOpacity>
              <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigate('BedRoomScreen')}
                >
                <Image source = {require('../../Assets/Icons/bed.png')} style = {{width: 60, height: 60, marginBottom: 20}} />
                <Text style = {styles.buttonTitle}>BedRoom</Text>
                <View style = {{width: windowWidth*0.5, height: 1, backgroundColor: '#fff', position: 'absolute', bottom: 0}}/>
              </TouchableOpacity>
              <View style = {{width: 1, height: windowWidth*1.2, backgroundColor: '#fff', position: 'absolute', right: 0}}/>
            </View>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
              <TouchableOpacity
                  style = {styles.button}
                  onPress = {() => navigate('LivingRoomScreen')}
                  >
                  <Image source = {require('../../Assets/Icons/television.png')} style = {{width: 60, height: 60, marginBottom: 20}} />
                  <Text style = {styles.buttonTitle}>Living Room</Text>
                <View style = {{width: windowWidth*0.5, height: 1, backgroundColor: '#fff', position: 'absolute', bottom: 0}}/>
                <View style = {{width: windowWidth*0.5, height: 1, backgroundColor: '#fff', position: 'absolute', top: 0}}/>
              </TouchableOpacity>
              <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigate('ChildrenRoomScreen')}
                >
                <Image source = {require('../../Assets/Icons/bathtub.png')} style = {{width: 60, height: 60, marginBottom: 20}} />
                <Text style = {styles.buttonTitle}>Bath Room</Text>
                <View style = {{width: windowWidth*0.5, height: 1, backgroundColor: '#fff', position: 'absolute', bottom: 0}}/>
              </TouchableOpacity>
            </View>
          </View>
          
          
        </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0d39',
    alignItems: 'center',
  },
  topView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 30,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 19
  }

});