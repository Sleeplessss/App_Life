import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import TabBarIcon from '../../components/TabBarIcon';

import IntimateMainScreen from './Main';
import SettingsScreen from '../Settings/SettingsScreen';
import DialScreen from '../Dial/DialScreen';
import VideosScreen from '../Videos/VideosScreen';
import GuideScreen from '../Guide/GuideScreen';

const BottomNavTabs = createBottomTabNavigator({

    Home: {
        screen: IntimateMainScreen,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: "Settings",
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
                />
            )
        }
    },
    Dial: {
        screen: DialScreen,
        navigationOptions: {
            title: "Dial",
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                />
            )
        }
    },
    Videos: {
        screen: VideosScreen,
        navigationOptions: {
            title: "Videos",
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-videocam' : 'md-videocam'}
                />
            )
        }
    },
    Guide: {
        screen: GuideScreen,
        navigationOptions: {
            title: "Guide",
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
                />
            )
        }
    },
})

export default createStackNavigator({ BottomNavTabs }, { headerMode: "none" });

