import React from "react";
import { StyleSheet, Text, View } from "react-native";
import textStyles from "../styles/textStyles";

function TitledCard({ children, title }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={{ ...textStyles.heading, marginBottom: 20 }}>{title}</Text>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#f4f5f7",
    padding: 20,
    borderRadius: 15,
  },
});

export default TitledCard;
