import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import soundBarImage from "../../assets/sound-bar.png";
import leftSkipIcon from "../../assets/left-skip.png";
import pauseIcon from "../../assets/pause.png";
import rightSkipIcon from "../../assets/right-skip.png";

const DailyMixContainer = ({ title, ImageSrc, publisher }) => {
  return (
    <View style={styles.mostPlayedContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Most played</Text>
        <Text style={styles.headerText}>100.00k</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: ImageSrc }} style={styles.image} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.soundBarContainer}>
          <Image source={soundBarImage} style={styles.soundBar} />
        </View>
        <View style={styles.controlsContainer}>
          <Image source={leftSkipIcon} style={styles.controlIcon} />
          <Image source={pauseIcon} style={styles.controlIcon} />
          <Image source={rightSkipIcon} style={styles.controlIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mostPlayedContainer: {
    width: 335,
    backgroundColor: "#F8F8F8",
    marginLeft: 30,
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: {
    color: "#77717D",
    fontSize: 18,
  },
  content: {
    backgroundColor: "#FFF0C1",
    padding: 15,
    borderRadius: 30,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    width: "60%",
    textAlign: "left",
    fontWeight: "bold",
  },
  soundBarContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  soundBar: {
    height: 70,
    width: "100%",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlIcon: {
    height: 28,
    width: 28,
  },
});

export default DailyMixContainer;
