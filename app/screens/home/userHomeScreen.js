import React, {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from "react";


function UserHomeScreen(){
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#143153'}}>
            <Text>Welcome To Home Screen dear User !! </Text>
        </SafeAreaView>
    )
}

export default UserHomeScreen;
