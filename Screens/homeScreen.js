import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import InputBar from "@paraboly/react-native-input-bar";
import { textFormatting, textBoxFormatting, viewContainersFormatting } from "../designConfig/designFormatters";

export default function HomeView() {
    const [inputText, setInputText] = useState('');

    const handleSendPress = () => {
        console.log(inputText);
    };

    return (
        <SafeAreaView>
            <View>
                <Text style={textFormatting.title}>PodAI</Text>
                <StatusBar style="auto" />

                <View style={viewContainersFormatting.textViewContainer}>
                    <Text style={textFormatting.fieldTitle}>Prompt Area</Text>
                    <InputBar
                        style={textBoxFormatting.textBox}
                        multiline={true}
                        disableSecondaryIcon={true}
                        placeholder="Enter your prompt here..."
                        placeholderTextColor="#a4a4a4"
                        onChangeText={setInputText}
                        value={inputText}
                        onSendPress={handleSendPress}
                        sendIconImageSource={require('../assets/send.png')}
                        textAlignVertical={'top'}
                        verticalAlign={'top'}
                        textInputStyle={{...textBoxFormatting.textInputStyle}}
                        enablesReturnKeyAutomatically={true}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}
