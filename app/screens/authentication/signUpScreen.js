import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import appData from '../../data/appData.json';
import { FIREBASE_AUTH } from '../../../firebase-auth';
import * as firebaseUserCreate from "firebase/auth";



// /Users/ajay/WebstormProjects/AlphaV1/node_modules/@firebase/auth-compat/dist/auth-compat/index.d.ts

function SignUpScreen({navigation}) {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');

    const handleCheckboxPress  = () => {
        setIsChecked(!isChecked);
    };

    const handleSignup = () => {
        firebaseUserCreate.createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then((userCredential) => {
                const user = userCredential.user;
                userCredential.user.phoneNumber = phone;
                userCredential.user.displayName = userName;

                console.log(userCredential.user.displayName);
                console.log(userCredential.user.email);
                console.log(userCredential.user.phoneNumber);
                console.log('User created successfully');
            })
            .catch(error => console.log(error.message))
    }

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.mainParentContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>{appData.appLabels.PodAILabels.appName}</Text>
                    <Text style={styles.subHeadingText}>{appData.appLabels.PodAILabels.appTagline}</Text>
                </View>

                <View style={styles.signupContainer}>
                    <View style={styles.lsHeadingContainer}>
                        <Text style={styles.loginText}>Login</Text>
                        <Text style={styles.signupText}>/Sign Up</Text>
                    </View>

                    <View style={styles.fieldsContainer}>
                        <Text style={styles.emailText}>Email address</Text>
                        <TextInput style={styles.emailField} placeholder="Email" placeholderTextColor="#D6D6D6" onChangeText={text => setEmail(text)} autoCapitalize={"none"} autoCorrect={false}   />

                        <Text style={styles.emailText}>Phone Number</Text>
                        <TextInput style={styles.emailField} placeholder="Phone Number" placeholderTextColor="#D6D6D6" onChangeText={text => setPhoneNumber(text)} />

                        <Text style={styles.emailText}>User Name</Text>
                        <TextInput style={styles.emailField} placeholder="Your unique user name" placeholderTextColor="#D6D6D6" onChangeText={text => setUserName(text)} />

                        <Text style={styles.emailText}>Password</Text>
                        <TextInput style={styles.emailField} secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="#D6D6D6" onChangeText={text => setPassword(text)}  />

                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxPress}>
                                <View style={[styles.checkbox, isChecked ? styles.checkedBox : null]} />
                                <Text style={styles.checkboxText}>By creating account I agree to the terms and usage of PodAI</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.createAccountButton} onPress={handleSignup}>
                            <Text style={styles.createAccountButtonText}>Create Account</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000000',
    },
    mainParentContainer: {
        flex: 1,
        backgroundColor: '#000000',
    },
    headingContainer: {
        // paddingTop: 40,
        paddingLeft: 20,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 40,
        color: '#f9f6f6',
        fontFamily: 'Futura-Medium',
    },
    subHeadingText: {
        fontSize: 15,
        color: '#f9f6f6',
        fontFamily: 'GillSans',
    },
    signupContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    lsHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        marginBottom: 10,
        top: 20,
    },
    loginText: {
        fontSize: 30,
        color: '#A1A1A1FF',
        fontFamily: 'Futura-Medium',
    },
    signupText: {
        fontSize: 30,
        color: '#000000',
        fontFamily: 'Futura-Medium',
        textDecorationLine: 'underline',
    },
    fieldsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingTop: 20,
    },
    emailText: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'GillSans',
    },
    emailField: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
    },
    checkedBox: {
        borderColor: '#2dbe7d',
        backgroundColor: '#2dbe7d',
        borderRadius: 10,
    },
    checkboxText: {
        fontSize: 15,
        color: '#a4a4a4',
        marginRight: 10,
    },
    createAccountButton: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 15,
        width: '50%'
    },
    createAccountButtonText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Futura-Medium',
    },
});

export default SignUpScreen;
