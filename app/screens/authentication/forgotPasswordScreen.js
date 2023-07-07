import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleResetPassword = () => {
        // Implement password reset functionality here
        // You can add your logic to send a reset password email to the entered email address
        setShowConfirmation(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Let's reset your password</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor="#D6D6D6"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                {showConfirmation && (
                    <Text style={styles.confirmationText}>Please check your email for a password reset link</Text>
                )}
            </View>

            <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
                <Text style={styles.resetButtonText}>Continue</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    emailInput: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    resetButton: {
        backgroundColor: '#000000',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    resetButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    confirmationText: {
        top: 5,
        fontSize: 12,
        color: '#2dbe7d',
    },
});

export default ForgotPasswordScreen;
