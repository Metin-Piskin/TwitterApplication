import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import * as Yup from 'yup';
import Validator from 'email-validator';
import validUrl from 'valid-url';

import WelcomeHeader from '../../../Component/WelcomeHeader';

const initialFormValues = {
    usermail: "",
    name: "",
    nickname: "",
    password: "",
};

const PLACEHOLDER_IMAGE = 'https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=';

const SignIn = ({ navigation }) => {
    const [thumbnailurl, setThumbnailurl] = useState(PLACEHOLDER_IMAGE);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (formValues) => {
        try {
            const authUser = await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            firestore().collection('users')
                .doc(formValues.usermail)
                .set({
                    owner_uid: authUser.user.uid,
                    name: formValues.name,
                    nickname: formValues.nickname,
                    email: formValues.usermail,
                    profile_picture: formValues.imageurl,
                });
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        name: Yup.string().required().min(2, 'A username is required'),
        nickname: Yup.string().required().min(2, 'A nickname is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
        imageurl: Yup.string().url().required('A url is required'),
    });

    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
                validationSchema={LoginFormSchema}
            >
                {({ values, handleChange, handleSubmit, handleBlur, isValid, errors }) => (
                    <>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#000',
                            }}
                        >
                            <WelcomeHeader login={true} onPress={() => navigation.goBack()} />
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 23,
                                    alignSelf: 'center',
                                    marginTop: 25,
                                    marginBottom: 12.2,
                                }}
                            >
                                Hesabını oluştur
                            </Text>

                            <Image
                                source={{ uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMAGE }}
                                style={{
                                    with: 100,
                                    height: 100,
                                    resizeMode: 'contain',
                                    marginBottom: 19
                                }}
                            />
                            <View
                                style={{
                                    marginHorizontal: 55
                                }}
                            >
                                {errors.imageurl && (
                                    <Text style={{ fontSize: 10, color: 'red' }}>
                                        {errors.imageurl}
                                    </Text>
                                )}
                                <TextInput
                                    placeholder="Profil Resmi URL"
                                    placeholderTextColor={"#687684"}
                                    onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
                                    onChangeText={handleChange('imageurl')}
                                    onBlur={handleBlur('imageurl')}
                                    value={values.imageurl}
                                    multiline={true}
                                    style={{
                                        color: '#fff',
                                        borderBottomWidth: 0.4,
                                        borderColor: "#687684"
                                    }}
                                />
                                <TextInput
                                    placeholder="Adı"
                                    placeholderTextColor={"#687684"}
                                    onChangeText={handleChange('name')}
                                    value={values.name}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    onBlur={handleBlur('name')}
                                    style={{
                                        color: '#fff',
                                        borderBottomWidth: 0.4,
                                        borderColor:
                                            1 > values.name || values.name.length > 3
                                                ? "#687684"
                                                : '#FF0000',
                                    }}
                                />
                                <TextInput
                                    placeholder="Kullanıcı Adı"
                                    placeholderTextColor={"#687684"}
                                    onChangeText={handleChange('nickname')}
                                    value={values.nickname}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    onBlur={handleBlur('nickname')}
                                    style={{
                                        color: '#fff',
                                        borderBottomWidth: 0.4,
                                        borderColor:
                                            1 > values.nickname || values.nickname.length > 5
                                                ? "#687684"
                                                : '#FF0000',
                                    }}
                                />
                                <TextInput
                                    placeholder='Telefon veya e-posta'
                                    placeholderTextColor={"#687684"}
                                    onChangeText={handleChange('usermail')}
                                    value={values.usermail}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    onBlur={handleBlur('usermail')}
                                    style={{
                                        color: '#fff',
                                        borderBottomWidth: 0.4,
                                        borderColor:
                                            values.usermail < 1 || Validator.validate(values.usermail)
                                                ? "#687684"
                                                : '#FF0000',
                                    }}
                                />
                                <TextInput
                                    placeholder='Şifre'
                                    placeholderTextColor={"#687684"}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    autoCapitalize="none"
                                    textContentType={'password'}
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onBlur={handleBlur('password')}
                                    style={{
                                        color: '#fff',
                                        borderBottomWidth: 0.4,
                                        borderColor: 1 > values.password || values.password.length > 5
                                            ? '#687684'
                                            : '#FF0000',
                                    }}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor: '#000',
                                flexDirection: 'row',
                                borderTopWidth: 1,
                                borderColor: "#687684",
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    marginHorizontal: 15
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#000"
                                    }}
                                >
                                    Şifreni mi unuttun?
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: isValid ? "#4C9EEB" : "#9ACAF7",
                                    paddingVertical: 5,
                                    paddingHorizontal: 15,
                                    borderRadius: 20,
                                    marginVertical: 10,
                                    marginHorizontal: 15
                                }}
                                disabled={!isValid}
                                onPress={handleSubmit}
                            >
                                <Text
                                    style={{
                                        color: "#fff"
                                    }}
                                >
                                    Kayıt ol
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </>
                )}
            </Formik>
        </>
    )
}

export default SignIn