import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import WelcomeScreen from "./app/screens/introScreens/WelcomeScreen";
import SignUpScreen from "./app/screens/authentication/signUpScreen";
import ForgotPasswordScreen from "./app/screens/authentication/forgotPasswordScreen";
import HomeScreen from "./app/screens/home/homeScreen";
import UserHomeScreen from "./app/screens/home/userHomeScreen";
import LoginPage from "./app/screens/authentication/loginPage";

import profileScreen from "./app/screens/profile/profileScreen";
import exploreScreen from "./app/screens/explore/exploreScreen";
import Notifications from "./app/screens/notifications/notificationsScreen";



const AppStack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
            <Stack.Screen name={"Sign Up"} component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"Forgot Password"} component={ForgotPasswordScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"Home"} component={HomeScreen} options={{headerShown: false}}/>

            <Stack.Screen name={"User Home"} component={UserHomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"Notifications"} component={Notifications} options={{headerShown: false}}/>
            <Stack.Screen name={"Profile"} component={profileScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"Explore"} component={exploreScreen} options={{headerShown: false}}/>

          </Stack.Navigator>
        </NavigationContainer>
  );
}


