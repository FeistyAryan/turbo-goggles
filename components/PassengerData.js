import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../utils/styles";
import { RadioButton } from "react-native-paper";

const PassengerData = ({ heading, passenger, child, navContinue }) => {
  const navigation = useNavigation();
  // Create a ref for the LottieView
  const confettiRef = useRef();

  function triggerConfetti() {
    confettiRef.current?.play(0);
  }

  const [passengerData, setPassengerData] = useState([
    { id: "1", name: "", gender: "", age: "" },
  ]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.passengerItem}>
        <Text style={styles.passengerHeading}>
          {passenger} {item.id}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={item.name}
          onChangeText={(text) => handleChange(item.id, "name", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={item.age}
          onChangeText={(text) => handleChange(item.id, "age", text)}
        />
        <Text
          style={{
            marginRight: 10,
            opacity: 0.6,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Gender
        </Text>
        <RadioButton.Group
          onValueChange={(value) => handleChange(item.id, "gender", value)}
          value={item.gender}
        >
          <View style={styles.inputRow}>
            <View style={styles.radioButton}>
              <Text style={{ fontSize: 14.8 }}>Male</Text>
              <RadioButton value="male" />
            </View>
            <View style={styles.radioButton}>
              <Text>Female</Text>
              <RadioButton value="female" />
            </View>
          </View>
          {!child && (
            <View style={styles.radioButton}>
              <Text style={{ fontSize: 14.8 }}>Other</Text>
              <RadioButton value="Other" />
            </View>
          )}
        </RadioButton.Group>
      </View>
    );
  };

  const handleChange = (id, field, value) => {
    const updatedPassengerData = passengerData.map((passenger) => {
      if (passenger.id === id) {
        return { ...passenger, [field]: value };
      }
      return passenger;
    });
    setPassengerData(updatedPassengerData);
  };

  const addPassenger = () => {
    const newPassenger = {
      id: (passengerData.length + 1).toString(),
      name: "",
      gender: "",
      age: "",
    };
    setPassengerData((prevState) => [...prevState, newPassenger]);
  };

  return (
    <View style={style1.container}>
      <View style={style1.header}>
        <EvilIcons name="user" size={20} />
        <Text style={styles.headerText}>{heading} Information</Text>
      </View>
      <FlatList
        data={passengerData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
      {!child && (
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            backgroundColor: "#f99333",
            paddingVertical: 8,
            paddingHorizontal: 8,
            borderRadius: 8,
            bottom: 150,
            right: 20,
          }}
          onPress={() => navigation.navigate("Children Details")}
        >
          {/* <Ionicons name='add' size={30} color='white' /> */}
          <Text style={{ color: "#000" }}>Travelling with a child?</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "#f99333",
          paddingVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 8,
          bottom: 90,
          right: 20,
        }}
        onPress={addPassenger}
      >
        {/* <Ionicons name='add' size={30} color='white' /> */}
        <Text style={{ color: "#000" }}>Add {passenger}</Text>
      </TouchableOpacity>

      {/* Continue button */}
      <Button
        style={styles.continueButton}
        // onPress={() => {
        //   // Navigate to the specified screen
        //   // navigation.navigate(navContinue);
        //   // Trigger the confetti animation
        //   triggerConfetti();
        // }}
        onPress={triggerConfetti}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </Button>

      {/* LottieView for confetti animation */}
      <LottieView
        ref={confettiRef}
        source={require("../assets/confetti.json")}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
      />
    </View>
  );
};

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#c9c9c9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "grey",
    paddingBottom: 5,
    marginBottom: 15,
  },
});

export default PassengerData;
