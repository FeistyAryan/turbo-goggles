import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../utils/styles'
import SeatLayout from './SeatLayout/SeatLayout';
import { bus1Seating, bus3Seating } from '../utils/busmap';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function SelectSeats() {
    const [lowerSeatMap, setLowerSeatMap] = useState([])
    const [upperSeatMap, setUpperSeatMap] = useState([])
    useEffect(() => {
        setLowerSeatMap(bus1Seating.lowerDeck)
        setUpperSeatMap(bus1Seating.upperDeck)
    }, [])

    const bottomSheetRef = useRef(null)
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <SeatLayout isDoubleDecker={true} driverPosition='right' seatMap={lowerSeatMap} />
                    <SeatLayout isDoubleDecker={true} deckPosition={1} driverPosition='right' seatMap={upperSeatMap} />
                </View>
                <View>
                    <Text style={styles.titleText}>Know your seat type</Text>
                    <View style={{ borderWidth: 1, borderColor: "#c7c7c7", borderRadius: 12, height: 600, padding: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: "#c7c7c7" }}>
                            <Text style={{ fontWeight: '600', margin: 4, textAlign: 'center' }}>Type</Text>
                            <View style={{ flexDirection: 'row', marginHorizontal: 4 }}>
                                <Text style={{ fontWeight: '600', marginHorizontal: 12, textAlign: 'center' }}>Seater</Text>
                                <Text style={{ fontWeight: '600', marginHorizontal: 12, textAlign: 'center' }}>Sleeper</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} index={0} >
                <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet> */}
        </SafeAreaView>
    )
}