import React, {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from "react";


function ForgotPasswordScreen(){
    return(

        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Let's reset your password! </Text>
        </SafeAreaView>

    )
}

export default ForgotPasswordScreen;
