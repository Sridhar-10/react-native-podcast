import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../../assets/shapes.png")}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={{ marginBottom: 25, marginTop: 20 }}>
        <Text style={styles.title}>Podcast</Text>
        <Text style={styles.desc}>Listen Your Favourite Podcast</Text>
        <Text style={styles.desc}>Anywhere, Anytime.</Text>
      </View>
      <View>
        <Pressable
          style={styles.signInbutton}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.signin}>Sign In</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  image: {
    width: 412,
    height: 500,
  },
  title: {
    textAlign: "center",
    // fontFamily: "Damion",
    fontSize: 60,
    fontWeight: "bold",
    marginTop: 10,
  },
  desc: {
    textAlign: "center",
    fontSize: 14,
    color: "#77717D",
    marginTop: 5,
  },
  signInbutton: {
    height: 80,
    width: 315,
    backgroundColor: "#5854A3",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  signin: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signup: {
    textAlign: "center",
    color: "#5854A3",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
