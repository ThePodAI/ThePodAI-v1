import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./app/screens/introScreens/WelcomeScreen";
import SignUpScreen from "./app/screens/authentication/signUpScreen";
import LoginPage from "./app/screens/authentication/loginPage";
import ForgotPasswordScreen from "./app/screens/authentication/forgotPasswordScreen";

import CustomTabBar from "./app/screens/home/tabNavigator";
import ProfileScreen from "./app/screens/profile/profileScreen";
import ExploreScreen from "./app/screens/explore/exploreScreen";
import NotificationsScreen from "./app/screens/notifications/notificationsScreen";
import UserHomeScreen from "./app/screens/home/userHomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MainScreen() {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="Home"  component={UserHomeScreen} options={{headerShown: false}} />
            <Tab.Screen name="Explore" component={ExploreScreen}  options={{headerShown: false}}  />
            <Tab.Screen name="Notifications" component={NotificationsScreen}  options={{headerShown: false}}  />
            <Tab.Screen name="Profile" component={ProfileScreen}  options={{headerShown: false}}  />
        </Tab.Navigator>
    );
}
