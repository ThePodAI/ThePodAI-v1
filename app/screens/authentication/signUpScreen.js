import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import appData from '../../data/appData.json';

export function SignUpScreen({navigation}) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };
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
                        <TextInput style={styles.emailField} placeholder="Email" placeholderTextColor="#D6D6D6" />

                        <Text style={styles.emailText}>Phone Number</Text>
                        <TextInput style={styles.emailField} placeholder="Phone Number" placeholderTextColor="#D6D6D6" />

                        <Text style={styles.emailText}>Password</Text>
                        <TextInput style={styles.emailField} secureTextEntry={true} placeholder="Password" placeholderTextColor="#D6D6D6" />

                        <Text style={styles.emailText}>Confirm Password</Text>
                        <TextInput style={styles.emailField} secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="#D6D6D6" />

                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxPress}>
                                <View style={[styles.checkbox, isChecked ? styles.checkedBox : null]} />
                                <Text style={styles.checkboxText}>By creating account I agree to the terms and usage of PodAI</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('User Home')}>
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
