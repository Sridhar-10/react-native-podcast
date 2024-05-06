import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/auth-stack";
import { useState } from "react";
import MainRoute from "./src/routes/main-route";

export default function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {!isLoggedin ? <AuthStack /> : <MainRoute />}
    </NavigationContainer>
  );
}
