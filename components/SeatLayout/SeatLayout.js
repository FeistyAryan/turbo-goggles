import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import SleeperIcon from '../../assets/sleeper.png'
import SeatIcon from '../../assets/seat.png'
import SelectedSleeperIcon from '../../assets/selected_sleeper.png'
import SelectedSeatIcon from '../../assets/selected_seat.png'

export default function SeatLayout({ seatMap, driverPosition = 'left', isDoubleDecker = false, deckPosition = 0 }) {
    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(seatMap)
    }, [seatMap])

    const toggleSeatSelection = (rowIndex, column, index) => {
        setArr(prevArr => {
            const updatedArr = [...prevArr];
            if (column === 'columnOne') {
                const currentStatus = updatedArr[rowIndex].columnOne[index];
                updatedArr[rowIndex].columnOne[index] = currentStatus === 'seat' ? 'selectedSeat' : currentStatus === 'selectedSeat' ? 'seat' : currentStatus === 'sleeper' ? 'selectedSleeper' : 'sleeper';
            } else {
                const currentStatus = updatedArr[rowIndex].columnTwo[index];
                updatedArr[rowIndex].columnTwo[index] = currentStatus === 'seat' ? 'selectedSeat' : currentStatus === 'selectedSeat' ? 'seat' : currentStatus === 'sleeper' ? 'selectedSleeper' : 'sleeper';
            }
            return updatedArr;
        });
    }

    return (
        <View style={styles.seatContainer}>
            {!isDoubleDecker && (
                <View style={styles.driverContainer}>
                    <Image source={require('../../assets/steering-wheel.png')} style={[styles.steeringWheel, { alignSelf: driverPosition === 'left' ? 'flex-start' : 'flex-end' }]} />
                </View>
            )}
            {isDoubleDecker && deckPosition === 0 && (
                <View style={styles.driverContainer}>
                    <Image source={require('../../assets/steering-wheel.png')} style={[styles.steeringWheel, { alignSelf: driverPosition === 'left' ? 'flex-start' : 'flex-end' }]} />
                </View>
            )}
            {isDoubleDecker && deckPosition === 0 && (
                <Text style={[styles.deckText, { left: -40, top: 100 }]}>Lower Deck</Text>
            )}
            {isDoubleDecker && deckPosition === 1 && (
                <Text style={[styles.deckText, { left: -40, top: 100 }]}>Upper Deck</Text>
            )}
            <View style={{ borderTopColor: '#c7c7c7', borderTopWidth: 1, marginTop: deckPosition === 1 ? 52 : 4, padding: 4 }}>
                {arr.map((item, rowIndex) => (
                    <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 80 }}>
                            {item.columnOne.map((seat, index) => (
                                <TouchableOpacity key={index} onPress={() => toggleSeatSelection(rowIndex, 'columnOne', index)}>
                                    <Image
                                        source={seat === 'seat' ? SeatIcon : seat === 'selectedSeat' ? SelectedSeatIcon : seat === 'selectedSleeper' ? SelectedSleeperIcon : SleeperIcon}
                                        style={{ height: seat === 'seat' || seat === 'selectedSeat' ? 36 : 56, width: seat === 'seat' || seat === 'selectedSeat' ? 36 : 36, margin: 2 }}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 80 }}>
                            {item.columnTwo.map((seat, index) => (
                                <TouchableOpacity key={index} onPress={() => toggleSeatSelection(rowIndex, 'columnTwo', index)}>
                                    <Image
                                        source={seat === 'seat' ? SeatIcon : seat === 'selectedSeat' ? SelectedSeatIcon : seat === 'selectedSleeper' ? SelectedSleeperIcon : SleeperIcon}
                                        style={{ height: seat === 'seat' || seat === 'selectedSeat' ? 36 : 56, width: seat === 'seat' || seat === 'selectedSeat' ? 36 : 36, margin: 2 }}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    seatContainer: {
        flex: 1,
        padding: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#c7c7c7",
        marginHorizontal: 4,
        backgroundColor: '#fff'
    },
    driverContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    steeringWheel: {
        height: 32,
        width: 32,
        margin: 4,
    },
    deckText: {
        fontWeight: 'bold',
        fontSize: 16,
        position: 'absolute',
        transform: [{ rotate: '-90deg' }],
    },
})
