import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import {
    DownArrow,
    CommentStroke,
    RetweetStroke,
    RetweetSolid,
    HeartStroke,
    HeartSolid,
    ShareStroke
} from '../Svg/Svg';

const Post = ({ post, likePress, retweetPress, commentPress }) => {
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
                    source={{ uri: post.profile_picture }}
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
                            {post.name}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                color: "#191919"
                            }}
                        >
                            @{post.nickname}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                color: "#191919",
                                flex: 1
                            }}
                        >
                            {/*post.createdAt*/}
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
                            {post.caption}
                        </Text>
                    </View>
                </View>
            </View>
            {
                post.imageurl ? (

                    <Image
                        source={{ uri: post.imageurl }}
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
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={commentPress}
                >
                    {post.comments_by_users.includes(
                        auth().currentUser.email
                    ) ?
                        <CommentStroke fill={"#687684"} />
                        : <CommentStroke fill={"#687684"} />
                    }
                    {
                        post.comments_by_users.length > 0 ? (

                            <Text
                                style={{
                                    color: "#687684",
                                    marginLeft: 5
                                }}
                            >
                                {post.comments_by_users.length}
                            </Text>
                        ) : (
                            <View></View>
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={retweetPress}
                >
                    {post.retweets_by_users.includes(
                        auth().currentUser.email
                    ) ?
                        <RetweetSolid />
                        : <RetweetStroke fill={"#687684"} />
                    }
                    {
                        post.retweets_by_users.length > 0 ? (

                            <Text
                                style={{
                                    color: "#687684",
                                    marginLeft: 5
                                }}
                            >
                                {post.retweets_by_users.length}
                            </Text>
                        ) : (
                            <View></View>
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={likePress}
                >
                    {post.likes_by_users.includes(
                        auth().currentUser.email
                    ) ?
                        <HeartSolid />
                        : <HeartStroke fill={"#687684"} />
                    }
                    {
                        post.likes_by_users.length > 0 ? (

                            <Text
                                style={{
                                    color: "#687684",
                                    marginLeft: 5
                                }}
                            >
                                {post.likes_by_users.length}
                            </Text>
                        ) : (
                            <View></View>
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity>
                    <ShareStroke fill={"#687684"} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Post;