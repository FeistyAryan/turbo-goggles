import React, { useRef, useState } from "react";
import { Divider } from "react-native-paper";
import { SecondaryColor } from "../utils/colors";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";

import PhoneInput from "react-native-phone-number-input";
export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: "https://st.redbus.in/Images/India/ContextualLogin/generic_banner_Ind.png",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.heading}>Create Account or Sign in</Text>
        <View style={styles.phone}>
          <PhoneInput
            defaultValue={phoneNumber}
            layout="first"
            withShadow
            autoFocus
            defaultCode="IN"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                GENERATE OTP(ONE TIME PASSWORD)
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.or}>
            <Text style={styles.textor}>OR</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Text style={styles.buttonText2}>Continue with google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.tnc}>
            <Text style={styles.tnctext}>
              By logging in, you agree to our Terms and Conditions and Privacy
              Policy
            </Text>
          </View>

          <View style={styles.bottom}>
            <Divider />
            <Text style={styles.bottomText}>HAVE A REFERRAL CODE?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageView: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  phone: {
    borderColor: "black",
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    width: 350,
    alignItems: "center",
    backgroundColor: "#ff8c00",
  },
  button2: {
    width: 350,
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20,
    borderColor: "dodgerblue", // Border color
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
  buttonText2: {
    textAlign: "center",
    padding: 20,
    color: "dodgerblue",
  },
  or: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textor: {},
  tnc: {
    textAlign: "center",
    marginTop: 20,
  },
  tnctext: {
    textAlign: "center",
    color: "gray",
    margin: 20,
    fontSize: 12,
  },
  bottom: {
    height: 30,
    width: "100%",
    alignItems: "center",
    marginTop: 120,
  },
  bottomText: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
