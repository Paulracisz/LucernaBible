import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function NavBar() {
  return (
    <View style={navBarStyles.container}>
      <View style={navBarStyles.navIconsContainer}>
        <AntDesign name="home" size={24} color="white" />
        <Text style={navBarStyles.navText}>Home</Text>
      </View>
      <View style={navBarStyles.navIconsContainer}>
        <AntDesign name="book" size={24} color="white" />
        <Text style={navBarStyles.navText}>Bible</Text>
      </View>
      <View style={navBarStyles.navIconsContainer}>
        <Feather name="bookmark" size={24} color="white" />
        <Text style={navBarStyles.navText}>Bookmarks</Text>
      </View>
      <View style={navBarStyles.navIconsContainer}>
        <Entypo name="magnifying-glass" size={24} color="white" />
        <Text style={navBarStyles.navText}>Search</Text>
      </View>
      <View style={navBarStyles.navIconsContainer}>
        <FontAwesome name="cog" size={24} color="white" />
        <Text style={navBarStyles.navText}>Settings</Text>
      </View>
    </View>
  );
}

const navBarStyles = StyleSheet.create({
  container: {
    position: "sticky",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    height: 70, // Adjust the height as needed
    backgroundColor: "black",
  },

  navIconsContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", // Align items vertically
    justifyContent: "center", // Put space between left and right arrow
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
    paddingVertical: 2, // Add padding to top and bottom
    fontWeight: "bold",
    fontSize: 15,
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
