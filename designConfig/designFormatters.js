import {StyleSheet} from "react-native";

export const textFormatting = StyleSheet.create({
    title: {
        fontSize: 35,
        fontFamily: 'Gill Sans',
        marginTop: 20,
    },
    fieldTitle: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        marginTop: 10,
        color: '#2dbe7d',
        marginBottom: 20,
    },
});

export const textBoxFormatting = StyleSheet.create({
    textBox: {
        height: "60%",
        width: "100%",
        borderColor: 'green',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    textInputStyle: {
        marginTop: 10,
        marginLeft: 10,
        height: '100%',
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontStyle: 'italic',
    }
});

export const viewContainersFormatting = StyleSheet.create({
        textViewContainer: {
        height: "60%",
        width: "auto",
        flexDirection: 'column',
        marginTop: '8%',
        // backgroundColor: '#2dbe7d',

    },
});