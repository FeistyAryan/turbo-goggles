import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { styles, width } from "../utils/styles";
import { PrimaryColor } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/buttons/PrimaryButton";


export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation()
  const sendOTP = () => {
    console.log(phoneNumber)
    navigation.navigate('verification')
  }
  return (
    <View style={[styles.container, { paddingHorizontal: 0, marginHorizontal: 0, justifyContent: 'space-between' }]}>
      <Image
        source={require('../assets/hero.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.phone}>
        <Text style={styles.headingSignIn}>Create Account or Sign in</Text>
        <PhoneInput
          defaultCode="IN"
          textInputProps={{
            returnKeyType: 'done',
            keyboardType: 'number-pad',
            selectionColor: PrimaryColor,
            placeholderTextColor: "#000",
            maxLength: 10,
          }}
          autoFocus={true}
          layout="second"
          containerStyle={styles.inputStyle}
          textContainerStyle={styles.phoneTextContainerStyle}
          textInputStyle={styles.phoneTextInputStyle}
          codeTextStyle={styles.phoneCodeTextStyle}
          onChangeFormattedText={(text) => setPhoneNumber(text)}
        />

        <PrimaryButton style={{ width: width - 38 }} onClick={sendOTP} title='GET OTP' />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <PrimaryButton style={{ backgroundColor: '#4285f4', width: width - 38 }} title='CONTINUE WITH GOOGLE' onClick={() => navigation.navigate('verification')} isIconButton={true} iconName='logo-google' />

      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.termsCondition}>
          By logging in, you agree to our
          <Text style={{ textDecorationLine: 'underline', color: PrimaryColor }}> Terms and Conditions</Text> and
          <Text style={{ textDecorationLine: 'underline', color: PrimaryColor }}> Privacy Policy</Text>
        </Text>
        <Text style={styles.bottomText}>HAVE A REFERRAL CODE?</Text>
      </View>
    </View>
  );
}

