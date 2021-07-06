import * as React from 'react';
import {ButtonProps, Text, TextInput, View} from 'react-native';

export interface InputProps {
    title: string
    placeholder: string,
}

export const Input = (props: InputProps) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <TextInput style={{ backgroundColor: '#e2e2e2', minWidth: 200, padding: 8}} placeholder={props.placeholder}/>
        </View>
    );
};