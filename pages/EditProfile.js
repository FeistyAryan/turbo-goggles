import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RadioButton } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import { PrimaryColor } from "../utils/colors";
export default function EditProfile() {
  const [checked, setChecked] = React.useState("first");
  const [editable, setEditable] = React.useState(false);
  const [dob, setDob] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleDOBChange = (text) => {
    // Format the text with "/"
    if (text.length === 2 && !text.includes("/")) {
      text += "/";
    }
    setDob(text);
  };
  if (!editable) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Profile</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.first}>
            <Text style={styles.heading}>PERSONAL DETAILS</Text>
            <TouchableOpacity onPress={() => setEditable(true)}>
              <Text style={styles.edit}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.second}>
            <View style={styles.secondFirst}>
              <Icon name="account-circle" size={40} style={styles.icon} />
            </View>
            <View style={styles.secondsecond}>
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text}>Age</Text>
              <Text style={styles.text}>Gender</Text>
              <View style={styles.radio}>
                <Text style={styles.male}>Male</Text>
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                  disabled
                />
                <Text style={styles.male}>Female</Text>
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                  disabled
                />
              </View>
              <Text style={styles.text}>Mobile Number</Text>
              <Text style={styles.text}>8294763829</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.email}>
            <Text style={styles.textemail}>Change Email</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Profile</Text>
        </View>
        <View style={styles.main2}>
          <View style={styles.first}>
            <Text style={styles.heading}>PERSONAL DETAILS</Text>
          </View>
          <View style={styles.second}>
            <View style={styles.secondFirst}>
              <Icon name="account-circle" size={40} style={styles.icon} />
            </View>
            <View style={styles.secondsecond}>
              <TextInput placeholder="Name" style={styles.input}></TextInput>
              <TextInput
                placeholder="DOB (mm/yyyy)"
                style={styles.input}
                keyboardType="numeric"
                maxLength={7}
                value={dob}
                onChangeText={handleDOBChange}
              ></TextInput>
              <Text style={styles.text}>Gender</Text>
              <View style={styles.radio}>
                <Text style={styles.female}>Male</Text>
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
                <Text style={styles.female}>Female</Text>
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                />
              </View>
              <Text style={styles.text}>Mobile Number</Text>
              <View>
                <PhoneInput
                  defaultCode="IN"
                  textInputProps={{
                    returnKeyType: "done",
                    keyboardType: "number-pad",
                    selectionColor: PrimaryColor,
                    placeholderTextColor: "#000",
                    maxLength: 10,
                  }}
                  autoFocus
                  layout="second"
                  containerStyle={styles.btnPhone}
                  textContainerStyle={{
                    height: 54,
                    marginVertical: 2,
                    maxWidth: 260,
                    textAlignVertical: "center",
                    backgroundColor: "#fff",
                  }}
                  codeTextStyle={styles.phoneCodeTextStyle}
                  textInputStyle={styles.phoneTextInputStyle}
                  onChangeFormattedText={(text) => setPhoneNumber(text)}
                />
              </View>
            </View>
          </View>

          <View style={styles.down}>
            <TouchableOpacity
              onPress={() => setEditable(false) && showEditButton(true)}
            >
              <Text style={styles.done}>DONE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEditable(false) && showEditButton(true)}
            >
              <Text style={styles.done}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.email}>
            <Text style={styles.textemail}>Change Email</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  main: {
    backgroundColor: "white",
    marginHorizontal: 8,
    height: 300,
    marginTop: 20,
    padding: 12,
  },
  title: {
    height: 100,
    backgroundColor: "orange",
  },
  titleText: {
    alignItems: "center",
    fontSize: 20,
    marginTop: 39,
    marginLeft: 14,
    fontWeight: "bold",
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondFirst: {},
  secondsecond: {
    marginLeft: 20,
  },
  second: {
    flexDirection: "row",
    margin: 20,
    padding: 10,
  },
  btnPhone: {
    height: 60,
    width: 290,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    // backgroundColor: "#fff",
    borderRadius: 12,
    // alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-evenly",
    marginVertical: 5,
  },
  text: {
    marginBottom: 7,
    color: "darkgray",
  },
  edit: {
    color: "dodgerblue",
    fontWeight: "bold",
  },
  heading: {
    color: "gray",
    margin: 8,
  },
  radio: {
    flexDirection: "row",
  },
  email: {
    backgroundColor: "white",
    height: 50,
    marginTop: 50,
    marginHorizontal: 8,
    justifyContent: "center",
  },
  textemail: {
    fontSize: 16,
    marginHorizontal: 8,
    color: "grey",
  },
  main2: {
    height: 460,
    marginHorizontal: 8,
    backgroundColor: "white",
    padding: 2,
    marginTop: 20,
  },
  textInput: {
    width: 300, // Set the width of the TextInput component
  },
  phoneInputContainer: {
    width: 300, // Set the width of the container
  },
  phone: {
    width: 100, // Set the width of the PhoneInput component's containe
    height: 50,
  },
  down: {
    flexDirection: "row",
  },
  done: {
    color: "dodgerblue",
    marginHorizontal: 18,
    fontWeight: "bold",
  },
  textInput: {
    marginBottom: 18,
  },
  male: {
    color: "gray",
    marginTop: 6,
  },
  female: {
    marginTop: 6,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
});
