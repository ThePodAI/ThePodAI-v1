import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Icon} from "react-native-elements";

export default function ExploreScreen({navigation}) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>This is a Explore screen</Text>
            </View>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="home" type="font-awesome" color="#ffffff" size={30} onPress={() => navigation.navigate('User Home')} />
                    <Text style={styles.ButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="compass" type="font-awesome" color="hotpink" size={30} onPress={() => navigation.navigate('Explore')} />
                    <Text style={styles.activeButtonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bell" type="font-awesome" color="#ffffff" size={30} onPress={() => navigation.navigate('Notifications')} />
                    <Text style={styles.ButtonText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name="user" type="font-awesome" color="#ffffff" size={30} onPress={() => navigation.navigate('Profile')}/>
                    <Text style={styles.ButtonText}>Profile</Text>
                </TouchableOpacity>
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

    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        height: 60,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 14,
        color: '#ffffff',
    },
    activeButtonText: {
        fontSize: 14,
        color: 'hotpink',
    },
});