import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/auth-stack";
import { useState } from "react";
import MainRoute from "./src/routes/main-route";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded, fontError] = useFonts({
  //   Damion: require("./assets/fonts/Damion-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }
  // onLayout={onLayoutRootView}
  const [isLoggedin, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {!isLoggedin ? <AuthStack /> : <MainRoute />}
    </NavigationContainer>
  );
}
