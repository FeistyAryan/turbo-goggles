import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function PNR() {
  return (
    <View style ={styles.container}>
      <View style={styles.back}>
      <Text>Live PNR updates</Text>
      <Text>Get available from seat for WL PNR</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styles:{
    backgroundColor:"gray",
    height:300,
    margin:8,
  }
});
