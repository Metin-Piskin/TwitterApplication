import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Header from '../../Component/Header';
import Button from '../../Component/Button';

const Notification = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#191919" }}>
      <Header login={true} label='Bildirimler' navigation={navigation} />
      <View style={{
        flexDirection: 'row',
      }}
      >
        <TouchableOpacity style={styles.Tümücontainer}>
          <Text style={styles.Tümütext}>Tümü</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bahsedenlercontainer}>
          <Text style={styles.Bahsedenlertext}>Bahsedenler</Text>
        </TouchableOpacity>
      </View>
      <Button addtext={true} />
    </View>
  )
}

export default Notification;

const styles = StyleSheet.create({
  Tümücontainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#4C9EEB',
    backgroundColor: '#000',
    flex: 1
  },
  Tümütext: {
    color: '#4C9EEB',
    marginLeft: 80,
    fontWeight: 'bold'
  },
  Bahsedenlercontainer: {
    paddingVertical: 10,
    backgroundColor: '#000',
    flex: 1
  },
  Bahsedenlertext: {
    color: '#fff',
    marginLeft: 60,
    fontWeight: 'bold'
  }
})