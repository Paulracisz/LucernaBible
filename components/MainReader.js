import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomNavigation from "./BottomNavigation";
import GenesisJSONFileContents from "../assets/jsonBibleBooks/Genesis.json";

export default function MainReader() {
  // import all books, or find another dynamic way that isn't .fetch
  // by book name as the param, call function and get contents of JSON file
  // turn JSON file into readable text, and update an HTML DOM component with the text.
  // create another param for the chapter, and only display the content of that chapter.
  // ensure that the template is a scrollable view, that allows the user to scroll through the entire chapter.
  // create arrows in the nav bar, and update the "hello world" text with the chapter name.
  // the arrow in the nav bar should go to the next or previous chapter. If it is the first chapter go to the previous book. If the book is Genesis...
  // ...don't render the left arrow.
  // eventually add the ability to jump to verses not just chapters.
  // save the chapter and verse so the next time the app opens, it opens on that chapter and verse.
  // create navigation menu to access each book, chapter and verse of the 66 books of the bible.
  function fetchBibleContent(bookName) {
    let stringifiedContent = JSON.stringify(GenesisJSONFileContents);
    window.alert(stringifiedContent);
  }

  function urlToBlob(url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.response);
        }
      };
      xhr.open("GET", url);
      xhr.responseType = "blob"; // convert type
      xhr.send();
    });
  }

  return (
    <View style={readerStyles.container}>
      <View>
        <Text style={readerStyles.mainText}></Text>
        <Button title="Genesis" onPress={() => fetchBibleContent("Genesis")} />
      </View>
      <BottomNavigation />
    </View>
  );
}

const readerStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0c0c",
  },
  mainText: {
    color: "#fff",
  },
});
