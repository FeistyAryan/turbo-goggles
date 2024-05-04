import React, { useEffect, useState, useRef } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../utils/styles'
import SeatLayout from './SeatLayout/SeatLayout';
import { SeatMaps } from '../faker/busmap';
import RBSheet from 'react-native-raw-bottom-sheet';

const knowYourSeat = [
    {
        id: 1,
        seat_type: 1,
        seater_description: 'Some random information',
        sleeper_description: 'Some random text information'
    },
    {
        id: 2,
        seat_type: 2,
        seater_description: 'lorem ipsum',
        sleeper_description: 'sit dolor amet'
    },
    {
        id: 3,
        seat_type: 3,
        seater_description: 'Some random information lorem ipsum sit dolor amet',
        sleeper_description: 'lorem ipsum sit dolor amet'
    },
    {
        id: 4,
        seat_type: 4,
        seater_description: 'Some random information',
        sleeper_description: 'Some random text information'
    }
]


export default function SelectSeats({ route }) {
    const { bus_id } = route.params
    const [lowerSeatMap, setLowerSeatMap] = useState([])
    const [upperSeatMap, setUpperSeatMap] = useState([])

    const refBottomSheet = useRef()

    useEffect(() => {
        fetchSeatLayout(bus_id)
    }, [bus_id])


    useEffect(() => {
        refBottomSheet.current.open()
    }, [])




    const fetchSeatLayout = (bus_id) => {
        const { lowerDeck, upperDeck } = SeatMaps.find((seatMap) => seatMap.bus_id === bus_id)
        setLowerSeatMap(lowerDeck)
        setUpperSeatMap(upperDeck)
    }

    return (
        <SafeAreaView style={[styles.container, { paddingHorizontal: 0 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <SeatLayout isDoubleDecker={true} driverPosition='right' seatMap={lowerSeatMap} isSleeper={true} />
                    <SeatLayout isDoubleDecker={true} deckPosition={1} driverPosition='right' seatMap={upperSeatMap} isSleeper={true} />
                </View>
                <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
                    <Text style={styles.titleText}>Know your seat type</Text>

                    <View style={styles.roundedTable}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeading}>Type</Text>
                            {/* <View style={{ flexDirection: 'row', marginHorizontal: 4 }}> */}
                            <Text style={[styles.tableDivision, { fontWeight: '600' }]}>Seater</Text>
                            <Text style={[styles.tableDivision, { fontWeight: '600' }]}>Sleeper</Text>
                            {/* </View> */}
                        </View>
                        {
                            knowYourSeat.map((seat, index) =>
                                <View style={[styles.tableRow, { paddingVertical: 8 }]} key={index}>
                                    <Text style={styles.tableHeading}>{seat.seat_type}</Text>
                                    {/* <View style={{ flexDirection: 'row', marginHorizontal: 4, }}> */}
                                    <Text style={[styles.tableDivision, { fontWeight: '400' }]}>{seat.seater_description}</Text>
                                    <Text style={[styles.tableDivision, { fontWeight: '400' }]}>{seat.sleeper_description}</Text>
                                    {/* </View> */}
                                </View>
                            )
                        }


                    </View>
                </View>
            </ScrollView>

            {/* TODO: Redesign this part for complete action */}
            <RBSheet
                ref={refBottomSheet}
                useNativeDriver={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                    },
                    container: {
                        backgroundColor: '#fff',
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        elevation: 2,
                        padding: 20
                    },

                    draggableIcon: {
                        backgroundColor: '#777',
                    },
                }}
                customModalProps={{
                    animationType: 'slide',
                    statusBarTranslucent: true,
                }}
                draggable={true}
                customAvoidingViewProps={{
                    enabled: false,
                }}
            >
                <Text>Hello world! </Text>
            </RBSheet>
        </SafeAreaView>
    )
}