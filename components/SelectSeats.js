import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from '../utils/styles'
import SeatLayout from './SeatLayout/SeatLayout';
import { bus1Seating, bus3Seating } from '../utils/busmap';
export default function SelectSeats() {
    const [lowerSeatMap, setLowerSeatMap] = useState([])
    const [upperSeatMap, setUpperSeatMap] = useState([])
    useEffect(() => {
        setLowerSeatMap(bus1Seating.lowerDeck)
        setUpperSeatMap(bus1Seating.upperDeck)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <SeatLayout isDoubleDecker={true} driverPosition='right' seatMap={lowerSeatMap} />
                <SeatLayout isDoubleDecker={true} deckPosition={1} driverPosition='right' seatMap={upperSeatMap} />
            </View>
        </SafeAreaView>
    )
}