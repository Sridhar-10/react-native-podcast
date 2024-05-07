import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/authenticated-screens/home-screen";
import ExploreScreen from "../components/authenticated-screens/explore-screen";
import DownloadScreen from "../components/authenticated-screens/download-screen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5854A3",
        tabBarInactiveTintColor: "#77717D",
        tabBarStyle: {
          height: 90,
          borderBlockColor: "#FFF",
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 17,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 22,
          color: "#0B0B0B",
          fontWeight: "bold",
        },
        headerLeft: ({ color }) => (
          <MaterialCommunityIcons
            name="playlist-music-outline"
            size={35}
            color={color}
          />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 20,
          justifyContent: "center",
        },
        headerRight: ({ color }) => (
          <Octicons name="search" size={25} color={color} />
        ),
        headerRightContainerStyle: {
          paddingRight: 20,
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-outline" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-music-outline"
              size={35}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRoute;

// function DownloadButton() {
//   return (
//     <Pressable
//       style={{
//         height: 50,
//         width: 130,
//         backgroundColor: "#5854A3",
//         borderRadius: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         marginRight: 35,
//         marginTop: "auto",
//       }}
//     >
//       <Text style={{ color: "#FFF", fontSize: 18 }}>Downloads</Text>
//     </Pressable>
//   );
// }
