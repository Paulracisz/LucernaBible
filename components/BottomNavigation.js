import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { red } from "@mui/material/colors";

export default function BottomNavigation(props) {
  return (
    <View style={navStyles.container}>
      <View style={navStyles.navTextContainer}>
        <Text style={navStyles.navText}>
          <TouchableOpacity
            style={[navStyles.arrow, navStyles.rightArrow]}
            onPress={props.decrementChapter}
          >
            <AntDesign
              name="left"
              size={30}
              color="white"
              style={navStyles.arrow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.openBookMenu}>
            <Text style={navStyles.chapterText}>
              {props.bookHeader} {props.currentChapterState}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[navStyles.arrow, navStyles.rightArrow]}
            onPress={props.incrementChapter}
          >
            <AntDesign
              name="right"
              size={30}
              color="white"
              style={[navStyles.arrow, navStyles.rightArrow]}
            />
          </TouchableOpacity>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center", // Align items vertically
    justifyContent: "center", // Put space between left and right arrow
  },

  chapterText: {
    flex: 1,
    fontSize: 30,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  navText: {
    color: "#ffffff",
    backgroundColor: "gray",
    paddingVertical: 20, // Add padding to top and bottom
    paddingHorizontal: 15,
    fontWeight: "bold",
    borderRadius: 500,
    fontSize: 25,
    display: "flex",
    flexDirection: "row", // Add flexDirection to navText
    alignItems: "center",
    justifyContent: "center", // Align items vertically
  },

  arrow: {
    marginHorizontal: 15,
  },

  rightArrow: {},
});
