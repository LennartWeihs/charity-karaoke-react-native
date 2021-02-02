import React, { useState, useRef } from "react";
import {
  Animated,
  Easing,
  LayoutAnimation,
  StyleSheet,
  Text,
  UIManager,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import * as Animatable from "react-native-animatable";
const AnimatableIcon = Animatable.createAnimatableComponent(Icon);
import textStyles from "../styles/textStyles";

// First set up animation

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function SongVoting({ styles, artist, title, singer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [spinValue] = useState(new Animated.Value(0));

  function switchExpansionStatus() {
    LayoutAnimation.configureNext({
      duration: 400,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    });
    setIsExpanded(!isExpanded);
  }

  const heightStyle = isExpanded ? {} : { maxHeight: 0 };

  // First set up animation
  Animated.timing(spinValue, {
    toValue: isExpanded ? 0.5 : 0,
    duration: 400,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-360deg", "360deg"],
  });

  return (
    <View style={{ ...songVotingStyles.wrapper, ...styles }}>
      <View style={songVotingStyles.heading}>
        <View>
          <Text style={textStyles.bold}>{singer}</Text>
          <Text style={textStyles.normal}>{title}</Text>
        </View>
        <AnimatableIcon
          style={{
            transform: [{ rotate: spin }],
          }}
          name="chevron-down"
          size={17}
          color="#757575"
          onPress={switchExpansionStatus}
        />
      </View>
      <View style={{ overflow: "hidden", ...heightStyle }}>
        <Text
          style={{ fontStyle: "italic", ...textStyles.normal }}
        >{`Original Artist: ${artist}`}</Text>
      </View>
    </View>
  );
}

const songVotingStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SongVoting;
