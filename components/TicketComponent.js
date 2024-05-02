import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../utils/styles'
export default function TicketComponent({ ticketName }) {
    return (
        <View style={styles.ticketCard}>
            <View style={styles.ticketCardHeader}>
                <Text>{ticketName}</Text>
            </View>
            <View style={styles.cardDivider}>
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>
            <View style={styles.ticketCardFooter}>
                <Text>{ticketName}</Text>
            </View>
        </View>
    )
}