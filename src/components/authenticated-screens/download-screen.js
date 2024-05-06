import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PodcastList from "../podcast-list";
const downloads = require("../../data/downloads.json");

const DownloadScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dailyMixTitleContainer}>
        <View>
          <Text style={{ color: "#77717D", fontSize: 36, fontWeight: "200" }}>
            Your
          </Text>
          <Text style={{ color: "#0D0E10", fontSize: 36, fontWeight: "200" }}>
            Downloads and{" "}
            <Text
              style={{ color: "#0D0E10", fontSize: 36, fontWeight: "bold" }}
            >
              Mixes
            </Text>
          </Text>
        </View>
        <View style={styles.filterContainer}>
          <Image
            source={require("../../../assets/filter.png")}
            style={{ height: 21, width: 21 }}
          />
        </View>
      </View>
      <FlatList
        data={downloads["downloads"]}
        renderItem={({ item }) => {
          return (
            <PodcastList
              image={item?.image}
              title={item?.title}
              publisher={item?.publisher}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={
          <View
            style={{
              marginBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#D3D3D3",
              marginVertical: 10,
            }}
          ></View>
        }
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
        }}
      />
    </View>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  dailyMixTitleContainer: {
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 62,
    width: 52,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
  },
});
