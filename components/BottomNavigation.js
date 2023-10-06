import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BottomNavigation(props) {
  return (
    <View style={navStyles.container}>
      <View style={navStyles.navTextContainer}>
        <Text style={navStyles.navText}>
          <AntDesign
            name="left"
            size={24}
            color="white"
            style={[navStyles.arrow, navStyles.leftArrow]}
          />
          <Text style={navStyles.chapterText}>
            {props.bookHeader} {props.currentChapterState}
          </Text>
          <AntDesign
            name="right"
            size={24}
            color="white"
            style={[navStyles.arrow, navStyles.rightArrow]}
          />
        </Text>
      </View>
    </View>
  );
}

const navStyles = StyleSheet.create({
  container: {
    position: "sticky",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    height: 100, // Adjust the height as needed
    backgroundColor: "#404040",
  },

  navTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  chapterText: {},

  navText: {
    color: "#ffffff",
    backgroundColor: "gray",
    paddingVertical: 10, // Add padding to top and bottom
    paddingHorizontal: 20, // Add padding to left and right
    fontWeight: "bold",
    width: "80%",
    textAlign: "center",
    borderRadius: 500,
    fontSize: 25,
  },

  leftArrow: {},

  rightArrow: {},
});
