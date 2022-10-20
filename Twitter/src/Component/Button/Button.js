import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AddTextİcon, Addİcon } from '../Svg/Svg';

const Button = ({ addtext, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 56,
                height: 56,
                position: 'absolute',
                backgroundColor: '#4C9EEB',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 28,
                right: 10,
                bottom: 10,
                zIndex: 1
            }}
            onPress={onPress}
        >
            {
                addtext ? (
                    <AddTextİcon />
                ) : (
                    <Addİcon />
                )
            }
        </TouchableOpacity>
    )
}

export default Button;