import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import MixContainer from "../mix-containers";
import DailyMixContainer from "../daily-mix-container";
import mixData from "../../data/mix-list.json";
import dailyMix from "../../data/daily-mix.json";
import FilterIcon from "../../../assets/filter.png";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <FlatList
          data={mixData["mix-list"]}
          renderItem={({ item }) => (
            <MixContainer title={item.title} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => <View style={{ marginLeft: 20 }} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.mixListContent}
        />
      </View>
      <View style={styles.dailyMixTitleContainer}>
        <Text style={[styles.mixTitle, styles.bold]}>
          Your{"\n"}Daily <Text style={styles.bold}>Mixes</Text>
        </Text>
        <View style={styles.filterContainer}>
          <Image source={FilterIcon} style={styles.filterIcon} />
        </View>
      </View>

      <View style={styles.dailyMixContainer}>
        <FlatList
          data={dailyMix["daily-mix"]}
          renderItem={({ item }) => (
            <DailyMixContainer
              title={item.title}
              ImageSrc={item.image}
              publisher={item.publisher}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 2 }} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dailyMixListContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    flex: 2,
    padding: 4,
  },
  mixListContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dailyMixTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 5,
  },
  mixTitle: {
    color: "#0D0E10",
    fontSize: 36,
    fontWeight: "200",
  },
  bold: {
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
  dailyMixContainer: {
    flex: 4,
    paddingRight: 20,
  },
  dailyMixListContent: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default HomeScreen;
