import React from "react";
import { ScrollView, Button, StyleSheet, Text, View } from "react-native";
import BottomNavigation from "./BottomNavigation";

export default function MainReader() {
  function fetchBibleContent(bookName) {
    fetch(`../assets/jsonBibleBooks/${bookName}.json`)
      .then((response) => response.json())
      .then((data) => {
        window.alert(data);
      })
      .catch((error) => {
        console.error("Error fetching Bible data:", error);
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
