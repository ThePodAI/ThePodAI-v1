import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import appData from '../../data/appData.json';

export const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.image} source={require('../../assets/backgrounds/welcomeScreenImage.jpg')} />
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>{appData.appLabels.PodAILabels.appTagline}</Text>

                <View style={styles.taglineContainer}>
                    <Text style={styles.tagline}>{appData.appLabels.catchyText.promptAway}</Text>
                    <Text style={styles.tagline}>{appData.appLabels.catchyText.ownAIPodcast}</Text>
                </View>

                <View style={styles.taglineContainer2}>
                    <Text style={styles.tagline}>{appData.appLabels.catchyText.listenAnywhere}</Text>
                    <Text style={styles.tagline}>{appData.appLabels.catchyText.soundsHuman}</Text>
                </View>

                <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                    <Ionicons name="chevron-forward-circle-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
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
        fontSize: 40,
        color: '#040404',
        fontFamily: 'Futura-Medium',
        marginBottom: 10,
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 0,
    },
    getStartedButtonText: {
        fontSize: 35,
        color: '#000000',
        fontFamily: 'GillSans',
        marginRight: 10,
        alignItems: 'flex-start',
    },
});

export default WelcomeScreen;
