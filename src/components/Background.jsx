import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/ck_main_logo.png";

function Background() {
  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["#281483", "#6d50b9", "#6d50b9", "#d581d9"]}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0.1, 0.4, 0.6, 0.9]}
        style={bgStyles.gradient}
      />
      <View style={bgStyles.logoContainer}>
        <Image source={logo} style={bgStyles.logo} />
      </View>
    </>
  );
}

const bgStyles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  logoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 148,
    height: 128,
  },
});

export default Background;
