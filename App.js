import {SafeAreaView, StyleSheet, View, Dimensions} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../AlphaV1/app/screens/onboardingScreen";
import WelcomeScreen from "../AlphaV1/app/screens/WelcomeScreen"

const AppStack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="PodAI" component={OnboardingScreen} />
                <AppStack.Screen name="Welcome" component={WelcomeScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
  );
}


