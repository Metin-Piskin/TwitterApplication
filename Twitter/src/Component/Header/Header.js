import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import { TwitterLogo, Feature, SetingsStroke } from '../Svg/Svg';

const Header = ({ login, home, label, navigation, homePress }) => {
    const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState(true)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = auth().currentUser
        firestore()
            .collection('users')
            .where('owner_uid', '==', user.uid)
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    setCurrentLoggedInUser(documentSnapshot.data());
                });
            });
        if (!!CurrentLoggedInUser) {
            setLoading(false);
        }
    }, [])
    return (
        login ? (
            <View
                style={{
                    backgroundColor: '#000',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 18
                }}
            >

                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Profil')}>
                    <Image
                        source={{ uri: CurrentLoggedInUser.profile_picture }}
                        style={{
                            width: 32,
                            height: 32,
                            resizeMode: 'contain',
                            borderRadius: 16,
                        }}
                    />
                </TouchableOpacity>
                {
                    home ? (
                        <>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={homePress}
                            >
                                <TwitterLogo />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Feature />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <View style={{
                                flex: 1,
                                right: 31
                            }}
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        fontSize: 22,
                                    }}
                                >
                                    {label}
                                </Text>
                            </View>
                            <TouchableOpacity >
                                <SetingsStroke />
                            </TouchableOpacity>
                        </>
                    )
                }
            </View>
        ) : (
            <View
                style={{
                    backgroundColor: '#000',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 18
                }}
            >
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Profil')}>
                    <Image
                        source={{ uri: CurrentLoggedInUser.profile_picture }}
                        style={{
                            width: 32,
                            height: 32,
                            resizeMode: 'contain',
                            borderRadius: 16,
                        }}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{
                        backgroundColor: "#191919",
                        borderRadius: 20,
                        padding: 0,
                        width: 250,
                        marginHorizontal: 25,
                        textAlign: 'center'
                    }}
                    placeholder="Twitter'da Ara"
                    placeholderTextColor='#fff'
                />
                <TouchableOpacity >
                    <SetingsStroke />
                </TouchableOpacity>
            </View>
        )
    )
}

export default Header;