import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { bus } from "./buses";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SearchBuses() {
  const navigation = useNavigation()
  const [filterOptions] = useState([
    {
      iconname: "filter-variant",
      text: "Filter",
    },
    {
      iconname: "sort-variant",
      text: "Sort",
    },
    {
      iconname: 'air-conditioner',
      text: "AC",
    },
    {
      text: "SLEEPER",
    },
    {
      iconname: 'seat',
      text: "SEATER",
    }
  ])
  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal={true}
        style={styles.filter}
        contentContainerStyle={{ padding: 6, alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}>
        {
          filterOptions.map((item, idx) => (
            <TouchableOpacity style={styles.filterButton} key={idx}>
              {
                item.iconname && <Icon name={item.iconname} size={20} style={styles.filterIcon} />}
              <Text>{item.text}</Text>
            </TouchableOpacity>
          ))
        }


      </ScrollView>
      {/* TODO: Add bus tickets flatlist */}
      {bus.map((item, id) => (
        <TouchableOpacity key={id} onPress={() => navigation.navigate('seatSelection')}>
          <View style={styles.tickets} key={item.id}>
            <View style={styles.horizontal}>
              <View style={styles.vertical}>
                <Text style={styles.departureTime}>{item.departureTime}</Text>
                <Text style={styles.journeyTime}>{item.journeyDuration}</Text>
                <View style={styles.second}>
                  <Text style={styles.busProvider}>{item.busProvider}</Text>
                  <Text style={styles.busType}>{item.busType}</Text>
                </View>
              </View>
              <View style={styles.middle}>
                <Text style={styles.arrivalTime}>{item.arrivalTime}</Text>
                <Text style={styles.seats}>{item.seats} seats</Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.startingFrom}>
                  From ₹ {item.startingFrom}
                </Text>
                <View style={styles.iconDiv}>
                  <Icon name="star" />
                  <Text style={styles.ratings}>{item.ratings}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.bottom}>
              <Text>Return trip deal: Min 10% off on return ticket</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  title: {
    backgroundColor: "white",
    paddingTop: 35,
    paddingLeft: 18,
    height: 100,
  },
  tickets: {
    height: 180,
    backgroundColor: "white",
    marginTop: 20,
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 18,
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottom: {
    backgroundColor: "gold",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 5,
  },
  second: {
    marginTop: 20,
  },
  right: {
    position: "absolute",
    right: 0,
  },
  departureTime: {
    fontWeight: "bold",
  },
  journeyTime: {
    color: "gray",
  },
  seats: {
    color: "gray",
  },
  startingFrom: {
    fontWeight: "bold",
  },
  busProvider: {
    fontWeight: "bold",
  },
  busType: {
    color: "gray",
  },
  arrivalTime: {
    fontWeight: "bold",
  },
  ratings: {
    fontWeight: "bold",
  },
  iconDiv: {
    flexDirection: "row",
    backgroundColor: "limegreen",
    alignItems: "center",
    width: 50,
    borderRadius: 6,
    justifyContent: "center",
  },
  middle: {
    position: "absolute",
    left: 140,
  },
  filter: {
    height: 60,
    backgroundColor: "white",

  },
  filterButton: {
    padding: 4,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    height: 40,
    minWidth: 80,
    marginHorizontal: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
  },
  filterIcon: {
    marginRight: 5,
  },
  filterText: {
    fontWeight: "bold",
  },
});
