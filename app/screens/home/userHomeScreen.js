import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Icon} from "react-native-elements";
import * as firebaseUserCreate from "firebase/auth";
import {FIREBASE_AUTH} from "../../../firebase-auth";


export default function UserHomeScreen({navigation}) {

    const logOut = () => {
        FIREBASE_AUTH.signOut()
            .then(() => {
                navigation.replace('Login')
            })
            .catch(error => console.log("Logging from userHomeScreen",error.message))
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text>Welcome user : {FIREBASE_AUTH.currentUser?.displayName}</Text>
            <TouchableOpacity style={styles.logOutButton} onPress={logOut}>
                <Text style={styles.logOutText}>LogOut of PodAI</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    logOutButton: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000',
    },
    logOutText: {
        fontSize: 12,
        color: '#ff6e6e',
    },
});