import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "",
    inactive: "https://img.icons8.com/material-outlined/24/ffffff/home--v1.png",
  },
  {
    name: "Search",
    active: "",
    inactive:
      "https://img.icons8.com/material-outlined/24/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "",
    inactive:
      "https://img.icons8.com/material-outlined/24/ffffff/tiktok--v1.png",
  },
  {
    name: "Shop",
    active: "",
    inactive: "https://img.icons8.com/material-outlined/24/ffffff/shop--v1.png",
  },
  {
    name: "Profile",
    active: "",
    inactive:
      "https://i2.wp.com/www.lklassociates.com/wp-content/uploads/2017/01/man-in-suit2.jpg",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.continer}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomTabs;
