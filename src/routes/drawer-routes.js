import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/authenticated-screens/home-screen";
import ExploreScreen from "../components/authenticated-screens/explore-screen";
import DownloadScreen from "../components/authenticated-screens/download-screen";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Explore" component={ExploreScreen} />
      <Drawer.Screen name="Download" component={DownloadScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;

const styles = StyleSheet.create({});
