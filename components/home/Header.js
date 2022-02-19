import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <Text style={{ color: "white" }}>DUMMY</Text>
        <Text style={{ color: "white" }}>DUMMY</Text>
        <Text style={{ color: "white" }}>DUMMY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default Header;
