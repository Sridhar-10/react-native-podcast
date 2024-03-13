import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Let’s Sign You In.</Text>
          <Text style={styles.subTitle}>Welcome back,</Text>
          <Text style={styles.subTitle}>You’ve been missed!</Text>
        </View>
        <View style={styles.inputCointainer}>
          <TextInput
            style={styles.emailInput}
            placeholder="Phone,email or username"
            placeholderTextColor="#0D0E10"
            fontSize={18}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter Password"
            placeholderTextColor="#0D0E10"
            fontSize={18}
            secureTextEntry={true}
            multiline
          />
          <Pressable
            onPress={() => navigation.navigate("ForgetPassword")}
            style={styles.forgetText}
          >
            <Text>Forget Password?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.accountHas}>Don’t Have Account ? </Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signup}> Sign Up</Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.logInButton}
            onPress={() => navigation.navigate("rootLayout")}
          >
            <Text style={styles.logInText}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "left",
    padding: 20,
  },
  title: {
    fontSize: 40,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 28,
    textAlign: "left",
    marginBottom: 10,
  },
  emailInput: {
    height: 54,
    width: 320,
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 20,
    padding: 15,
    marginBottom: 40,
  },
  inputCointainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  passwordInput: {
    height: 54,
    width: 320,
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 20,
    padding: 15,
  },
  forgetText: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 30,
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    padding: 5,
  },
  accountHas: {
    color: "#77717D",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  signup: {
    color: "#0B0B0B",
    textAlignVertical: "center",
  },
  logInButton: {
    height: 60,
    width: 315,
    backgroundColor: "#5854A3",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logInText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});
