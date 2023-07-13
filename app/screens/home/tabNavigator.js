import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

function CustomTabBar({navigation}) {
    const route = useRoute();

    const isActiveScreen = (screenName) => {
        return route.name === screenName;
    };

    return (
        <SafeAreaView style={styles.parentContainer}>
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Home')}>
                    <Ionicons
                        name={isActiveScreen('Home') ? 'home' : 'home-outline'}
                        size={24}
                        color={isActiveScreen('Home') ? 'green' : 'black'}
                    />
                    <Text style={styles.tabLabel}>Home</Text>
                    {isActiveScreen('Home') && <Text style={styles.activeTabLabel}>Home</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Explore')}>
                    <Ionicons
                        name={isActiveScreen('Explore') ? 'search' : 'search-outline'}
                        size={24}
                        color={isActiveScreen('Explore') ? 'green' : 'black'}
                    />
                    <Text style={styles.tabLabel}>Explore</Text>
                    {isActiveScreen('Explore') && <Text style={styles.activeTabLabel}>Explore</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Notifications')}>
                    <Ionicons
                        name={isActiveScreen('Notifications') ? 'notifications' : 'notifications-outline'}
                        size={24}
                        color={isActiveScreen('Notifications') ? 'green' : 'black'}
                    />
                    <Text style={styles.tabLabel}>Notifications</Text>
                    {isActiveScreen('Notifications') && <Text style={styles.activeTabLabel}>Notifications</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Profile')}>
                    <Ionicons
                        name={isActiveScreen('Profile') ? 'person' : 'person-outline'}
                        size={24}
                        color={isActiveScreen('Profile') ? 'green' : 'black'}
                    />
                    <Text style={styles.tabLabel}>Profile</Text>
                    {isActiveScreen('Profile') && <Text style={styles.activeTabLabel}>Profile</Text>}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 7,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#ffffff',
    },
    tabLabel: {
        fontSize: 12,
        color: 'black',
    },
    activeTabLabel: {
        color: 'green',
    },
});

export default CustomTabBar;
