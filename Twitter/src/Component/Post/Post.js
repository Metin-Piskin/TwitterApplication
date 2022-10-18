import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import {
    DownArrow,
    CommentStroke,
    RetweetStroke,
    HeartStroke,
    ShareStroke
} from '../Svg/Svg';

const Post = ({ Name, Nickname, Time, Explanation, resim }) => {
    return (
        <View
            style={{
                backgroundColor: '#000',
                alignItems: 'center',
            }}
        >
            <View style={{
                borderTopWidth: 0.3,
                borderColor: '#fff',
                width: '100%',
                paddingVertical: 3
            }} />
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
            }}>
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        borderRadius: 25,
                        marginRight: 5
                    }}
                />
                <View
                    style={{ flex: 1 }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{

                                color: '#fff'
                            }}
                        >
                            {Name}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                color: '#fff'
                            }}
                        >
                            {Nickname}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                color: '#fff',
                                flex: 1
                            }}
                        >
                            {Time}
                        </Text>
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <DownArrow />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text
                            style={{

                                color: '#fff'
                            }}
                        >
                            {Explanation}
                        </Text>
                    </View>
                </View>
            </View>
            {
                resim ? (

                    <Image
                        source={ resim }
                        style={{
                            width: 310,
                            height: 270,
                            resizeMode: 'contain',
                            marginVertical: 10,
                            marginLeft: 38,
                            borderRadius: 15
                        }}
                    />
                ) : (
                    <View style={{ marginVertical: 3 }}></View>
                )
            }
            <View
                style={{
                    flexDirection: 'row',
                    marginLeft: 75,
                    marginRight: 35,
                    marginBottom: 7
                }}
            >
                <TouchableOpacity style={{ flex: 1, }}>
                    <CommentStroke fill={"#687684"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, }}>
                    <RetweetStroke fill={"#687684"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, }}>
                    <HeartStroke fill={"#687684"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ShareStroke fill={"#687684"} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Post;