import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Destinations } from "./Data";

export default function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Destinations</Text>
      <Text style={styles.headingText}>From Delhi</Text>
      <ScrollView style={styles.scroll} horizontal={true}>
        {Destinations.map(({ id, name, startingFrom, availability, color }) => (
          <View style={{ ...styles.extra, backgroundColor: color }}>
            <View key={id} style={styles.card}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.startingFrom}>From Rs.</Text>
              <Text style={styles.bold}>{startingFrom}</Text>
            </View>
            <Text style={{ ...styles.availability }}>{availability}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 14,
    marginLeft: 2,
    marginTop: 2,
  },
  scroll: {
    height: "25%",
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    height: 80,
    width: 120,
    borderRadius: 8,
    marginTop: 0,
    padding: 5,
    shadowColor: "#000", // Black shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.62,
    elevation: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 2,
  },
  availability: {
    marginTop: 0,
    textAlign: "center",
    borderRadius: 2,
    padding: 2,
    fontWeight: "bold",
    width: "100%",
    fontSize: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  extra: {
    marginTop: 20,
    height: 100,
    width: 120,
    borderRadius: 8,
    margin: 4,
  },
});
