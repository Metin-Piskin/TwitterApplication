import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import * as Yup from 'yup';
import Validator from 'email-validator';

import WelcomeHeader from '../../../Component/WelcomeHeader';

const initialFormValues = {
    usermail: '',
    password: '',
};

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (formValues) => {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
            setLoading(false);
        } catch (error) {
            Alert.alert(
                'My Lord...',
                error.message + '\n\n ... what would you like to do next?',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Kayıt Ol',
                        onPress: () => navigation.navigate('Sign'),
                    },
                ]
            );
            setLoading(false);
        }
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
    });


    return (
        <>
            <StatusBar backgroundColor={'#000'} />
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
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
                                Twitter'a giriş yap
                            </Text>
                            <View
                                style={{
                                    marginHorizontal: 20
                                }}
                            >
                                <TextInput
                                    placeholder='Telefon, e-posta veya kuullanıcı adı'
                                    placeholderTextColor={"#687684"}
                                    onChangeText={handleChange('usermail')}
                                    value={values.usermail}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    autoFocus={true}
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
                                        borderColor:
                                            1 > values.password || values.password.length > 5
                                                ? "#687684"
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
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    marginHorizontal: 15
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#4C9EEB"
                                    }}
                                >
                                    Şifreni mi unuttun?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: isValid ? "#4C9EEB" : "#687684",
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
                                    Giriş yap
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </>
    )
}

export default Login;