import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import FlashMessage from "react-native-flash-message";

function BaseView({ children, showNavBar }) {
  return (
    <View style={styles.container}>
      <Background />
      {showNavBar && <NavBar styles={styles.navbar} />}
      {children}
      <FlashMessage position="top" />
    </View>
  );
}

BaseView.propTypes = {
  showNavBar: PropTypes.bool,
};

BaseView.defaultProps = {
  showNavBar: true,
};

const styles = {
  container: {
    flex: 1,
  },
  navbar: {
    marginTop: 20,
    marginBottom: 30,
  },
};

export default BaseView;
