import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import PodcastList from "../podcast-list";
import podcastMix from "../../data/podcast-list.json";
import FilterIcon from "../../../assets/filter.png";
import ExploreRectangleImage from "../../../assets/explore-rectangle.png";
import PlayFillIcon from "../../../assets/play-fill.png";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.exploreHeader}>
        <Image source={ExploreRectangleImage} style={styles.exploreImage} />
        <View style={styles.exploreContent}>
          <Text style={styles.exploreTitle}>Keep Your Mind Wake</Text>
          <Text style={styles.exploreSubtitle}>Coke Studio, Season 10</Text>
          <View style={styles.playButtonContainer}>
            <Image source={PlayFillIcon} style={styles.playButtonIcon} />
            <Text style={styles.playButtonText}>Play Podcast</Text>
          </View>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Popular Podcast</Text>
          <Text style={[styles.titleText, styles.boldTitle]}>Mixes</Text>
        </View>
        <View style={styles.filterContainer}>
          <Image source={FilterIcon} style={styles.filterIcon} />
        </View>
      </View>
      <FlatList
        data={podcastMix.podcasts}
        renderItem={({ item }) => (
          <PodcastList
            image={item.image}
            title={item.title}
            publisher={item.publisher}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  exploreHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    position: "relative",
  },
  exploreImage: {
    height: 200,
    width: "90%",
    borderRadius: 20,
  },
  exploreContent: {
    position: "absolute",
    top: 25,
  },
  exploreTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  exploreSubtitle: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "700",
  },
  playButtonContainer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
  playButtonIcon: {
    height: 40,
    width: 40,
  },
  playButtonText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "700",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  titleText: {
    color: "#0D0E10",
    fontSize: 36,
    fontWeight: "200",
  },
  boldTitle: {
    fontWeight: "bold",
  },
  filterContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 62,
    width: 52,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
  },
  filterIcon: {
    height: 21,
    width: 21,
  },
  separator: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    marginVertical: 10,
  },
  listContent: {
    padding: 10,
  },
});

export default ExploreScreen;
