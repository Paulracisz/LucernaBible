import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainReader from "./components/MainReader";
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Reader, ReaderProvider } from "@epubjs-react-native/core"
import { Formats } from "./components/BookPicker"

export default function App() {
    return (
        <Provider store={store}>
            <ReaderProvider>
                <MainReader />
            </ReaderProvider>
        </Provider>
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
