import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import Button from '../../Component/Button';
import { LeftArrow } from '../../Component/Svg/Svg';

const Profil = ({ navigation }) => {
  const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState(true)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth().currentUser
    firestore()
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .get()
      .then(querySnapshot => {
        //console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          setCurrentLoggedInUser(documentSnapshot.data());
        });
      });
    if (!!CurrentLoggedInUser) {
      setLoading(false);
    }
  }, [])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#191919"
      }}
    >
      <Button addtext={true} />
      <View
        style={{
          backgroundColor: '#4C9EEB',
          width: '100%',
          height: 120
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#191919",
            position: 'absolute',
            left: 10,
            top: 15,
            padding: 12,
            paddingHorizontal:15,
            borderRadius: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <LeftArrow />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#000'
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Image
            source={{ uri: CurrentLoggedInUser.profile_picture }}
            style={{
              resizeMode: 'contain',
              width: 80,
              height: 80,
              borderRadius: 40,
              borderWidth: 4,
              borderColor: '#000',
              marginTop: -30,
            }}
          />
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#4C9EEB',
              padding: 8,
              paddingVertical: 5,
              marginHorizontal: 5,
              borderRadius: 20
            }}
          >
            <Text
              style={{
                color: '#4C9EEB'
              }}
            >Profil düzenle</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 25,

            }}
          >{CurrentLoggedInUser.name}</Text>
          <Text
            style={{
              color: '#687684',
              marginBottom: 15
            }}
          >@{CurrentLoggedInUser.nickname}</Text>
          <Text
            style={{
              color: '#687684',
              marginBottom: 10
            }}
          >Ağustos 2019 tarihinde katıldı</Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                marginRight: 10
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  marginRight: 3
                }}
              >
                000
              </Text>
              <Text
                style={{
                  color: '#687684'
                }}
              >Takip edilen</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  marginRight: 3
                }}
              >
                000
              </Text>
              <Text
                style={{
                  color: '#687684'
                }}
              >Takipcçi</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
          }}
        >
          <TouchableOpacity
            style={{
              borderBottomWidth: 3,
              borderColor: '#4C9EEB',
              marginRight: 35
            }}
          >
            <Text
              style={{
                color: '#4C9EEB',
                fontWeight: '600',
                marginBottom: 5
              }}
            >Tweet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 35
            }}
          >
            <Text
              style={{
                color: '#687684',
                fontWeight: '600',
                marginBottom: 5
              }}
            >Tweetler ve yanıtlar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 35
            }}
          >
            <Text
              style={{
                color: '#687684',
                fontWeight: '600',
                marginBottom: 5

              }}
            >Medya</Text>
          </TouchableOpacity>
          <TouchableOpacity

          >
            <Text
              style={{
                color: '#687684',
                fontWeight: '600',
                marginBottom: 5

              }}
            >Beğeni</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profil;