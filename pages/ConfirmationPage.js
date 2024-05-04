import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import LottieView from "lottie-react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../utils/styles";
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
export default function ConfirmationPage() {
  // Create a ref for the LottieView
  const confettiRef = useRef();
  return (
    <>
      <LottieView
        ref={confettiRef}
        source={require("../assets/confetti.json")}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <View style={styles.checkDiv}>
          <Icon name="checkbox-marked-circle" size={30} style={styles.check} />
          <Text style={styles.confirmation}>Your booking is confirmed!</Text>
        </View>
        <View>
          <TicketComponent
            Traveldate={DATA[0].Traveldate}
            Travelday={DATA[0].Travelday}
            Transportname={DATA[0].Transportname}
            Departuretime={DATA[0].Departuretime}
            DepartureAddress={DATA[0].DepartureAddress}
            TimeDuration={DATA[0].TimeDuration}
            ArrivalTime={DATA[0].ArrivalTime}
            ArrivalAddress={DATA[0].ArrivalAddress}
            TicketNo={DATA[0].TicketNo}
            PNR={DATA[0].PNR}
            Fare={DATA[0].Fare}
            BusProvider={DATA[0].BusProvider}
            BusType={DATA[0].BusType}
            PickUpPoint={DATA[0].PickUpPoint}
            DropPoint={DATA[0].DropPoint}
          />
        </View>
      </View>
      <View style={styles.share}>
        <TouchableOpacity style={styles.down}>
          <Icon name="cancel" size={20} style={styles.end} />
          <Text style={styles.cancel}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.down}>
          <Icon name="share-variant" size={20} style={styles.end} />
          <Text style={styles.cancel}>SHARE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
