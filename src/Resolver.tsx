import * as React from 'react';
import { Container, ContainerProps } from "./components/Container";
import { Button } from "./components/Button";
import {Text} from "./components/Text";
import {Input} from "./components/Input";
import { View } from 'react-native';

export const Resolver = (props: {type: string, props: any, ref: any}): any => {
    const target: {[key: string]: any} = {
        button: () => <Button {...props.props}/>,
        container: () => <Container {...props.props}/>,
        text: () => <Text {...props.props}/>,
        input: () => <Input {...props.props}/>
    }

    return (
      <View ref={props.ref}>
          {target[props.type]()}
      </View>
    )
}
