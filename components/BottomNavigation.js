import { StyleSheet, Text, View } from "react-native";

export default function BottomNavigation() {
  return (
    <View style={navStyles.navFlex}>
      <Text style={navStyles.navText}>Hello World</Text>
    </View>
  );
}

const navStyles = StyleSheet.create({
  navFlex: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffff",
    width: "100%",
    height: "10%",
    backgroundColor: "#4f4d4d",
  },

  navText: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 28,
  },
});
