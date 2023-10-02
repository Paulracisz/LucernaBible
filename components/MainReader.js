import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, StyleSheet, StatusBar } from "react-native";
import BottomNavigation from "./BottomNavigation";
import * as kjv from "../assets/assets/bibles/kjv_new.json";
import * as asv from "../assets/assets/bibles/asv_new.json";

export default function MainReader() {
  const bookTitles = {
    1: "Genesis",
    2: "Exodus",
    3: "Leviticus",
    4: "Numbers",
    5: "Deuteronomy",
    6: "Joshua",
    7: "Judges",
    8: "Ruth",
    9: "1 Samuel",
    10: "2 Samuel",
    11: "1 Kings",
    12: "2 Kings",
    13: "1 Chronicles",
    14: "2 Chronicles",
    15: "Ezra",
    16: "Nehemiah",
    17: "Esther",
    18: "Job",
    19: "Psalms",
    20: "Proverbs",
    21: "Ecclesiastes",
    22: "Song of Solomon",
    23: "Isaiah",
    24: "Jeremiah",
    25: "Lamentations",
    26: "Ezekiel",
    27: "Daniel",
    28: "Hosea",
    29: "Joel",
    30: "Amos",
    31: "Obadiah",
    32: "Jonah",
    33: "Micah",
    34: "Nahum",
    35: "Habakkuk",
    36: "Zephaniah",
    37: "Haggai",
    38: "Zechariah",
    39: "Malachi",
    40: "Matthew",
    41: "Mark",
    42: "Luke",
    43: "John",
    44: "Acts",
    45: "Romans",
    46: "1 Corinthians",
    47: "2 Corinthians",
    48: "Galatians",
    49: "Ephesians",
    50: "Philippians",
    51: "Colossians",
    52: "1 Thessalonians",
    53: "2 Thessalonians",
    54: "1 Timothy",
    55: "2 Timothy",
    56: "Titus",
    57: "Philemon",
    58: "Hebrews",
    59: "James",
    60: "1 Peter",
    61: "2 Peter",
    62: "1 John",
    63: "2 John",
    64: "3 John",
    65: "Jude",
    66: "Revelation",
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
