import React, { useEffect, useState, useRef } from "react";
import {
    StyleSheet,
    StatusBar,
    Text,
    View,
    useWindowDimensions,
    Alert,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import kjv from "../assets/assets/bibles/kjv_new.json";
import { getBook } from "../state/reducers/booksReducer";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Reader, useReader } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system"
import * as FileSystem from "expo-file-system"
import { useDispatch } from "react-redux";
import * as DocumentPicker from "expo-document-picker"



export default function MainReader() {
    const { addMark, getCurrentLocation } = useReader()
    const [bookUri, setBookUri] = useState<string | null>(null)
    const book = useAppSelector(state => state.book.bookUrl)
    const [booksrc, setBookSrc] = useState<any>()
    //  -------------------------------------------------------------------------------------
    //  |              TO DO:                                                               |
    //  | 1.) Fetch Book from Resolver, need to resolve promise to pass File System String  |
    //  | 2.) Investigate why onSelected is not firing when text is selected                |   
    //  |                                                                                   |   
    //  |                                                                                   |
    //  |                                                                                   |
    //  -------------------------------------------------------------------------------------
    async function pickBook() {
        const fileCopyUri = await DocumentPicker.getDocumentAsync()
        console.log(fileCopyUri.assets[0].uri)
        const bookSrc = await FileSystem.readAsStringAsync(fileCopyUri.assets[0].uri, { encoding: "base64" })
        setBookSrc(bookSrc)
        setBookUri(fileCopyUri.assets[0].uri)


    }
    const { height, width } = useWindowDimensions()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBook("https://s3.amazonaws.com/moby-dick/OPS/package.opf"))
    }, [])

    if (booksrc) {
        return (
            <View style={{ marginTop: 25 }}>
                {/*@ts-ignore*/}
                <Reader
                    src={booksrc}
                    height={height * 0.9}
                    width={width}
                    fileSystem={useFileSystem}
                    onPress={() => {
                        const location = getCurrentLocation()
                        addMark("highlight", location.start.cfi)

                    }}
                    onSelected={(text) => {
                        Alert.alert("Some Text has been Selected")
                    }}

                >

                </Reader>
            </View>
        )
    } else {
        return (
            <SafeAreaView>
                <TouchableOpacity onPress={() => pickBook()}>
                    <Text style={{ display: "flex", alignSelf: "center", justifyContent: "center" }}>Pick Book</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

}



const readerStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "black",
        margin: 0,
        padding: 15,
        paddingTop: 10,
    },
    versionsHeader: {
        alignItems: "center", // Center text horizontally
        justifyContent: "center", // Center text vertically
        flex: 1, // Add flex to center content vertically
        flexDirection: "row", // Add flexDirection to align items horizontally
    },
    bookMenuHeader: {
        paddingBottom: 35,
    },
    bookMenuTitle: {
        color: "white",
        fontSize: 35,
        paddingBottom: 25,
    },
    infoFlex: {
        flex: 1, // Add flex to center content vertically
        flexDirection: "row", // Add flexDirection to align items horizontally
        alignItems: "center", // Center text horizontally
        justifyContent: "center", // Center text vertically
    },
    infoIcons: {
        textAlign: "right",
        alignSelf: "flex-end",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        justifyContent: "center",
        flexWrap: "wrap",
    },
    bookTitles: {
        color: "white",
        fontSize: 25,
        paddingBottom: 55,
        lineHeight: 25,
    },
    bookMenuScrollViewer: {
        flex: 1,
        backgroundColor: "black",
        borderRadius: 5,
        margin: 0,
        paddingBottom: 155,
        paddingHorizontal: 25,
    },
    chapterNumbers: {
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "gray",
        borderRadius: 5,
        width: 45,
        height: 45,
        borderWidth: 2,
        textAlign: "center",
        textAlignVertical: "center",
        borderColor: "black",
        fontSize: 20,
    },
    translationName: {
        fontSize: 25,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
    },
    versions: {
        color: "white",
        textAlign: "right",
        fontWeight: "bold",
        fontSize: 32,
    },
    expandedTranslationName: {
        fontSize: 15,
    },
    translationMenu: {
        width: "100%",
        justifyContent: "space-between",
        fontSize: 25,
        padding: 15,
        color: "white",
    },
    modalViewer: {
        flex: 1,
        backgroundColor: "black",
        borderRadius: 5,
        margin: 0,
        padding: 25,
        paddingTop: StatusBar.currentHeight,
    },
    modal: {
        width: "80%",
        height: "80%",
    },
    closeButton: {
        marginLeft: "auto", // Move the button to the right
        marginRight: 10, // Adjust the right margin as needed
        marginTop: StatusBar.currentHeight + 5, // Adjust the top margin as needed
    },
    chapterNumber: {
        fontSize: 85,
        color: "#fff",
        textAlign: "center",
    },
    header: {
        fontSize: 25,
        color: "#bababa",
        fontWeight: "bold",
        margin: 15,
        textAlign: "center",
    },
    translation: {
        borderRadius: 500,
        backgroundColor: "#404040",
        top: 0,
        flex: 1,
        color: "whitesmoke",
        fontWeight: "bold",
        width: "15%",
        textAlign: "center",
        fontSize: 15,
        padding: 5,
    },
    text: {
        fontSize: 25,
        lineHeight: 40,
        color: "#fff",
        marginBottom: 100,
        textAlign: "left",
    },
});
