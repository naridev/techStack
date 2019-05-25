import React from 'react'
import { TextInput, Text, View } from 'react-native';

const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {
    return(
        <View style = {styles.containerStyle}>
            <Text style = {styles.labelStyle}>{label}</Text>
            <TextInput
                value = {value}
                onChangeText = {onChangeText}
                style = {styles.inputStyle}
                autocorrect = {false}
                placeholder = {placeholder}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        height: 20,
        width: 100,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };