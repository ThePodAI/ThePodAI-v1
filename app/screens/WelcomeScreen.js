import React from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { usePhoneNumber } from "./loginSignup";

function WelcomeScreen(props) {
    const handlePhoneNumber = () => {
        // Implement Google login functionality here
        console.log('Continuing with Phone Number...');
    };

    const handleEmail = () => {
        // Implement Apple login functionality here
        console.log('Continuing with Email Address...');
    };

    const handleCreateAccount = () => {
        // Implement Apple login functionality here
        console.log('Continuing with Account Creation...');
    };

    const handleSkip = () => {
        // Implement Apple login functionality here
        console.log('Skipping...');
    };

    return (


        // Main View
        <View style={styles.background}>

            {/* Top Image card*/}
            <View style={styles.topImageContainer}>
                    <Image style={styles.imageContainer} source={require('../assets/backgrounds/welcomeScreenImage.jpg')}></Image>
            </View>

            {/* Bottom card*/}
            <View style={styles.bottomContainer}>

                <Text style={styles.bottomContainerText}>Welcome</Text>
                <Text style={styles.bottomContainerText}>to PodAI.</Text>

           <View style={styles.buttonsContainer}>

                <TouchableOpacity style={styles.phoneContinueButton} onPress={handlePhoneNumber}>
                   <Text style={styles.loginButtonText}>Use Phone number</Text>
                </TouchableOpacity>

               <TouchableOpacity style={styles.emailContinueButton} onPress={handleEmail}>
                   <Text style={styles.emailContinueText}>Use Email address</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.loginInsteadButton} onPress={handleCreateAccount}>
                   <Text style={styles.loginInsteadText}>Already have an account? Login</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                   <Text style={styles.skipButtonText}>Skip</Text>
               </TouchableOpacity>



                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#000000',
        flexDirection: 'row',
    },
    topImageContainer: {
        backgroundColor: '#000000',
        position: 'absolute',
        top: '5%',
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: '90%',
        height: '90%',
    },

    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '60%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    bottomContainerText : {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#040404',
        left: '5%',
        top: '10%',
        fontFamily: 'Helvetica Neue',
    },

    buttonsContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '50%',
        backgroundColor: '#ffffff',
        top: '20%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },


    phoneContinueButton: {
        width: '90%',
        height: 50,
        backgroundColor: '#162470',
        borderRadius: 8,
        justifyContent: 'center',
    },
    emailContinueButton: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#47AA8E',
        borderRadius: 8,
    },
    loginInsteadButton: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        top: '5%',
    },

    skipButton: {
        width: '90%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#162470',
    },
    loginButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Helvetica Neue',
    },
    emailContinueText :{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
    },
    loginInsteadText :{
        fontSize: 18,
        // fontWeight: 'bold',
        color: '#162470',
        alignSelf: 'center',
        textDecorationLine: 'underline',
    },
    skipButtonText :{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#47aa8e',
        alignSelf: 'center',
        fontFamily: 'Helvetica Neue',
    },



});


export default WelcomeScreen;