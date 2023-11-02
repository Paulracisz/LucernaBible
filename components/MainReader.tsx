import React, { useEffect, useState, useRef } from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    StatusBar,
    Modal,
    View,
    useWindowDimensions,
} from "react-native";
import kjv from "../assets/assets/bibles/kjv_new.json";
import * as asv from "../assets/assets/bibles/asv_new.json";
import * as bbe from "../assets/assets/bibles/bbe_new.json";
import * as web from "../assets/assets/bibles/web_new.json";
import * as ylt from "../assets/assets/bibles/ylt_new.json";
import * as bookTitles from "../assets/assets/chapterKeys.json";
import { getBook } from "../state/reducers/booksReducer";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Reader } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system"


export default function MainReader() {
    const [bookHeader, setBookHeader] = useState(""); // Initialize state for chapter content
    const [chapterContent, setChapterContent] = useState(""); // Initialize state for chapter content
    const [currentTranslation, setCurrentTranslation] = useState(kjv); // Initlialize state for translation, default is KJV
    const [currentTranslationName, setCurrentTranslationName] = useState("KJV");
    const [currentChapterBook, setCurrentChapterBook] = useState(1);
    const [currentChapterState, setCurrentChapterState] = useState(1);
    const [showTranslationModal, setTranslationModalVisibility] = useState(false);
    const [showBookMenu, setBookMenuVisibility] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const scrollViewRef = useRef(); // Create a ref for the main ScrollView
    //    const book = useAppSelector((state) => state.book.bookUrl)
    const book = "../EPUBbooks/pg10-images-3.epub"
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBook("../EPUBbooks/pg10-images-3.epub"))
        console.log(book)
    }, [])
    const { height, width } = useWindowDimensions()


    //  const bibleBooks = [
    //      "Genesis",
    //      "Exodus",
    //      "Leviticus",
    //      "Numbers",
    //      "Deuteronomy",
    //      "Joshua",
    //      "Judges",
    //      "Ruth",
    //      "1 Samuel",
    //      "2 Samuel",
    //      "1 Kings",
    //      "2 Kings",
    //      "1 Chronicles",
    //      "2 Chronicles",
    //      "Ezra",
    //      "Nehemiah",
    //      "Esther",
    //      "Job",
    //      "Psalms",
    //      "Proverbs",
    //      "Ecclesiastes",
    //      "Song of Solomon",
    //      "Isaiah",
    //      "Jeremiah",
    //      "Lamentations",
    //      "Ezekiel",
    //      "Daniel",
    //      "Hosea",
    //      "Joel",
    //      "Amos",
    //      "Obadiah",
    //      "Jonah",
    //      "Micah",
    //      "Nahum",
    //      "Habakkuk",
    //      "Zephaniah",
    //      "Haggai",
    //      "Zechariah",
    //      "Malachi",
    //      "Matthew",
    //      "Mark",
    //      "Luke",
    //      "John",
    //      "Acts",
    //      "Romans",
    //      "1 Corinthians",
    //      "2 Corinthians",
    //      "Galatians",
    //      "Ephesians",
    //      "Philippians",
    //      "Colossians",
    //      "1 Thessalonians",
    //      "2 Thessalonians",
    //      "1 Timothy",
    //      "2 Timothy",
    //      "Titus",
    //      "Philemon",
    //      "Hebrews",
    //      "James",
    //      "1 Peter",
    //      "2 Peter",
    //      "1 John",
    //      "2 John",
    //      "3 John",
    //      "Jude",
    //      "Revelation",
    //  ];

    //  useEffect(() => {
    //      renderInitalBibleChapter();
    //  }, []); // Empty dependency array means it will run only once on initial render

    //  useEffect(() => {
    //      // This code will run whenever currentTranslation changes.
    //      fetchBibleContent(currentChapterBook, currentChapterState);
    //  }, [currentTranslation]); // Depend on currentTranslation

    //  function setTranslation(translation, translationName) {
    //      setCurrentTranslation(translation);
    //      setCurrentTranslationName(translationName.toUpperCase());
    //      openTranslationModal();
    //      fetchBibleContent(currentChapterBook, currentChapterState);
    //  }

    //  function fetchBibleContent(bookNumber, chapterNumber) {
    //      setCurrentChapterBook(bookNumber);
    //      setCurrentChapterState(chapterNumber);
    //      let jsonData = currentTranslation;
    //      let currentChapter = jsonData[bookNumber][chapterNumber];

    //      // Combine chapter content into a single string
    //      let chapterText = "";
    //      for (const verseNumber in currentChapter) {
    //          chapterText += `${verseNumber} ` + currentChapter[verseNumber] + "\n";
    //      }

    //      // Update the state with the chapter content
    //      setBookHeader(bookTitles.chapters[bookNumber].title);
    //      setChapterContent(chapterText);
    //      // Save the current book and chapter
    //      _saveCurrentChapter(bookNumber, chapterNumber);
    //  }

    //  function renderInitalBibleChapter() {
    //      // Retrieve the last viewed chapter from AsyncStorage
    //      _retrieveCurrentChapter().then((lastChapter) => {
    //          if (lastChapter) {
    //              const { bookNumber, chapterNumber } = lastChapter;
    //              fetchBibleContent(bookNumber, chapterNumber);
    //          } else {
    //              // If there is no last viewed chapter, load a default chapter (e.g., John 1)
    //              fetchBibleContent(43, 1);
    //          }
    //      });
    //  }

    //  function openTranslationModal() {
    //      setTranslationModalVisibility(!showTranslationModal);
    //  }

    //  function incrementChapter() {
    //      // check if the current chapter is not the last chapter in the entire bible
    //      if (currentChapterBook == 66 && currentChapterState == 22) {
    //          return null;
    //      }
    //      // Check if the current chapter is not the last chapter in the current book
    //      if (
    //          currentChapterState <
    //          Object.keys(currentTranslation[currentChapterBook]).length
    //      ) {
    //          // Increment the chapter number
    //          let newChapterNumber = parseInt(currentChapterState) + 1;
    //          // Fetch the content for the new chapter
    //          fetchBibleContent(currentChapterBook, newChapterNumber);
    //      } else {
    //          // If it is the first chapter in the current book, handle this case
    //          // by moving to the previous book.

    //          const newBook = currentChapterBook + 1;
    //          // Fetch the content for the new chapter
    //          fetchBibleContent(newBook, 1);
    //          // Scroll to the top
    //      }
    //      if (scrollViewRef.current) {
    //          scrollViewRef.current.scrollTo({ y: 0, animated: true });
    //      }
    //  }

    //  function decrementChapter() {
    //      // check if the current chapter is not the first chapter in the entire bible
    //      if (currentChapterBook == 1 && currentChapterState == 1) {
    //          return null;
    //      }
    //      // Check if the current chapter is not the first chapter in the current book
    //      if (currentChapterState > 1) {
    //          // Decrement the chapter number
    //          const newChapterNumber = currentChapterState - 1;

    //          // Fetch the content for the new chapter
    //          fetchBibleContent(currentChapterBook, newChapterNumber);
    //      } else {
    //          // If it is the first chapter in the current book, handle this case
    //          // by moving to the previous book.
    //          const newBook = currentChapterBook - 1;
    //          // Fetch the content for the new chapter
    //          fetchBibleContent(
    //              newBook,
    //              Object.keys(currentTranslation[newBook]).length
    //          );
    //      }
    //      if (scrollViewRef.current) {
    //          scrollViewRef.current.scrollTo({ y: 0, animated: true });
    //      }
    //  }

    //  function openBookMenu() {
    //      // open modal for book and chapter selection from nav bar
    //      setBookMenuVisibility(!showBookMenu);
    //  }

    //  function selectChapter(bookNumber, chapterNumber) {
    //      // Fetch the content for the selected chapter
    //      fetchBibleContent(bookNumber, chapterNumber);
    //      // Close the chapter menu
    //      openBookMenu(false);
    //  }

    //  function renderChapterNumbers(bookName) {
    //      if (selectedBook === bookName) {
    //          const chapterNumbers = Object.keys(currentTranslation[bookName]);

    //          return (
    //              <View style={readerStyles.container}>
    //                  {chapterNumbers.map((chapterNumber) => (
    //                      <Text
    //                          key={chapterNumber}
    //                          onPress={() => selectChapter(bookName, chapterNumber)}
    //                          style={readerStyles.chapterNumbers}
    //                      >
    //                          {chapterNumber}
    //                      </Text>
    //                  ))}
    //              </View>
    //          );
    //      }
    //      return null;
    //  }

    //  function openTranslationInfo(translationName) {
    //      // select which translation from an OBJ and display information about that translation in a modal window
    //  }

    //  async function _saveCurrentChapter(bookNumber, chapterNumber) {
    //      const dataToStore = JSON.stringify({ bookNumber, chapterNumber });
    //      try {
    //          await AsyncStorage.setItem("currentChapter", dataToStore);
    //      } catch (error) {
    //          console.error("Error saving data: ", error);
    //          // Handle the error appropriately (e.g., show an error message to the user)
    //      }
    //  }

    //  async function _retrieveCurrentChapter() {
    //      try {
    //          const value = await AsyncStorage.getItem("currentChapter");
    //          if (value !== null) {
    //              // Check if the retrieved value is valid JSON before parsing
    //              const parsedValue = JSON.parse(value);
    //              return parsedValue;
    //          }
    //      } catch (error) {
    //          // Handle errors appropriately
    //          console.error("Error retrieving data:", error);
    //      }

    //      // If no valid data was found or there was an error, return a default value
    //      return null;
    //  }

    //    return (
    //        <>
    //            <ScrollView ref={scrollViewRef} style={readerStyles.scrollView}>
    //                <Modal
    //                    transparent={true}
    //                    animationType="slide" // Add animationType to control the modal animation
    //                    style={readerStyles.modal}
    //                    visible={showTranslationModal}
    //                >
    //                    <ScrollView style={readerStyles.modalViewer}>
    //                        <Text style={readerStyles.versionsHeader}>
    //                            <Text
    //                                onPress={() => openTranslationModal()}
    //                                style={readerStyles.closeButton}
    //                            >
    //                                <AntDesign name="arrowleft" size={34} color="white" />
    //                            </Text>
    //                            <Text style={readerStyles.versions}>Versions</Text>
    //                        </Text>
    //
    //                        <Text
    //                            onPress={() => setTranslation(kjv, "KJV")}
    //                            style={readerStyles.translationMenu}
    //                        >
    //                            <Text style={readerStyles.infoFlex}>
    //                                <Text style={readerStyles.translationName}>KJV</Text>
    //                                {"\n"}
    //                                <Text style={readerStyles.expandedTranslationName}>
    //                                    The King James Version
    //                                </Text>
    //                                <Feather
    //                                    name="info"
    //                                    size={24}
    //                                    style={readerStyles.infoIcons}
    //                                    color="white"
    //                                    onPress={() => openTranslationInfo("KJV")}
    //                                />
    //                            </Text>
    //                        </Text>
    //
    //                        <Text
    //                            onPress={() => setTranslation(asv, "ASV")}
    //                            style={readerStyles.translationMenu}
    //                        >
    //                            <Text style={readerStyles.infoFlex}>
    //                                <Text style={readerStyles.translationName}>ASV</Text>
    //                                {"\n"}
    //                                <Text style={readerStyles.expandedTranslationName}>
    //                                    The American Standard Version
    //                                </Text>
    //                                <Feather
    //                                    name="info"
    //                                    size={24}
    //                                    style={readerStyles.infoIcons}
    //                                    color="white"
    //                                    onPress={() => openTranslationInfo("KJV")}
    //                                />
    //                            </Text>
    //                        </Text>
    //
    //                        <Text
    //                            onPress={() => setTranslation(bbe, "BBE")}
    //                            style={readerStyles.translationMenu}
    //                        >
    //                            <Text style={readerStyles.infoFlex}>
    //                                <Text style={readerStyles.translationName}>BBE</Text>
    //                                {"\n"}
    //                                <Text style={readerStyles.expandedTranslationName}>
    //                                    The Bible in Basic English
    //                                </Text>
    //                                <Feather
    //                                    name="info"
    //                                    size={24}
    //                                    style={readerStyles.infoIcons}
    //                                    color="white"
    //                                    onPress={() => openTranslationInfo("BBE")}
    //                                />
    //                            </Text>
    //                        </Text>
    //
    //                        <Text
    //                            onPress={() => setTranslation(web, "WEB")}
    //                            style={readerStyles.translationMenu}
    //                        >
    //                            <Text style={readerStyles.infoFlex}>
    //                                <Text style={readerStyles.translationName}>WEB</Text>
    //                                {"\n"}
    //                                <Text style={readerStyles.expandedTranslationName}>
    //                                    The Word English Bible
    //                                </Text>
    //                                <Feather
    //                                    name="info"
    //                                    size={24}
    //                                    style={readerStyles.infoIcons}
    //                                    color="white"
    //                                    onPress={() => openTranslationInfo("WEB")}
    //                                />
    //                            </Text>
    //                        </Text>
    //
    //                        <Text
    //                            onPress={() => setTranslation(ylt, "YLT")}
    //                            style={readerStyles.translationMenu}
    //                        >
    //                            <Text style={readerStyles.translationName}>YLT</Text>
    //                            {"\n"}
    //                            <Text style={readerStyles.infoFlex}>
    //                                <Text style={readerStyles.expandedTranslationName}>
    //                                    Young's Literal Translation
    //                                </Text>
    //                                <Feather
    //                                    name="info"
    //                                    size={24}
    //                                    style={readerStyles.infoIcons}
    //                                    color="white"
    //                                    onPress={() => openTranslationInfo("YLT")}
    //                                />
    //                            </Text>
    //                        </Text>
    //                    </ScrollView>
    //                </Modal>
    //                <Modal
    //                    transparent={true}
    //                    animationType="slide"
    //                    style={readerStyles.modal}
    //                    visible={showBookMenu}
    //                >
    //                    <ScrollView style={readerStyles.bookMenuScrollViewer}>
    //                        <Text style={readerStyles.bookMenuHeader}>
    //                            <Text
    //                                onPress={() => openBookMenu()}
    //                                style={readerStyles.closeButton}
    //                            >
    //                                <AntDesign
    //                                    style={readerStyles.bookMenuArrow}
    //                                    name="arrowleft"
    //                                    size={34}
    //                                    color="white"
    //                                />
    //                            </Text>
    //                            <Text style={readerStyles.bookMenuTitle}>Books</Text>
    //                        </Text>
    //                        {/* Conditional rendering for chapter numbers */}
    //                        {showBookMenu && (
    //                            <>
    //                                {bibleBooks.map((bookName, bookIndex) => (
    //                                    <View key={bookIndex}>
    //                                        <Text
    //                                            onPress={() => setSelectedBook(bookIndex + 1)}
    //                                            style={readerStyles.bookTitles}
    //                                        >
    //                                            {bookName}
    //                                        </Text>
    //                                        {renderChapterNumbers(bookIndex + 1)}
    //                                    </View>
    //                                ))}
    //                            </>
    //                        )}
    //                    </ScrollView>
    //                </Modal>
    //                <Text
    //                    onPress={() => openTranslationModal()}
    //                    style={readerStyles.translation}
    //                >
    //                    {currentTranslationName}
    //                </Text>
    //                <Text style={readerStyles.header}> {bookHeader} </Text>
    //                <Text style={readerStyles.chapterNumber}> {currentChapterState} </Text>
    //                <Text style={readerStyles.text}> {chapterContent} </Text>
    //            </ScrollView>
    //
    //            <BottomNavigation
    //                bookHeader={bookHeader}
    //                currentChapterState={currentChapterState}
    //                incrementChapter={incrementChapter}
    //                decrementChapter={decrementChapter}
    //                openBookMenu={openBookMenu}
    //            />
    //        </>
    //    );
    //}
    return (
        <View>
            {/*@ts-ignore*/}
            <Reader
                src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
                height={height}
                width={width}
                fileSystem={useFileSystem}
            >

            </Reader>
        </View>
    )

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
