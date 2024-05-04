import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "../utils/styles";
import { PrimaryColor } from "../utils/colors";
import TicketComponent from "../components/TicketComponent";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    Traveldate: "29 March",
    Travelday: "Friday",
    Transportname: "ShivGanga Travels 2/2 AC,Sleeper",
    Departuretime: "3:00 pm",
    DepartureAddress: "New-Delhi",
    TimeDuration: "7hr:00",
    ArrivalTime: "10:00 pm",
    ArrivalAddress: "Jaipur",
    TicketNo: "TN6Q18603433",
    PNR: "PNR  64ZAJC6P",
    Fare: "₹ 980.00",
    BusProvider: "Prasanna Purple Grand",
    BusType: "A/C Sleeper(2+1)",
    PickUpPoint:
      "Dharampeeth-Prasanna Purple,Near Bhole petrol pump, New Delhi",
    DropPoint: "Prasanna Purple, Mahada Complex Nr. Baba Petrol Pump",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    Traveldate: "20 February",
    Travelday: "Tuesday",
    Transportname: "Tirumurti Travels",
    Departuretime: "6:00 pm",
    DepartureAddress: "Jaipur",
    TimeDuration: "4hr:00",
    ArrivalTime: "6:00 am",
    ArrivalAddress: "Lucknow",
    TicketNo: " TN6Q18603433",
    PNR: "PNR  64ZAJC6P",
    Fare: "₹ 980.00",
    BusProvider: "Prasanna Purple Grand",
    BusType: "A/C Sleeper(2+1)",
    PickUpPoint:
      "Dharampeeth-Prasanna Purple,Near Bhole petrol pump, New Delhi",
    DropPoint: "Prasanna Purple, Mahada Complex Nr. Baba Petrol Pump",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    Traveldate: "5 February",
    Travelday: "Monday",
    Transportname: "OM Travels",
    Departuretime: "5:00 am",
    DepartureAddress: "Chandigarh",
    TimeDuration: "6hr:00",
    ArrivalTime: "11:00 am",
    ArrivalAddress: "Shimla",
    TicketNo: " TN6Q18603433",
    PNR: " 64ZAJC6P",
    Fare: "₹ 980.00",
    BusProvider: "Prasanna Purple Grand",
    BusType: "A/C Sleeper(2+1)",
    PickUpPoint:
      "Dharampeeth-Prasanna Purple,Near Bhole petrol pump, New Delhi",
    DropPoint: "Prasanna Purple, Mahada Complex Nr. Baba Petrol Pump",
  },
];

export default function Bookings() {
  const [tabIndex, setTabIndex] = useState(0);

  const toggleTabIndex = () => {
    if (tabIndex === 0) {
      setTabIndex(1);
    } else {
      setTabIndex(0);
    }
    console.log(tabIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>My Bookings</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.tab,
            {
              borderBottomColor: tabIndex === 0 ? PrimaryColor : "#ededed",
              borderBottomWidth: tabIndex === 0 ? 4 : 0,
            },
          ]}
          onPress={toggleTabIndex}
        >
          <Text style={styles.tabLink}>completed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            {
              borderBottomColor: tabIndex === 1 ? PrimaryColor : "#ededed",
              borderBottomWidth: tabIndex === 1 ? 4 : 0,
            },
          ]}
          onPress={toggleTabIndex}
        >
          <Text style={styles.tabLink}>cancelled</Text>
        </TouchableOpacity>
      </View>
      <View>
        {tabIndex === 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <TicketComponent
                Traveldate={item.Traveldate}
                Travelday={item.Travelday}
                Transportname={item.Transportname}
                Departuretime={item.Departuretime}
                DepartureAddress={item.DepartureAddress}
                TimeDuration={item.TimeDuration}
                ArrivalTime={item.ArrivalTime}
                ArrivalAddress={item.ArrivalAddress}
                TicketNo={item.TicketNo}
                PNR={item.PNR}
                Fare={item.Fare}
                BusProvider={item.BusProvider}
                BusType={item.BusType}
                PickUpPoint={item.PickUpPoint}
                DropPoint={item.DropPoint}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        ) : (
          <View style={styles.noBookings}>
            <Text style={{ textAlign: "center" }}>
              You dont have any cancelled bookings
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
