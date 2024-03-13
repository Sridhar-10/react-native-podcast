import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MixContainer = () => {
  return (
    <View style={styles.outerContainer}>
      <Text>MixContainer</Text>
    </View>
  );
};

export default MixContainer;

const styles = StyleSheet.create({
  outerContainer: {
    height: 160,
    width: 143,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 30,
    alignItems: "center",
  },
});
