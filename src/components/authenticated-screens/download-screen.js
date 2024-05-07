import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import PodcastList from "../podcast-list";
import downloads from "../../data/downloads.json";
import FilterIcon from "../../../assets/filter.png";

const DownloadScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Your{"\n"}
          <Text style={[styles.titleText, styles.boldTitle]}>Downloads</Text>
        </Text>
        <View style={styles.filterContainer}>
          <Image source={FilterIcon} style={styles.filterIcon} />
        </View>
      </View>
      <FlatList
        data={downloads.downloads}
        renderItem={({ item }) => (
          <PodcastList
            image={item.image}
            title={item.title}
            publisher={item.publisher}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  titleText: {
    fontSize: 36,
    color: "#0D0E10",
    fontWeight: "200",
    width: "93%",
  },
  boldTitle: {
    fontWeight: "bold",
  },
  filterIcon: {
    height: 20,
    width: 20,
  },
  filterContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 50,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
  },
  separator: {
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  listContent: {
    paddingVertical: 10,
  },
});

export default DownloadScreen;
