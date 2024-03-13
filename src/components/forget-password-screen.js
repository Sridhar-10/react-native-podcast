import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

function Step1() {
  return (
    <>
      <View>
        <Text style={styles.title}>Forget Password?</Text>
        <Text style={styles.subTitle}>Please Enter,,</Text>
        <Text style={styles.subTitle}>Your email address</Text>
      </View>
      <View style={styles.inputCointainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="Phone,email or username"
          placeholderTextColor="#0D0E10"
          fontSize={18}
        />
      </View>
    </>
  );
}

function Step2() {
  return (
    <>
      <View>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subTitle}>Please Enter,,</Text>
        <Text style={styles.subTitle}>Verification code.</Text>
      </View>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          placeholderTextColor="#0D0E10"
          fontSize={18}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholderTextColor="#0D0E10"
          fontSize={18}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholderTextColor="#0D0E10"
          fontSize={18}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          placeholderTextColor="#0D0E10"
          fontSize={18}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
    </>
  );
}

function Step3() {
  return (
    <>
      <View>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subTitle}>Please Enter,,</Text>
        <Text style={styles.subTitle}>Your Password</Text>
      </View>
      <View style={styles.inputCointainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Password"
          placeholderTextColor="#0D0E10"
          fontSize={18}
          secureTextEntry={true}
          multiline
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#0D0E10"
          fontSize={18}
          secureTextEntry={true}
          multiline
        />
      </View>
    </>
  );
}

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step == 3 && <Step3 />}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.sendCodeButton}
          onPress={() => {
            if (step <= 2) setStep(step + 1);
          }}
        >
          <Text style={styles.buttonText}>
            {step == 1 ? "Send Code" : "Confirm"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    alignItems: "left",
    padding: 20,
  },
  title: {
    fontSize: 40,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 28,
    textAlign: "left",
    marginBottom: 20,
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
  passwordInput: {
    height: 54,
    width: 320,
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 20,
    padding: 15,
    marginBottom: 30,
  },
  otpInput: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "#BCBCBC",
    borderRadius: 5,
    padding: 15,
    marginBottom: 40,
    alignItems: "center",
  },
  inputCointainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  otpContainer: {
    flexDirection: "row",
    gap: 10,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    padding: 5,
  },
  sendCodeButton: {
    height: 60,
    width: 315,
    backgroundColor: "#5854A3",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});
