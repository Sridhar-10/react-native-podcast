import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import playIcon from "../../assets/play-with-circle.png";

const PodcastList = ({ image, title, publisher }) => {
  return (
    <View style={styles.contentBox}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={{ color: "gray", marginTop: 10 }}>{publisher}</Text>
      </View>
      <View style={styles.playIconBox}>
        <Image source={playIcon} style={{ height: 30, width: 30 }} />
      </View>
    </View>
  );
};

export default PodcastList;

const styles = StyleSheet.create({
  contentBox: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textBox: {
    width: "60%",
  },
  playIconBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 20,
    marginRight: 10,
  },
});
