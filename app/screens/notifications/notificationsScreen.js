import * as React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {Icon} from "react-native-elements";

export default function Notifications({navigation}) {
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>This is a Notifications screen</Text>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});