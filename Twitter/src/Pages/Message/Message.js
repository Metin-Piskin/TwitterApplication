import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../Component/Header';
import Button from '../../Component/Button';
import MessageComponent from '../../Component/MessageComponent';

const Message = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#191919" }}>
      <Header login={true} label='Mesajlar' navigation={navigation} />
      <MessageComponent />
      <Button />
    </View>
  )
}

export default Message;