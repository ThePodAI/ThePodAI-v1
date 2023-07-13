import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import appData from '../../data/appData.json';

export const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../../assets/onboarding/mainIconWithName.jpg')} />
            </View>

            <View style={styles.containerTwo}>
                <Text style={styles.title}>Discover.Listen.Learn</Text>

                <Text style={styles.contentText}>
                    The power of Machine learning has now landed in Podcasting.
                    With the power of GPT-4, we are able to generate a podcast based on your prompt.
                    And, the best part is, it sounds so human that you can't tell the difference.
                </Text>

                <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'flex-end',
    },
    logoContainer: {
        height: '45%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTwo: {
        height: '45%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    contentText: {
        fontSize: 16,
        color: '#9f9f9f',
        fontFamily: 'GillSans',
        textAlign: 'center',
        width: '80%',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 30,
        color: '#000000',
        fontFamily: 'Futura-Medium',
    },
    subtitle: {
        fontSize: 15,
        color: '#A1A1A1',
        fontFamily: 'GillSans',
        marginBottom: 20,
    },
    taglineContainer: {
        marginBottom: 30,
        marginTop: 20,
        alignItems: 'flex-start',
    },
    taglineContainer2: {
        marginBottom: 25,
        alignItems: 'flex-end',
    },
    tagline: {
        fontSize: 26,
        color: '#A1A1A1',
        fontFamily: 'GillSans',
    },
    getStartedButton: {
        backgroundColor: '#000000',
        width: '85%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    getStartedButtonText: {
        fontSize: 25,
        color: '#ffffff',
        fontFamily: 'GillSans',
        marginRight: 10,
        alignItems: 'flex-start',
    },
});

export default WelcomeScreen;
