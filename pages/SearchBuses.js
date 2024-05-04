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
import { styles } from "../utils/styles";

export default function SearchBuses() {
  const navigation = useNavigation();

  return (
    <ScrollView style={style1.container}>
      <View style={style1.title}>
        <Text style={{ fontWeight: "bold" }}>Kashmiri Gate, Delhi</Text>
        <Text style={{ fontWeight: "bold", opacity: 0.6 }}>
          Jaipur(Rajasthan)
        </Text>
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
        <TouchableOpacity
          key={id}
          onPress={() => navigation.navigate("Passenger Details")}
        >
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
                  <Icon name="star" color="white" />
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

const style1 = StyleSheet.create({
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
});
