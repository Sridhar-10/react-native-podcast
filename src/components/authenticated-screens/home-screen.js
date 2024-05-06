import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SvgUri from "react-native-svg-uri";
import MixContainer from "../mix-containers";
import DailyMixContainer from "../daily-mix-container";
const mixData = require("../../data/mix-list.json");
const dailyMix = require("../../data/daily-mix.json");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <FlatList
          data={mixData["mix-list"]}
          renderItem={({ item }) => {
            return <MixContainer title={item.title} image={item.image} />;
          }}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={<View style={{ marginLeft: 20 }}></View>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        />
      </View>

      <View style={styles.dailyMixTitleContainer}>
        <View>
          <Text style={{ color: "#77717D", fontSize: 36, fontWeight: "200" }}>
            Your
          </Text>
          <Text style={{ color: "#0D0E10", fontSize: 36, fontWeight: "200" }}>
            Daily{" "}
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
      <View style={{ flex: 4 }}>
        <FlatList
          data={dailyMix["daily-mix"]}
          renderItem={({ item }) => {
            return (
              <DailyMixContainer
                title={item.title}
                ImageSrc={item.image}
                publisher={item.publisher}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={<View style={{ marginLeft: 2 }}></View>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    flex: 2,
    padding: 4,
  },
  dailyMixTitleContainer: {
    flex: 1,
    marginLeft: 30,
    marginBottom: 5,
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
