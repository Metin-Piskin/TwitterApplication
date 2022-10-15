import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../Component/Header';

const Message = () => {
  return (
    <View>
      <Header login={true} label='Mesajlar' />
    </View>
  )
}

export default Message;