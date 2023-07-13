import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Icon} from "react-native-elements";

export default function ExploreScreen({navigation}) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text>This is Explore Screen</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});