import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isTextInputActive, setTextInputActive] = useState(false);
    const [isButtonActive, setButtonActive] = useState(false);
    const [isEmailValid, setEmailValid] = useState(true);

    const handleResetPassword = () => {
        if (isValidEmail(email)) {
            // Implement password reset functionality here
            // You can add your logic to send a reset password email to the entered email address
            setShowConfirmation(true);
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const isValidEmail = (email) => {
        // Add your email validation logic here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handlePressOutsideInput = () => {
        Keyboard.dismiss();
        setTextInputActive(false);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        setButtonActive(text.length > 0);
        setEmailValid(true);
    };

    return (
        <TouchableWithoutFeedback onPress={handlePressOutsideInput}>
            <View style={styles.container}>
                <Text style={styles.heading}>Let's reset your password</Text>

                <View style={[styles.textInputContainer, isTextInputActive && styles.activeTextInput]}>
                    <TextInput
                        style={[styles.emailInput, !isEmailValid && styles.invalidEmailInput]}
                        placeholder="Enter your email address"
                        placeholderTextColor="#D6D6D6"
                        onChangeText={handleEmailChange}
                        value={email}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onFocus={() => setTextInputActive(true)}
                        onBlur={() => setTextInputActive(false)}
                    />

                </View>

                {showConfirmation ? (
                    <Text style={styles.confirmationText}>Please check your email for a password reset link</Text>
                ) : null}

                {!isEmailValid && (
                    <Text style={styles.errorText}>It looks like there is a mistake in your email. Please check it again</Text>
                )}
                {/*// Hide the error message when the user starts typing again*/}
                {isEmailValid && <Text style={styles.errorText}>{"\n"}</Text>}

                {!showConfirmation && (
                    <Text style={styles.errorText}>{"\n"}</Text>
                )}




                <TouchableOpacity
                    style={[styles.resetButton, isButtonActive ? styles.activeResetButton : styles.inactiveResetButton]}
                    onPress={handleResetPassword}
                    disabled={!isButtonActive}
                >
                    <Text style={styles.resetButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: '60%',
    },
    heading: {
        fontSize: 24,
        fontFamily: 'Gill Sans',
        color: '#000000',
        marginBottom: 20,
    },
    textInputContainer: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
    },
    emailInput: {
        height: 50,
        paddingHorizontal: 10,
        fontFamily: 'Gill Sans',
        fontSize: 18,
        color: '#000000',
    },
    activeTextInput: {
        borderColor: '#2dbe7d',
    },
    invalidEmailInput: {
        borderColor: 'red',
    },
    resetButton: {
        backgroundColor: '#000000',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    activeResetButton: {
        opacity: 1,
    },
    inactiveResetButton: {
        opacity: 0.5,
    },
    resetButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    confirmationText: {
        fontSize: 12,
        color: '#2dbe7d',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});

export default ForgotPasswordScreen;
