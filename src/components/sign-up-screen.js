import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerConatiner}>
          <View>
            <Text style={styles.title}>Let’s Create Account.</Text>
            <Text style={styles.subTitle}>Welcome</Text>
            <Text style={styles.subTitle}>We are waiting for you!</Text>
          </View>
          <View style={styles.inputCointainer}>
            <TextInput
              style={styles.nameInput}
              placeholder="Your name"
              placeholderTextColor="#0D0E10"
              fontSize={18}
            />
            <TextInput
              style={styles.emailnput}
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
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#0D0E10"
              fontSize={18}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.accountHas}>Already Have Account ?</Text>
              <Pressable onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.signup}> Log In</Text>
              </Pressable>
            </View>
            <Pressable style={styles.logInButton}>
              <Text style={styles.logInText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerConatiner: {
    flex: 1,
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
  nameInput: {
    height: 54,
    width: 320,
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 20,
    padding: 15,
    marginBottom: 40,
  },
  emailnput: {
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
    marginBottom: 40,
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
