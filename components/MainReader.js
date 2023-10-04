import React, { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Modal,
  View,
} from "react-native";
import BottomNavigation from "./BottomNavigation";
import * as kjv from "../assets/assets/bibles/kjv_new.json";
import * as asv from "../assets/assets/bibles/asv_new.json";
import * as bookTitles from "../assets/assets/chapterKeys.json";

export default function MainReader() {
  const [bookHeader, setBookHeader] = useState(""); // Initialize state for chapter content
  const [chapterContent, setChapterContent] = useState(""); // Initialize state for chapter content
  const [currentTranslation, setCurrentTranslation] = useState(kjv); // Initlialize state for translation, default is KJV
  const [currentTranslationName, setCurrentTranslationName] = useState("KJV");
  const [currentChapterBook, setCurrentChapterBook] = useState(1);
  const [currentChapterState, setCurrentChapterState] = useState(1);
  const [showTranslationModal, setTranslationModalVisibility] = useState(false);

  useEffect(() => {
    renderInitalBibleChapter();
  }, []); // Empty dependency array means it will run only once on initial render

  function setTranslation(translation, translationName) {
    setCurrentTranslation(translation);
    setCurrentTranslationName(translationName.toUpperCase());
    openTranslationModal();
    fetchBibleContent(currentChapterBook, currentChapterState);
  }

  function fetchBibleContent(bookNumber, chapterNumber) {
    setCurrentChapterBook(bookNumber);
    setCurrentChapterState(chapterNumber);
    let jsonData = currentTranslation;
    let currentChapter = jsonData[bookNumber][chapterNumber];

    // Combine chapter content into a single string
    let chapterText = "";
    for (const verseNumber in currentChapter) {
      chapterText += `${verseNumber} ` + currentChapter[verseNumber] + "\n";
    }

    // Update the state with the chapter content
    setBookHeader(bookTitles.chapters[bookNumber].title);
    setChapterContent(chapterText);
  }

  function renderInitalBibleChapter() {
    // store the last viewed chapter as cached data then call upon that, or load a default John Chapter 1
    fetchBibleContent(43, 1);
  }

  function openTranslationModal() {
    setTranslationModalVisibility(!showTranslationModal);
  }

  return (
    <ScrollView style={readerStyles.scrollView}>
      <Modal
        transparent={true}
        animationType="slide" // Add animationType to control the modal animation
        style={readerStyles.modal}
        visible={showTranslationModal}
      >
        <View style={readerStyles.modalViewer}>
          <Text
            onPress={() => setTranslation(kjv, "KJV")}
            style={readerStyles.translationMenu}
          >
            King James Version KJV
          </Text>
          <Text
            onPress={() => setTranslation(asv, "ASV")}
            style={readerStyles.translationMenu}
          >
            American Standard Version ASV
          </Text>
          <Text
            onPress={() => openTranslationModal()}
            style={readerStyles.closeButton}
          >
            Close
          </Text>
        </View>
      </Modal>
      {/* <Button title="Genesis" onPress={() => fetchBibleContent(1, 1)} />
      <Button title="ASV" onPress={() => setTranslation(asv, "asv")} />
      <Button title="KJV" onPress={() => setTranslation(kjv, "kjv")} /> */}
      <Text
        onPress={() => openTranslationModal()}
        style={readerStyles.translation}
      >
        {currentTranslationName}
      </Text>
      <Text style={readerStyles.header}> {bookHeader} </Text>
      <Text style={readerStyles.chapterNumber}> {currentChapterState} </Text>
      <Text style={readerStyles.text}> {chapterContent} </Text>
      <BottomNavigation />
    </ScrollView>
  );
}

const readerStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "black",
    margin: 0,
    padding: 15,
    marginBottom: 100,
    paddingTop: 10,
    paddingTop: StatusBar.currentHeight,
  },
  translationMenu: {
    width: "100%",
    fontSize: 35,
    padding: 15,
    textAlign: "center",
    borderTopWidth: 5,
    borderBottomWidth: 5,
    color: "white",
  },
  modalViewer: {
    width: "100%",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    height: "100%",
  },
  modal: {
    width: "80%",
    height: "80%",
  },
  closeButton: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    position: "absolute",
    bottom: 15,
    backgroundColor: "#404040",
    padding: 5,
    borderRadius: 5,
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
    textAlign: "left",
  },
});
