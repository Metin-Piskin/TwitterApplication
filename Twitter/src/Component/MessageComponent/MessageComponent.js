import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MessageComponent = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                marginVertical: 30
            }}
        >
            <Text
                style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 20
                }}
            >Mesaj gönderme, mesaj al</Text>
            <View style={{ marginHorizontal: 30, }}>
                <Text style={{ color: "#687684" }}>Direkt Mesajlar, sen ve Twitter'daki diğer kişiler arasında gerçekleşen özel sohbetlerdir. Tweetler, medyaları ve daha fazlasını paylaşabilirsin!</Text>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: "#4C9EEB",
                    margin: 10,
                    padding: 12,
                    borderRadius: 30
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20
                    }}
                >Mesaj yaz</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MessageComponent;