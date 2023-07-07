import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Platform, StyleSheet, Image } from 'react-native';
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen() {
    const platform = Platform.OS;

    return (
        <Onboarding pages={
            [{
                backgroundColor: '#fff',
                title: 'Welcome',
                image: <Image source={require('../../assets/onboarding/frameOne.jpg')}/>,
                subtitle: 'to PodAI.',
            },
            {
                backgroundColor: '#fff',
                title: 'Welcome',
                image: <Image source={require('../../assets/onboarding/frameTwo.jpg')} />,
                subtitle: 'to PodAI.',
            },
                {
                    backgroundColor: '#fff',
                    title: 'Welcome',
                    subtitle: 'to PodAI.',
                    image: <Image source={require('../../assets/onboarding/frameThree.jpg')} />,
                }
            ]
        } />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f6f6',
        height: "100%",
        width: "100%",
    },
});
