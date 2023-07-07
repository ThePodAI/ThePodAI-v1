import React, {Keyboard, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from "react";
import {Icon} from "react-native-elements";

function UserHomeScreenView({navigation}){

    const [isTextInputActive, setTextInputActive] = useState(false);

    const handleTextInputFocus = () => {
        setTextInputActive(true);
    };

    const handleTextInputBlur = () => {
        setTextInputActive(false);
    };
    const handlePressOutsideInput = () => {
        Keyboard.dismiss();
        setTextInputActive(false);
    };

    return(
        // Bottom tab navigation UI design with 4 buttons (Home, Explore, App Settings, Profile)
        <TouchableWithoutFeedback onPress={handlePressOutsideInput}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <View style={styles.firstTopContainer}>

                        <Text style={styles.headingLabel}>The PodAI</Text>
                        <View style={[styles.textInput, isTextInputActive && styles.activeTextInput]}>
                            <TextInput style={styles.textInputBox} placeholder={"Enter your prompt"} onFocus={handleTextInputFocus} onBlur={handleTextInputBlur}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.continueButtonView}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.settingsContainer}>
                        <Text style={styles.settingsLabel}>Settings</Text>
                        {/*<Text>Hell Yeah!!! I'll implement settings later tonight!</Text>*/}

                    </View>

                </View>

                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="home" type="font-awesome" color="#ADE792" size={30} onPress={() => navigation.navigate('User Home')} />
                        <Text style={styles.activeButtonText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="compass" type="font-awesome" color="black" size={30} onPress={() => navigation.navigate('Explore')} />
                        <Text style={styles.buttonText}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="bell" type="font-awesome" color="black" size={30} onPress={() => navigation.navigate('Notifications')} />
                        <Text style={styles.buttonText}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="user" type="font-awesome" color="black" size={30} onPress={() => navigation.navigate('Profile')}/>
                        <Text style={styles.buttonText}>Profile</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    settingsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '90%',
        height: '45%',
        borderRadius: 5,
        shadowColor: '#344D67',
        shadowOffset: {width: 5, height: 2.5},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        height: "10%",
    },

    firstTopContainer: {
        paddingTop: '5%',
        height: '50%',
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        shadowColor: '#344D67',
        shadowOffset: {width: 5, height: 2.5},
        shadowOpacity: 0.09,
        shadowRadius: 2,
        elevation: 10,
    },

    headingLabel: {
        fontSize: 35,
        fontFamily: 'Futura',
        color: '#000',
        left: '10%',
        top: '5%',
    },
    settingsLabel: {
        fontSize: 25,
        fontFamily: 'Futura',
        color: '#444444',
        top: '5%',
    },

    textInput: {
        height: '30%',
        width: "80%",
        left: '10%',
        top: '10%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
        shadowColor: '#e7e7e7',
        shadowOffset: {width: -10, height: -5},
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 1,
    },
    activeTextInput: {
        borderColor: '#2dbe7d',
        borderWidth: 2,
    },
    textInputBox: {
        height: '90%',
        width: '90%',
        fontSize: 16,
        fontFamily: 'Gill Sans',
        backgroundColor: '#ffffff',
    },

    continueButtonView: {
        height: '15%',
        width: '40%',
        left: '10%',
        top: '15%',
        backgroundColor: '#344D67',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#e7e7e7',
        shadowOffset: {width: 5, height: 2.5},
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 10,

    },
    continueButtonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        color: '#ffffff',
    },


    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
    },
    activeButtonText: {
        fontSize: 14,
        color: '#ADE792',
    },
});

export default UserHomeScreenView;
