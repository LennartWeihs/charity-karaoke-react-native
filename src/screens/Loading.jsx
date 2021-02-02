import React from "react";
import BaseView from "./BaseView";
import Spinner from "react-native-loading-spinner-overlay";

function Loading() {
  return (
    <BaseView showNavBar={false}>
      <Spinner
        visible
        textContent="Loading..."
        textStyle={{ color: "#fff", fontSize: 15 }}
      />
    </BaseView>
  );
}

export default Loading;
