import { StyleSheet, Text, View } from "react-native";

export default function BottomNavigation() {
  return (
    <View style={navStyles.container}>
      <View style={navStyles.navFlex}>
        <Text style={navStyles.navText}>Hello World</Text>
      </View>
    </View>
  );
}

const navStyles = StyleSheet.create({
  container: {
    flex: 1, // This ensures that the container takes up the entire available space.
    justifyContent: "flex-end", // Align the content at the bottom of the container.
  },

  navFlex: {
    position: "sticky",
    bottom: 0,
    borderTopWidth: 5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404040",
    height: "25%",
  },

  navText: {
    color: "#ffff",
    fontSize: 15,
  },
});
