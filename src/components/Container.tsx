import * as React from 'react';
import {ButtonProps, Text, View, ViewStyle} from 'react-native';
import {Resolver} from "../Resolver";

// type type = {[key: string]: string | Array<any>}
type type = any
export interface ContainerProps extends type{
    direction: "horizontal",
    horizontalAlign: "space-around",
    verticalAlign: "center",
    items: Array<{id: string, type: 'button' | 'text', props: ButtonProps | {text: string}}>
}

const keyAliases:any = {
    direction: 'flexDirection',
    horizontalAlign: 'justifyContent',
    verticalAlign: "alignItems",
}

const valueAliases: any = {
    horizontal: 'row',
}

export const Container = (props: ContainerProps) => {
    const CONTAINER_STYLE: any = Object.keys(props).map((key: any) => {
        const target = keyAliases[key];
        if(target) {
            return {[target]: valueAliases[props[key]] || props[key]}
        }
    }).filter(i => i !== undefined).reduce((prev, item) => {
        return Object.assign(prev, item)
    })

    return (
        <View style={{...CONTAINER_STYLE, padding: 4, minHeight: 100}}>
            {props.items.map(item => (
                <Resolver type={item.type} props={item.props}/>
            ))}
        </View>
    );
};
