import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../Component/Header';
import Agenda from '../../Component/SearchComponent/Agenda';
import Proposal from '../../Component/SearchComponent/Proposal';
import Button from '../../Component/Button';

const Search = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#191919", flex: 1 }}>
            <ScrollView>
                <Header navigation={navigation} />
                <Agenda />
                <Proposal />
            </ScrollView>
            <Button addtext={true} onPress={() => navigation.navigate('UploadTwitt')}/>
        </View>
    )
}

export default Search;