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
import Lists from './Pages/Lists';
import Topics from './Pages/Topics';
import PlaceMarks from './Pages/PlaceMarks';
import Moments from './Pages/Moments';

import { TabBarHome, TabBarSearch, TabBarBell, TabBarMail } from './Component/Svg/Svg';

const Auth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
    );
}

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000'
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <TabBarHome fill={"#4C9EEB"} />
                        }
                        return <TabBarHome fill={"#687684"} />
                    }
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
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
                name='Notification'
                component={Notification}
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
                name='Message'
                component={Message}
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

const DrawerNavi = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Profil' component={Profil} />
            <Drawer.Screen name='Lists' component={Lists} />
            <Drawer.Screen name='Topics' component={Topics} />
            <Drawer.Screen name='PlaceMarks' component={PlaceMarks} />
            <Drawer.Screen name='Moments' component={Moments} />
        </Drawer.Navigator>
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
