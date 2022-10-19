import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import WelcomeHeader from '../../../Component/WelcomeHeader';

const Welcome = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#000'
            }}
        >
            <StatusBar backgroundColor={'#000'} />
            <WelcomeHeader />
            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 25,
                    top: 350
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 30
                    }}
                >
                    Şu anda dünyada olup bitenleri gör.
                </Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#4C9EEB",
                        paddingVertical: 10,
                        paddingHorizontal: 75,
                        borderRadius: 36,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 15
                    }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >
                        Hesap oluştur
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    top: 480,
                    marginHorizontal: 33
                }}
            >
                <Text
                    style={{
                        color: "#687684",
                        marginRight: 5
                    }}
                >
                    Zaten bir hesabın var mı?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text
                        style={{
                            color: "#4C9EEB"
                        }}
                    >
                        Giriş yap
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome;