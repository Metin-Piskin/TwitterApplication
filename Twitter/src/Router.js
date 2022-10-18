import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import Login from './Pages/Auth/Login';
import SignIn from './Pages/Auth/SignIn';

import Home from './Pages/Home';
import Search from './Pages/Search';
import Notification from './Pages/Notification';
import Message from './Pages/Message';

import Profil from './Pages/Profil';

import { TabBarHome, TabBarSearch, TabBarBell, TabBarMail } from './Component/Svg/Svg';

const Auth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
    );
}

const HomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profil' component={Profil} />
        </Stack.Navigator>
    )
}

const SearchScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Profil' component={Profil} />
        </Stack.Navigator>
    )
}

const NotificationScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='Profil' component={Profil} />
        </Stack.Navigator>
    )
}

const MessageScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Message' component={Message} />
            <Stack.Screen name='Profil' component={Profil} />
        </Stack.Navigator>
    )
}

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopColor: "#191919"
                }
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <TabBarHome fill={"#4C9EEB"} />
                        }
                        return <TabBarHome fill={"#687684"} />
                    }
                }}
            />
            <Tab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <TabBarSearch fill={"#4C9EEB"} />
                        }
                        return <TabBarSearch fill={"#687684"} />
                    }
                }}
            />
            <Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <TabBarBell fill={"#4C9EEB"} />
                        }
                        return <TabBarBell fill={"#687684"} />
                    }
                }}
            />
            <Tab.Screen
                name='MessageScreen'
                component={MessageScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <TabBarMail fill={"#4C9EEB"} />
                        }
                        return <TabBarMail fill={"#687684"} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='BottomTab' component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;
