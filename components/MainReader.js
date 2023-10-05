import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Modal,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BottomNavigation from "./BottomNavigation";
import * as kjv from "../assets/assets/bibles/kjv_new.json";
import * as asv from "../assets/assets/bibles/asv_new.json";
import * as bbe from "../assets/assets/bibles/bbe_new.json";
import * as web from "../assets/assets/bibles/web_new.json";
import * as ylt from "../assets/assets/bibles/ylt_new.json";
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

  function openTranslationInfo(translationName) {
    // select which translation from an OBJ and display information about that translation in a modal window
  }

  return (
    <ScrollView style={readerStyles.scrollView}>
      <Modal
        transparent={true}
        animationType="slide" // Add animationType to control the modal animation
        style={readerStyles.modal}
        visible={showTranslationModal}
      >
        <ScrollView style={readerStyles.modalViewer}>
          <Text style={readerStyles.versionsHeader}>
            <Text
              onPress={() => openTranslationModal()}
              style={readerStyles.closeButton}
            >
              <AntDesign name="arrowleft" size={34} color="white" />
            </Text>
            <Text style={readerStyles.versions}>Versions</Text>
          </Text>

          <Text
            onPress={() => setTranslation(kjv, "KJV")}
            style={readerStyles.translationMenu}
          >
            <Text style={readerStyles.translationName}>KJV</Text>
            {"\n"}
            <Text style={readerStyles.expandedTranslationName}>
              The King James Version
            </Text>
            <Feather
              name="info"
              size={24}
              style={readerStyles.infoIcons}
              color="white"
              onPress={() => openTranslationInfo("KJV")}
            />
          </Text>

          <Text
            onPress={() => setTranslation(asv, "ASV")}
            style={readerStyles.translationMenu}
          >
            <Text style={readerStyles.translationName}>ASV</Text>
            {"\n"}
            <Text style={readerStyles.expandedTranslationName}>
              The American Standard Version
            </Text>
            <Feather
              name="info"
              size={24}
              style={readerStyles.infoIcons}
              color="white"
              onPress={() => openTranslationInfo("KJV")}
            />
          </Text>

          <Text
            onPress={() => setTranslation(bbe, "BBE")}
            style={readerStyles.translationMenu}
          >
            <Text style={readerStyles.translationName}>BBE</Text>
            {"\n"}
            <Text style={readerStyles.expandedTranslationName}>
              The Bible in Basic English
            </Text>
            <Feather
              name="info"
              size={24}
              style={readerStyles.infoIcons}
              color="white"
              onPress={() => openTranslationInfo("BBE")}
            />
          </Text>

          <Text
            onPress={() => setTranslation(web, "WEB")}
            style={readerStyles.translationMenu}
          >
            <Text style={readerStyles.translationName}>WEB</Text>
            {"\n"}
            <Text style={readerStyles.expandedTranslationName}>
              The Word English Bible
            </Text>
            <Feather
              name="info"
              size={24}
              style={readerStyles.infoIcons}
              color="white"
              onPress={() => openTranslationInfo("WEB")}
            />
          </Text>

          <Text
            onPress={() => setTranslation(ylt, "YLT")}
            style={readerStyles.translationMenu}
          >
            <Text style={readerStyles.translationName}>YLT</Text>
            {"\n"}
            <Text style={readerStyles.expandedTranslationName}>
              Young's Literal Translation
            </Text>
            <Feather
              name="info"
              size={24}
              style={readerStyles.infoIcons}
              color="white"
              onPress={() => openTranslationInfo("YLT")}
            />
          </Text>
        </ScrollView>
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
  versionsHeader: {
    alignItems: "center", // Center text horizontally
    justifyContent: "center", // Center text vertically
    flex: 1, // Add flex to center content vertically
    flexDirection: "row", // Add flexDirection to align items horizontally
  },
  informationIcon: {
    backgroundColor: "white",
    borderWidth: 5,
    textAlign: "right",
    borderColor: "red",
  },
  translationName: {
    fontSize: 25,
    fontWeight: "bold",
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
    textAlign: "left",
  },
});
