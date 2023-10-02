import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, StyleSheet, StatusBar } from "react-native";
import BottomNavigation from "./BottomNavigation";
import * as kjv from "../assets/assets/bibles/kjv_new.json";
import * as asv from "../assets/assets/bibles/asv_new.json";

export default function MainReader() {
  const bookTitles = {
    1: "Genesis",
    // add other numbers for each book
    2: "",
  };
  const [bookHeader, setBookHeader] = useState(""); // Initialize state for chapter content
  const [chapterContent, setChapterContent] = useState(""); // Initialize state for chapter content
  const [currentTranslation, setCurrentTranslation] = useState(kjv); // Initlialize state for translation, default is KJV
  const [currentTranslationName, setCurrentTranslationName] = useState("kjv");
  const [currentChapterBook, setCurrentChapterBook] = useState(1);
  const [currentChapterState, setCurrentChapterState] = useState(1);

  function setTranslation(translation, translationName) {
    setCurrentTranslation(translation);
    setCurrentTranslationName(translationName);
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
    setBookHeader(bookTitles[bookNumber] + "\n" + chapterNumber);
    setChapterContent(chapterText);
  }

  return (
    <ScrollView style={readerStyles.scrollView}>
      <Button title="Genesis" onPress={() => fetchBibleContent(1, 1)} />
      <Button title="ASV" onPress={() => setTranslation(asv, "asv")} />
      <Button title="KJV" onPress={() => setTranslation(kjv, "kjv")} />
      <Text style={readerStyles.header}>{currentTranslationName}</Text>
      <Text style={readerStyles.header}>{bookHeader}</Text>
      <Text style={readerStyles.text}>{chapterContent}</Text>
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
  header: {
    fontSize: 55,
    margin: 15,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    lineHeight: 40,
    color: "#fff",
    textAlign: "left",
  },
});
