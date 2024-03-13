import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MixContainer from "../mix-containers";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <MixContainer />
      </View>
      <View style={styles.dailyMixTitleContainer}></View>
      <View style={styles.mostPlayedContainer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  cardsContainer: {
    flex: 2,
    backgroundColor: "red",
    padding: 4,
    justifyContent: "center",
  },
  dailyMixTitleContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  mostPlayedContainer: {
    flex: 3,
    backgroundColor: "yellow",
  },
});
