import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SwipeUp from './Screen/SwipeUp';
import Home from './Screen/Home';

import Kitchen from './Screen/Rooms/Kitchen';
import LivingRoom from './Screen/Rooms/LivingRoom';
import BedRoom from './Screen/Rooms/BedRoom';
import ChildrenRoom from './Screen/Rooms/ChilderRoom';

class Routes extends React.Component{
    render(){
        return(
            <AppStackNavigator />
        )
    }
}

const AppStackNavigator = StackNavigator({
    SwipeScreen: {
        screen: SwipeUp,
        navigationOptions: {
            header: null
        }
    },
    HomeScreen: {
        screen: StackNavigator({
            Home: {
                screen: Home,
                navigationOptions: {
                    header: null
                }
            },
            KitchenScreen: {
                screen: Kitchen,
                navigationOptions: {
                    header: null
                }
            },
            LivingRoomScreen: {
                screen: LivingRoom,
                navigationOptions: {
                    header: null
                }
            },
            BedRoomScreen: {
                screen: BedRoom,
                navigationOptions: {
                    header: null
                }
            },
            ChildrenRoomScreen: {
                screen: ChildrenRoom,
                navigationOptions: {
                    headerTintColor: '#fff',
                    headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0, paddingLeft: 20,borderBottomWidth: 0 }
                }
            }
        },{
            initialRouteName: "Home",
            headerMode: 'screen'
        })
    }
},{
    initialRouteName: "SwipeScreen",
    headerMode: 'screen'
})

export default Routes;