import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../Component/Header';

const Notification = () => {
  return (
    <View>
      <Header login={true} label='Bildirimler' />
    </View>
  )
}

export default Notification;