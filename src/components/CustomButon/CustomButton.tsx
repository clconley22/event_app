import React from 'react'
import {Text, View, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {}
            ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', 

        borderColor: '#b8d8d8',
        borderWidth:  1, 
        borderRadius: 5, 
        
        paddingVertical: 10, 
        paddingHorizontal: 10,
        marginVertical: 5,

        alignItems: 'center',
    },

    container_PRIMARY: {
        backgroundColor: '#fe5f55',
    },

    container_TERTIARY: {},


    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'gray',
    }
});

export default CustomButton;