import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const MixContainer = ({ title, image }) => {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        borderRadius={20}
      >
        <Text style={styles.titleText}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default MixContainer;

const styles = StyleSheet.create({
  outerContainer: {
    height: 160,
    width: 143,
  },
  titleText: {
    height: "100%",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#000000c0",
    padding: 5,
    textAlignVertical: "center",
  },
});
