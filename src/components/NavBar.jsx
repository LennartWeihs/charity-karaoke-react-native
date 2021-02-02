import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import ckNavBarIcon from "../../assets/icons/ck_navbar.png";

function NavBar({ styles }) {
  return (
    <View style={{ ...navbarStyles.navbarWrap, ...styles }}>
      <View style={navbarStyles.navbar}>
        <Image style={navbarStyles.navbarIcon} source={ckNavBarIcon} />
        <Icon
          name="three-bars"
          size={40}
          color="#fff"
          onPress={() => {
            // TODO
          }}
        />
      </View>
    </View>
  );
}

const navbarStyles = StyleSheet.create({
  navbarWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  navbar: {
    width: "75%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarIcon: {
    width: 40,
    height: 40,
  },
});

export default NavBar;
