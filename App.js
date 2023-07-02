import HomeView from "./screens/homeScreen";
import {SafeAreaView, StyleSheet, View, Dimensions} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (

        <WelcomeScreen/>
  );
}

 const styles = StyleSheet.create({
});


