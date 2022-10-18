import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';

import Header from '../../Component/Header';
import Post from '../../Component/Post';
import Button from '../../Component/Button';


const Home = ({ navigation }) => {
    return (
        <>
            <Button addtext={true} />
            <ScrollView style={{ backgroundColor: "#191919" }}>
                <StatusBar backgroundColor={'#000'} />
                <Header login={true} home={true} navigation={navigation} />
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
            </ScrollView>
        </>
    )
}

export default Home;