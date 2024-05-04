import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-paper";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { styles } from "../utils/styles";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    title: "My Bookings",
  },
  {
    id: "2",
    title: "Booking for women ",
  },
  {
    id: "3",
    title: "Wallet",
  },
  {
    id: "4",
    title: "Cards",
  },
  {
    id: "5",
    title: "Co-passenger",
  },
  {
    id: "6",
    title: "Trending Videos",
  },
  {
    id: "7",
    title: "Refer & Earn",
  },
  {
    id: "8",
    title: "Offers",
  },
  {
    id: "9",
    title: "Help",
  },
  {
    id: "10",
    title: "Call Support",
  },
  {
    id: "11",
    title: "About Us",
  },
  {
    id: "12",
    title: "Settings",
  },
  {
    id: "13",
    title: "Feedback",
  },
];

const Item = ({ title }) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.sections}>{title}</Text>
      <View style={styles.arrowContainer}>
        <Icon2 name="arrow-forward-ios" style={styles.arrow} />
      </View>
    </View>
    <Divider />
  </TouchableOpacity>
);

export default function Account() {
  const navigation = useNavigation();
  return (
    <ScrollView style={style1.container}>
      <View style={styles.title1}>
        <Text style={styles.titleTextAccountJS}>My Account</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <View style={styles.personalPortfolio}>
          <Icon name="account-circle" size={40} style={styles.icon} />
          <View style={styles.portfolioInfo}>
            <Text>Female</Text>
            <Text>8987334975</Text>
            <Text>demo2024@gmail.com</Text>
          </View>
          <Icon2 name="arrow-forward-ios" style={styles.arrow} />
        </View>
      </TouchableOpacity>
      {DATA.map((item) => (
        <Item key={item.id} title={item.title} />
      ))}
      <View style={styles.logout}>
        <Text style={styles.logoutText}>LogOut</Text>
      </View>
    </ScrollView>
  );
}

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
