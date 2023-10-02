import React, { useState } from "react";
import { Button, ScrollView, Text, StyleSheet, StatusBar } from "react-native";
import BottomNavigation from "./BottomNavigation";
import * as kjv from "../assets/assets/bibles/kjv_new.json";

export default function MainReader() {
  const bookTitles = {
    1: "Genesis",
    // add other numbers for each book
    2: "",
  };
  const [bookHeader, setBookHeader] = useState(""); // Initialize state for chapter content
  const [chapterContent, setChapterContent] = useState(""); // Initialize state for chapter content

  function fetchBibleContent(bookNumber, chapterNumber) {
    let jsonData = kjv;
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
      <Text style={readerStyles.header}>{bookHeader}</Text>
      <Text style={readerStyles.text}>{chapterContent}</Text>
      <BottomNavigation />
      <Button title="Genesis" onPress={() => fetchBibleContent(1, 1)} />
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
    color: "#fff",
    textAlign: "center",
  },
});
