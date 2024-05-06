import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Image } from "react-native";
import MixContainer from "../mix-containers";
import PodcastList from "../podcast-list";
const podcastMix = require("../../data/podcast-list.json");

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          position: "relative",
        }}
      >
        <Image
          source={require("../../../assets/explore-rectangle.png")}
          style={{ height: 200, width: "90%", borderRadius: 20 }}
        />
        <View style={{ position: "absolute", top: 25 }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            Keep Your Mind Wake
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "700" }}>
            Coke Studio, Season 10
          </Text>
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Image
              source={require("../../../assets/play-fill.png")}
              style={{ height: 40, width: 40 }}
            />
            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "700" }}>
              Play Podcast
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.dailyMixTitleContainer}>
        <View>
          <Text style={{ color: "#77717D", fontSize: 36, fontWeight: "200" }}>
            Popular
          </Text>
          <Text style={{ color: "#0D0E10", fontSize: 36, fontWeight: "200" }}>
            Podcast{" "}
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
        data={podcastMix["podcasts"]}
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

export default ExploreScreen;

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
