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
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation()
  return (
    <View style={[styles.container, { paddingHorizontal: 0, marginHorizontal: 0, justifyContent: 'space-between' }]}>
      <Image
        source={{
          uri: "https://st.redbus.in/Images/India/ContextualLogin/generic_banner_Ind.png",
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.phone}>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.heading}>Let's get started</Text>
          <Text style={styles.labelStyle}>Are you a Ghumantoo? Never worry about your next trip</Text>
        </View>
        <PhoneInput
          defaultCode="IN"
          textInputProps={{
            returnKeyType: 'done',
            keyboardType: 'number-pad',
            selectionColor: PrimaryColor,
            placeholderTextColor: "#000",
            maxLength: 10,
          }}
          autoFocus
          layout="second"
          containerStyle={styles.btnPhone}
          textContainerStyle={{ height: 44, marginVertical: 2, maxWidth: 260, textAlignVertical: 'center', backgroundColor: '#fff' }}
          codeTextStyle={styles.phoneCodeTextStyle}
          textInputStyle={styles.phoneTextInputStyle}
          onChangeFormattedText={(text) => setPhoneNumber(text)}
        />
        <TouchableOpacity style={[styles.buttonPrimary, { width: width - 38 }]} onPress={() => navigation.navigate('verification')}>
          <Text style={styles.buttonTextPimary}>
            GET OTP
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>
        <TouchableOpacity style={[styles.buttonPrimary, { backgroundColor: '#4285f4', width: width - 38 }]}>
          <Icon name="logo-google" size={30} color='#fff' />
          <Text style={styles.buttonTextPimary}>Continue with google</Text>
        </TouchableOpacity>
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

