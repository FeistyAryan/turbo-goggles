import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../utils/styles'
import { PrimaryColor } from '../utils/colors'
import TicketComponent from '../components/TicketComponent'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Ticket',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Ticket',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Ticket',
    },
];

export default function Bookings() {
    const [tabIndex, setTabIndex] = useState(0)

    const toggleTabIndex = () => {
        if (tabIndex === 0) {
            setTabIndex(1)
        } else {
            setTabIndex(0)
        }
        console.log(tabIndex)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>My Bookings</Text>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[styles.tab, { borderBottomColor: tabIndex === 0 ? PrimaryColor : '#ededed', borderBottomWidth: tabIndex === 0 ? 4 : 0 }]} onPress={toggleTabIndex}>
                    <Text style={styles.tabLink}>completed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tab, { borderBottomColor: tabIndex === 1 ? PrimaryColor : '#ededed', borderBottomWidth: tabIndex === 1 ? 4 : 0 }]} onPress={toggleTabIndex}>
                    <Text style={styles.tabLink}>cancelled</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    tabIndex === 0 ?
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <TicketComponent ticketName={item.title} />}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ paddingBottom: 100 }}
                        />
                        :
                        <View style={styles.noBookings}>
                            <Text style={{ textAlign: 'center' }}>You dont have any cancelled bookings</Text>
                        </View>
                }
            </View>
        </SafeAreaView>
    )
}