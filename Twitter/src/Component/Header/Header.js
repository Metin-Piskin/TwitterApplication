import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import { TwitterLogo, Feature, SetingsStroke } from '../Svg/Svg';

const Header = ({ login, home, label }) => {
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

                <TouchableOpacity style={{ flex: 1 }}>
                    <Image
                        source={require('../../Assets/Avatar.png')}
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
                        <TouchableOpacity style={{ flex: 1 }}>
                            <TwitterLogo />
                        </TouchableOpacity>
                    ) : (
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
                    )
                }
                <TouchableOpacity >
                    <Feature />
                </TouchableOpacity>
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
                <TouchableOpacity style={{ flex: 1 }}>
                    <Image
                        source={require('../../Assets/Avatar.png')}
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
                        backgroundColor: "#687684",
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