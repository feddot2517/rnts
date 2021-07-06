import * as React from 'react';
import {Pressable, ViewStyle, Text, View, TouchableOpacity} from 'react-native';

interface ButtonProps {
    "type": 'danger' | 'default' | 'primary'
    "text": string
    "size": 'normal' | 'large' | 'small'
}

const BUTTON_SIZES = {
    normal: '',
    large: '',
    small: '',
}

const DEFAULT_BUTTON_STYLE: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#eaeaea",
}
const VIEW_STYLE: ViewStyle = {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
}

export const Button = (props: ButtonProps) => {
    return (
        <View style={VIEW_STYLE}>
            <TouchableOpacity style={DEFAULT_BUTTON_STYLE}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};