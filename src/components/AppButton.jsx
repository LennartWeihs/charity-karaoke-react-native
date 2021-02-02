import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

function AppButton({ children, styles, onPress, isLoading }) {
  return (
    <TouchableOpacity
      style={{ ...buttonStyles.button, ...styles }}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={buttonStyles.buttonText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#5e72e4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default AppButton;
