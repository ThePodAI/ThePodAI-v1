import React from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function usePhoneNumber(){
    return(
        <View style={phoneNumberStyles.background}>
            <Text>This is a login </Text>
        </View>
    )
}
function useEmailAddress(){
    return(
        <View style={useEmail.background}>
            <Text>This is a login </Text>
        </View>
    )
}
function loginScreen() {
    return(
        <View style={loginScreenStyles.background}>
            <Text>This is a login </Text>
        </View>
    )
}

export const phoneNumberStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export const useEmail = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export const loginScreenStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
})
