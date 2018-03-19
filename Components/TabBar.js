import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabNavigator } from 'react-navigation';
import TemperatureTab from './TabBarComponents/TemperatureTab';
import LightTab from './TabBarComponents/LightTab';
import SoundTab from './TabBarComponents/SoundTab';
import WindowTab from './TabBarComponents/WindowTab';

class TabBar extends React.Component {
    render(){
        return (
            <AppTabNavigator />
        );
    }
}

const AppTabNavigator = TabNavigator({
    TemperatureTab: {
        screen: TemperatureTab
    },
    LightTab: {
        screen: LightTab
    },
    SoundTab: {
        screen: SoundTab
    },
    WindowTab: {
        screen: WindowTab
    },
},{
    ...TabNavigator.Presets.AndroidTopTabs,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
        style: {
            backgroundColor: '#fff',
        },
        activeTintColor: '#f94e3d',
        inactiveTintColor: '#A1A1A1',
        showIcon: true,
        showLabel: false,
        labelStyle: {
            fontSize: 8
        },
        indicatorStyle: {
            backgroundColor: '#f94e3d',
        },
    }
})

export default TabBar;