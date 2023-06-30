import HomeView from "./Screens/homeScreen";
import {SafeAreaView, StyleSheet, View} from "react-native";

export default function App() {
  return (

        <View style={styles.container}>

            <SafeAreaView style={styles.safeAreaStyle}>
            <HomeView/>
            </SafeAreaView>

        </View>
  );
}

 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f6f6',
        height: "100%",
        width: "100%",
    },
     safeAreaStyle: {
         marginLeft: 20,
         marginRight: 20,
     }
});

