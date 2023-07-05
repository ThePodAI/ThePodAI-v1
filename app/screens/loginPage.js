import React, {TextInput, TouchableOpacity} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from "react";
import appData from '../data/appData.json';


export function LoginPage({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const appLabel = require('/Users/ajay/WebstormProjects/AlphaV1/app/data/appData.json');

    return(
        <View style={loginStyles.parentContainer}>

            <View style={loginStyles.headingContainer}>

                <View style={loginStyles.podAIHeadingContainer}>
                    <Text style={loginStyles.podAIHeading}>{appData.appLabels.PodAILabels.appName}</Text>
                </View>

                <View style={loginStyles.podAISubHeadingContainer} >
                    <Text style={loginStyles.podAITagline}>{appData.appLabels.PodAILabels.appTagline}</Text>
                </View>

            </View>

            <View style={loginStyles.loginContainer}>
                <View style={loginStyles.lsHeadingContainer}>
                    <Text style={loginStyles.loginText}>Login</Text>
                    <Text style={loginStyles.signupText}>/Sign Up</Text>
                </View>

                <View style={formStyles.parentFieldsContainer}>

                    <View style={formStyles.emailFieldContainer}>
                        <Text style={formStyles.emailText}>Email address</Text>
                        <TextInput style={formStyles.emailField} placeholder="Email" placeholderTextColor="#D6D6D6" onChangeText={setEmail}/>
                    </View>

                    <View style={formStyles.emailFieldContainer}>
                        <Text style={formStyles.emailText}>Password</Text>
                        <TextInput style={formStyles.emailField} secureTextEntry={true} placeholder="Password" placeholderTextColor="#D6D6D6" onChangeText={setPassword}/>
                    </View>

                    <View style={formStyles.bottomButtonsContainer}>

                        <TouchableOpacity style={loginStyles.loginButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={loginStyles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={formStyles.finalBelowContainer}>

                            <TouchableOpacity style={formStyles.signUpButtonContainer} onPress={() => navigation.navigate('Forgot Password')}>
                                <Text style={formStyles.forgotPasswordText}>Forgot your password?</Text>
                            </TouchableOpacity>

                        <TouchableOpacity style={formStyles.signUpButtonContainer} onPress={() => navigation.navigate('Sign Up')}>
                            <View style={formStyles.signUpButtonContainer}>
                                <Text style={loginStyles.signupPartOne}>Don't have an account? </Text>
                                <Text style={loginStyles.signupPartTwo}>Create one</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </View>
    )
}

const loginStyles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },

    headingContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '10%',
        top: '10%',
        backgroundColor: '#000',
    },
    subHeadingContainer: {
        backgroundColor: '#000',
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    podAIHeadingContainer: {
        backgroundColor: '#000000',
        position: 'absolute',
        width: '100%',
        height: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    podAISubHeadingContainer: {
        backgroundColor: '#000000',
        position: 'absolute',
        top: '50%',
        width: '100%',
        height: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    loginButtonText: {
        fontFamily: 'Futura-Medium',
        fontSize: 20,
        color: '#ffffff',
    },

    podAIHeading: {
        fontSize: 40,
        color: '#ffffff',
        fontFamily: 'Futura-Medium',
        left: '5%',

    },
    podAITagline: {
        fontSize: 15,
        color: '#D6D6D6',
        fontFamily: 'GillSans',
        left: '5%',
    },

    loginContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        top: '15%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    lsHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        height: '10%',
        top: '5%',
        backgroundColor: '#ffffff',
    },

    loginText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontFamily: 'Futura-Medium',
        fontSize: 30,
        color: '#000',
        textDecorationLine: 'underline',
    },
    signupText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontFamily: 'Futura-Medium',
        fontSize: 30,
        color: '#000',
    },

    signupPartOne: {
        flexDirection: 'row',
        fontFamily: 'GillSans',
        fontSize: 16,
        color: '#505050',
    },
    signupPartTwo: {
        flexDirection: 'row',
        fontFamily: 'GillSans',
        fontSize: 16,
        color: '#000',
        textDecorationLine: 'underline',
    },

    loginButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: '50%',
        backgroundColor: '#000000',
        borderRadius: 5,
        left: '5%',
        borderWidth: 1,
        borderStyle: 'solid',
    },


})

const formStyles = StyleSheet.create({
    parentFieldsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        top: '5%',
        backgroundColor: '#ffffff',
    },
    emailFieldContainer: {
        flexDirection: 'column',
        top: '2%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '25%',
        backgroundColor: '#ffffff',
    },
    bottomButtonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '20%',
        top: '5%',
        backgroundColor: '#ffffff',
    },

    emailField: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        width: '90%',
        height: '50%',
        top: '10%',
        left: '5%',
    },
    emailText: {
        left: '5%',
        fontSize: 20,
        color: '#333',
        fontFamily: 'GillSans',
    },
    forgotPasswordText: {
        fontSize: 16,
        color: '#505050',
        fontFamily: 'GillSans',
        textDecorationLine: 'underline',
        left: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    finalBelowContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '100%',
        height: '25%',
        top: '5%',
        backgroundColor: '#ffffff',
    },
    signUpButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        left: '5%',
    },

})
export default LoginPage;