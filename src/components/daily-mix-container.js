import { Image, StyleSheet, Text, View, Svg } from "react-native";
import React from "react";
import SvgUri from "react-native-svg-uri";

const DailyMixContainer = ({ title, ImageSrc, publisher }) => {
  return (
    <View style={styles.mostPlayedContainer}>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#77717D", fontSize: 18 }}>Most played</Text>
        <Text style={{ color: "#77717D", fontSize: 18 }}>100.00k</Text>
      </View>
      <View style={styles.mostPlayedInnerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: ImageSrc }} style={styles.image} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Image
            source={require("../../assets/sound-bar.png")}
            style={{ height: 70, width: "100%" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Image
            source={require("../../assets/left-skip.png")}
            style={{ height: 28, width: 28 }}
          />

          <Image
            source={require("../../assets/pause.png")}
            style={{ height: 28, width: 28 }}
          />
          <Image
            source={require("../../assets/right-skip.png")}
            style={{ height: 28, width: 28 }}
          />
        </View>
      </View>
    </View>
  );
};

export default DailyMixContainer;

const styles = StyleSheet.create({
  mostPlayedContainer: {
    height: "100%",
    width: 335,
    backgroundColor: "#F8F8F8",
    marginLeft: 30,
    borderRadius: 30,
  },
  mostPlayedInnerContainer: {
    height: "85%",
    width: 335,
    borderRadius: 30,
    backgroundColor: "#FFF0C1",
    marginTop: "auto",
    padding: 15,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  imageContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
