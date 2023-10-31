import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainReader from "./components/MainReader";

export default function App() {
    return (
        <View style={styles.container} >
            <MainReader />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4f4d4d",
        alignItems: "center",
        justifyContent: "center",
    },
});
