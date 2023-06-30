import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import {textFormatting, textBoxFormatting} from "./designConfig/designFormatters";


export default function App() {
  return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={textFormatting.title}>PodAI</Text>
            <StatusBar style="auto" />

            <View style={styles.textViewContainer}>
                <TextInput style={textBoxFormatting.textBox} placeholder="Enter your prompt here"/>
            </View>

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
      marginLeft: 20,
  },
  textViewContainer: {
      height: "45%",
      width: "85%",
      flexDirection: 'row',
      marginTop: '25%',
      backgroundColor: '#2dbe7d',
  },
});


