import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { info } from "./OfferInfo";

export default function Offers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offers</Text>
      <Text style={styles.subtitle}>Get best deals with great offers</Text>
      <ScrollView horizontal={true}>
        {info.map(({ id, imageurl, heading, validity, couponCode }) => (
          <View key={id} style={styles.main}>
            <View style={styles.imageDiv}>
              <Image
                source={{
                  uri: "https://i0.wp.com/viknick.com/wp-content/uploads/2021/06/COUPON.png?fit=980%2C660&ssl=1",
                }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View styles={styles.second}>
              <Text style={styles.heading}>{heading}</Text>
              <Text style={styles.validity}>Valid till {validity}</Text>
              <Text style={styles.couponCode}>{couponCode}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  subtitle: {
    color: "darkgray",
    fontSize: 14,
    marginLeft: 25,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 340,
    height: 200,
    shadowColor: "#000", // Black shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.62,
    elevation: 8,
    marginRight: 4,
    borderColor: "gray",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    margin: 8,
  },
  imageDiv: {
    width: 100,
    height: 200,
    borderRadius: 4,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 4,
  },
  heading: {
    fontWeight: "700",
    marginBottom: 8,
  },
  validity: {},
  couponCode: {
    backgroundColor: "red",
    marginTop: 25,
    marginRight: 100,
    marginLeft: 19,
    textAlign: "center",
    height: 40,
    borderStyle: "dotted",
    borderWidth: 3,
    paddingTop: 6,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 3,
    width: 100,
  },
});
