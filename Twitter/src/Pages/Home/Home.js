import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import Header from '../../Component/Header';
import Post from '../../Component/Post';
import Button from '../../Component/Button';


const Home = ({ navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firestore().collectionGroup('posts')
            .onSnapshot(snapshot => {
                setPosts(snapshot?.docs.map(post => (
                    { id: post.id, ...post.data() })))
            })
    }, [])

    const handleLike = (post) => {
        const currentLikeStatus = !post.likes_by_users.includes(
            auth().currentUser.email
        )
        firestore().collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update(
                {
                    likes_by_users: currentLikeStatus ?
                        firestore.FieldValue.arrayUnion(
                            auth().currentUser.email
                        )
                        : firestore.FieldValue.arrayRemove(
                            auth().currentUser.email
                        )
                }
            )
            .then(() => {
                console.log('like updated')
            })
            .catch(error => {
                console.log("error: ")
            })
    }
    const handleRetweet = (post) => {
        const currentRetweetStatus = !post.retweets_by_users.includes(
            auth().currentUser.email
        )
        firestore().collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update(
                {
                    retweets_by_users: currentRetweetStatus ?
                        firestore.FieldValue.arrayUnion(
                            auth().currentUser.email
                        )
                        : firestore.FieldValue.arrayRemove(
                            auth().currentUser.email
                        )
                }
            )
            .then(() => {
                console.log('like updated')
            })
            .catch(error => {
                console.log("error: ")
            })
    }
    const handleComment = (post) => {
        const currentRetweetStatus = !post.comments_by_users.includes(
            auth().currentUser.email
        )
        firestore().collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update(
                {
                    comments_by_users: currentRetweetStatus ?
                        firestore.FieldValue.arrayUnion(
                            auth().currentUser.email
                        )
                        : firestore.FieldValue.arrayRemove(
                            auth().currentUser.email
                        )
                }
            )
            .then(() => {
                console.log('like updated')
            })
            .catch(error => {
                console.log("error: ")
            })
    }

    return (
        <>
            <Button
                addtext={true}
                onPress={() => navigation.navigate('UploadTwitt')}
            />
            <ScrollView style={{ backgroundColor: "#191919" }}>
                <StatusBar backgroundColor={'#000'} />
                <Header
                    login={true}
                    home={true}
                    navigation={navigation}
                    homePress={() => auth().signOut()}
                />
                {posts.map((post, index) =>
                    <Post
                        key={index}
                        post={post}
                        likePress={() => handleLike(post)}
                        retweetPress={() => handleRetweet(post)}
                        commentPress={() => handleComment(post)}
                    />)}
                {/*
                <Post
                    Name='Metin'
                    Nickname='@MtnPskn'
                    Time='3sa'
                    Explanation='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'
                    resim={require('../../Assets/Avatar.png')}
                />
                <Post
                    Name='Metin'
                    Nickname='@MtnPskn'
                    Time='3sa'
                    Explanation='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'
                />
                <Post
                    Name='Metin'
                    Nickname='@MtnPskn'
                    Time='3sa'
                    Explanation='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'
                />
    */}
            </ScrollView>
        </>
    )
}

export default Home;