import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Platform, StyleSheet } from 'react-native';

export default function HomeView() {
    // const [inputText, setInputText] = useState('');
    //
    // const handleSendPress = () => {
    //     console.log(inputText);
    // };
    const platform = Platform.OS;

    return (
        <SafeAreaView>
            <View>
                <StatusBar style="auto" />
                <Text>
                    {platform}
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f6f6',
        height: "100%",
        width: "100%",
    },
});
