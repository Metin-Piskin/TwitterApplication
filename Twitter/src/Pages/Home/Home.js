import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import Header from '../../Component/Header';

const Home = () => {
    return (
        <View>
            <StatusBar backgroundColor={'#000'} />
            <Header login={true} home={true} />
            <Text>Home</Text>
        </View>
    )
}

export default Home;