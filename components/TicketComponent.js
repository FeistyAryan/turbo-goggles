import { View, Text } from "react-native";
import React from "react";
import { styles } from "../utils/styles";
import { Divider } from "react-native-paper";
export default function TicketComponent({
  Traveldate,
  Travelday,
  transportName,
  Departuretime,
  DepartureAddress,
  TimeDuration,
  ArrivalTime,
  ArrivalAddress,
  TicketNo,
  PNR,
  Fare,
  PickUpPoint,
  DropPoint,
  BusProvider,
  BusType,
}) {
  return (
    <View style={styles.ticketCard}>
      <View style={styles.ticketCardHeader}>
        {/* <Text>{date}</Text> */}
        <View style={styles.ticketDivider}>
          <Text style={styles.Traveldate}>{Traveldate}</Text>
          <Text style={styles.BusProvider}>{BusProvider}</Text>
        </View>
        <View style={styles.ticketDivider}>
          <Text style={styles.Travelday}>{Travelday}</Text>
          <Text style={styles.BusType}>{BusType}</Text>
        </View>

        <Text style={styles.transportName}>{transportName}</Text>
        <Divider style={styles.dividerInTicket} />

        <View style={styles.ticketDivider2}>
          <Text style={styles.DepartureTime}>{Departuretime}</Text>
          <Text style={styles.TimeDuration}>{TimeDuration}</Text>
          <Text style={styles.ArrivalTime}>{ArrivalTime}</Text>
        </View>

        <View style={styles.ticketDivider2}>
          <Text style={styles.DepartureAddress}>{DepartureAddress}</Text>
          <Text style={styles.ArrivalAddress}>{ArrivalAddress}</Text>
        </View>

        <View style={styles.ticketRowAlign}>
          <View style={styles.ticketColumnAlign}>
            <Text style={styles.PickUpPoint}>{PickUpPoint}</Text>
          </View>
          <View style={styles.ticketColumnAlign}>
            <Text style={styles.DropPoint}>{DropPoint}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardDivider}>
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
      <View style={styles.ticketCardFooter}>
        <View style={styles.ticketDivider}>
          <View>
            <Text> Seat No</Text>
          </View>
          <View>
            <Text style={styles.Fare}>13 - Prabhakar Mishra</Text>
            <Text style={styles.Fare}>14 - Manoj Kadu</Text>
            <Text style={styles.Fare}>15 - Surendra Korde</Text>
          </View>
        </View>
        <Divider style={styles.dividerthin} />
        <View style={[styles.ticketDivider, styles.external]}>
          <Text>Ticket No.</Text>
          <Text style={styles.TicketNo}>{TicketNo}</Text>
        </View>
        <Divider style={styles.dividerthin} />
        <View style={[styles.ticketDivider, styles.external]}>
          <Text>Fare :</Text>
          <Text style={styles.Fare}>{Fare}</Text>
        </View>
      </View>
    </View>
  );
}
