import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../components/welcome-sceen";
import SignIn from "../components/sign-in-screen";
import SignUp from "../components/sign-up-screen";
import ForgetPassword from "../components/forget-password-screen";
import MainRoute from "./main-route";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: "" }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="rootLayout" component={MainRoute} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
