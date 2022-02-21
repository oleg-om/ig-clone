import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material-outlined/24/ffffff/home--v1.png ",
    inactive: "https://img.icons8.com/material-outlined/24/808080/home--v1.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/material-outlined/24/ffffff/search--v1.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/808080/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/material-outlined/24/ffffff/tiktok--v1.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/808080/tiktok--v1.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/material-outlined/24/ffffff/shop--v1.png",
    inactive: "https://img.icons8.com/material-outlined/24/808080/shop--v1.png",
  },
  {
    name: "Profile",
    active:
      "https://i2.wp.com/www.lklassociates.com/wp-content/uploads/2017/01/man-in-suit2.jpg",
    inactive:
      "https://i2.wp.com/www.lklassociates.com/wp-content/uploads/2017/01/man-in-suit2.jpg",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.continer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    zIndex: 999,
    bottom: "3%",
    backgroundColor: "#000",
  },
  continer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
