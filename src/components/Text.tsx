import * as React from 'react';
import { Text as RnText } from 'react-native'

export interface TextProps {
    text: string
}

export const Text = (props: TextProps) => {
    return (
        <RnText>{props.text}</RnText>
    )
}
