import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import validUrl from 'valid-url';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import {
  UploadImage,
  UploadGif,
  UploadStats,
  UploadLoaction,
  UploadTick,
  UploadAddButton
}
  from '../../Component/Svg/Svg';

const PLACEHOLDER_IMAGE = 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png';


const UploadTwitt = ({ navigation }) => {
  const [thumbnailurl, setThumbnailurl] = useState(PLACEHOLDER_IMAGE);

  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth().currentUser
    const unsubscribe = firestore()
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot(
        snapshot => snapshot.docs.map(doc => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture
          }
          )
        })
      )
    return unsubscribe
  }

  useEffect(() => {
    getUsername()
  }, [])

  const uploadPostToFirebase = (imageurl, caption) => {
    const unsubscribe = firestore().collection('users')
      .doc(auth().currentUser.email)
      .collection('posts')
      .add({
        imageurl: imageurl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: auth().currentUser.uid,
        owner_email: auth().currentUser.email,
        caption: caption,
        createdAt: firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: [],
      })
      .then(() => { navigation.goBack() })
    return unsubscribe
  }

  const uploadPostSchema = Yup.object().shape({
    imageurl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200, 'Caption has Reached the character limit.')
  });

  return (
    <Formik
      initialValues={{ caption: '', imageurl: '' }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageurl, values.caption)
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 22,

            }}
          >
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  color: "#4C9EEB",
                  fontSize: 16
                }}
              >
                Vazgeç
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#4C9EEB",
                paddingHorizontal: 15,
                paddingVertical: 2,
                borderRadius: 15,
              }}
              onPress={handleSubmit}
            // disabled={!isValid}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: 16
                }}
              >
                Tweetle
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../Assets/Avatar.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                borderRadius: 25,
                marginHorizontal: 8,
                marginVertical: 16,
                marginLeft: 18,
              }}
            />
            <TextInput
              placeholder='Neler oluyor?'
              placeholderTextColor={'#fff'}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
              onChange={null}
              multiline={true}
              style={{
                flex: 1,
                marginRight: 16,
                color: '#fff',
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <Image
              source={{ uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMAGE }}
              style={{
                width: 95,
                height: 95,
                resizeMode: 'contain',
                tintColor: "#4C9EEB",
                margin: 15,
              }}
            />
            <TextInput
              placeholder='URL'
              placeholderTextColor={'#fff'}
              onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
              onChangeText={handleChange('imageurl')}
              onBlur={handleBlur('imageurl')}
              value={values.imageurl}
              multiline={false}
              style={{
                flex: 1,
                color: '#fff',
                marginBottom: 25,
                borderBottomWidth: 0.5,
                borderColor: '#fff'
              }}
            />
            {errors.imageurl && (
              <Text style={{ fontSize: 10, color: 'red' }}>
                {errors.imageurl}
              </Text>
            )}
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
          >
            <View
              style={{
                borderTopWidth: 0.5,
                flexDirection: 'row',
                borderColor: '#fff',
                paddingVertical: 10
              }}
            >

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly'
                }}
              >
                <UploadImage />
                <UploadGif />
                <UploadStats />
                <UploadLoaction />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginHorizontal: 10
                }}
              >
                <View style={{ marginRight: 20 }}>
                  <UploadTick />
                </View>
                <UploadAddButton />
              </View>
            </View>
          </View>

        </View>
      )}
    </Formik>
  )
}

export default UploadTwitt;