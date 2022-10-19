import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { TwitterLogo, Feature, SetingsStroke } from '../Svg/Svg';

const WelcomeHeader = ({ login, onPress }) => {
    return (
        <View
            style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                //justifyContent: 'space-between',
                //alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 18
            }}
        >
            {
                login ? (
                    <>
                        <TouchableOpacity
                            style={{
                                flex: 1
                            }}
                            onPress={onPress}
                        >
                            <Text
                                style={{
                                    color: "#4C9EEB",
                                    fontSize: 16
                                }}
                            >Vazgeç</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TwitterLogo />
                        </View>
                        <Text
                            style={{
                                color: '#000',
                                flex: 1
                            }}
                        >Vazgeç</Text>
                    </>
                ) : (
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <TwitterLogo />
                    </View>
                )
            }
        </View>
    )
}

export default WelcomeHeader;