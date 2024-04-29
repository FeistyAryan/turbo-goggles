import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function RateUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RateUs</Text>
      <View style={styles.box}>
        <View style={styles.divider}>
          <View>
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/009/155/973/original/rate-us-feedback-label-3d-design-illustration-vector.jpg",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            {/* Added a container for the text */}
            <Text style={styles.text}>Enjoying ghumantoo?</Text>
            <Text style={styles.text2}>
              Share your experience with us and help spread the word!
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          {/* Added a container for the button */}
          <Text style={styles.button}>Rate Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 39,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically
    paddingHorizontal: 20, // Added horizontal padding
    paddingBottom: 20, // Added bottom padding
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 40,
  },
  textContainer: {
    flex: 1, // Allow text to take remaining space
    marginLeft: 20, // Added left margin for separation
  },
  text: {
    marginBottom: 10, // Added bottom margin for separation
    fontWeight: "bold",
    fontSize: 19,
  },
  text2: {
    color: "darkgray",
    paddingTop: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    color: "white",
    fontWeight: "bold",
    width: 280,
    textAlign: "center",
  },
  box: {
    borderRadius: 12,
    margin: 20, // Added margin around the box
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.01, // Reduced shadow opacity for a very light effect
    shadowRadius: 2.0,
    elevation: 4, // Adjusted elevation for a subtle lift
  },
});
