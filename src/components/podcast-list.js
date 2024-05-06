import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");

const PodcastList = ({ image, title, publisher, website }) => {
  return (
    <View style={styles.contentBox}>
      <Image
        source={{
          uri: image,
        }}
        style={{ height: 80, width: 80, borderRadius: 20, marginRight: 10 }}
      />
      <View
        style={{
          width: "50%",
        }}
      >
        <Text style={styles.titleText}>{title}</Text>
        <Text style={{ color: "gray", marginTop: 10 }}>{publisher}</Text>
      </View>
      <Pressable
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={require("../../assets/play-with-circle.png")}
          style={{ height: 30, width: 30 }}
        />
      </Pressable>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginVertical: 10,
        }}
      ></View>
    </View>
  );
};

export default PodcastList;

const styles = StyleSheet.create({
  contentBox: {
    flexDirection: "row",
    width,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
