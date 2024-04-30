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

export default function SearchBuses() {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold" }}>Kashmiri Gate, Delhi</Text>
        <Text style={{ fontWeight: "bold" }}>Jaipur(Rajasthan)</Text>
      </View>
      <ScrollView horizontal={true} style={styles.filter}>
        <View style={styles.items}>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-variant" size={20} style={styles.filterIcon} />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="sort-variant" size={20} style={styles.filterIcon} />
            <Text style={styles.filterText}>Sort</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>AC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>SLEEPER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Single Seat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>SEATER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {bus.map((item, id) => (
        <TouchableOpacity key={id} onPress={() => navigation.navigate('AddPassenger')}>
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
    height: 50,
    backgroundColor: "white",
  },
  items: {
    paddingHorizontal: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    height: 40,
    marginLeft: 16,
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterIcon: {
    marginRight: 5,
  },
  filterText: {
    fontWeight: "bold",
  },
});
