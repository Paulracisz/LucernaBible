import React, { useState } from "react";
import { Button, ScrollView, Text, StyleSheet, StatusBar } from "react-native";
import BottomNavigation from "./BottomNavigation";
import * as kjv from "../assets/assets/bibles/kjv_new.json";

export default function MainReader() {
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
    setChapterContent(chapterText);
  }

  return (
    <ScrollView style={readerStyles.scrollView}>
      <Text style={readerStyles.text}>{chapterContent}</Text>
      <Button title="Genesis" onPress={() => fetchBibleContent(1, 1)} />
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
    paddingTop: 10,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  },
});
