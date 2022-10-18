import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Proposal = () => {
    return (
        <View
            style={{
                marginVertical: 13,
                backgroundColor: '#000'
            }}
        >
            <View
                style={{
                    borderTopWidth: 0.3,
                    borderBottomWidth: 0.3,
                    borderColor: "#687684",
                }}
            />
            <Text
                style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginHorizontal: 20,
                    marginVertical: 5
                }}
            >Kimi takip etmeli</Text>
            <View
                style={{
                    borderTopWidth: 0.3,
                    borderBottomWidth: 0.3,
                    borderColor: "#687684",
                }}
            />
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
            }}>
                <Image
                    source={require('../../../Assets/Avatar.png')}
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        borderRadius: 25,
                    }}
                />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'white' }}>Name</Text>
                            <Text style={{ color: 'white' }}>Nickname</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: "#4C9EEB",
                                paddingHorizontal: 30,
                                borderRadius: 30
                            }}
                        >
                            <Text style={{ color: "#4C9EEB" }}>Takip et</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white' }}>asdgsadgsadgsagdsadgfasdfasdsadgsdagasdg</Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 5,
                    borderTopWidth: 0.3,
                    borderBottomWidth: 0.3,
                    borderColor: "#687684",
                }}
            />
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
            }}>
                <Image
                    source={require('../../../Assets/Avatar.png')}
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        borderRadius: 25,
                    }}
                />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'white' }}>Name</Text>
                            <Text style={{ color: 'white' }}>Nickname</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: "#4C9EEB",
                                paddingHorizontal: 30,
                                borderRadius: 30
                            }}
                        >
                            <Text style={{ color: "#4C9EEB" }}>Takip et</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white' }}>asdgsadgsadgsagdsadgfasdfasdsadgsdagasdg</Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 5,
                    borderTopWidth: 0.3,
                    borderBottomWidth: 0.3,
                    borderColor: "#687684",
                }}
            />
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
            }}>
                <Image
                    source={require('../../../Assets/Avatar.png')}
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        borderRadius: 25,
                    }}
                />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'white' }}>Name</Text>
                            <Text style={{ color: 'white' }}>Nickname</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: "#4C9EEB",
                                paddingHorizontal: 30,
                                borderRadius: 30
                            }}
                        >
                            <Text style={{ color: "#4C9EEB" }}>Takip et</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white' }}>asdgsadgsadgsagdsadgfasdfasdsadgsdagasdg</Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 5,
                    borderTopWidth: 0.3,
                    borderBottomWidth: 0.3,
                    borderColor: "#687684",
                }}
            />
            <View
                style={{
                    marginHorizontal: 15,
                    marginVertical: 10,
                }}
            >
                <Text
                    style={{
                        color: "#4C9EEB"
                    }}
                >Daha fazla göster</Text>
            </View>
        </View>
    )
}

export default Proposal