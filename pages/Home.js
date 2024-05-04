import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { styles } from '../utils/styles'
import LocationSelector from '../components/LocationSelector'
import { Modal, Portal, Provider } from 'react-native-paper'
import DateTimePicker from 'react-native-ui-datepicker'
import dayjs from 'dayjs'
import { PrimaryColor } from '../utils/colors'
import { useNavigation } from '@react-navigation/native'
import Offers from '../components/Offers'
import RateUs from '../components/RateUs'
import Card from '../components/Card'
import PrimaryButton from '../components/buttons/PrimaryButton'
import { routeMaps } from '../faker/routemaps'
import { DATA } from '../faker/buses'

export default function Home() {
    const [date, setDate] = useState(dayjs())
    const [visible, setVisible] = useState(false)
    const [pickup, setPickup] = useState("")
    const [destination, setDestination] = useState("")
    const toggleDatePicker = (isFocused) => {
        setVisible(isFocused)
    }
    const hideModal = () => {
        setVisible(false)
    }
    const toggleVisibility = (selectedDate) => {
        setVisible(false)
        if (selectedDate) {
            setDate(selectedDate);
        }
        console.log(selectedDate)
    }

    const searchBus = () => {
        if (pickup !== '' && destination !== '') {
            const routeMap = routeMaps.find(({ origin, destination }) =>
                origin.toLowerCase() === pickup.toLowerCase() &&
                destination.toLowerCase() === destination.toLowerCase()
            );
            if (!routeMap) {
                alert(`No Bus Found on Route`);
                return;
            }
            if (routeMap) {
                const { buses } = routeMap
                const ids = buses.map(bus => bus.bus_id)
                const busesOnRoute = DATA.filter((item) => ids.includes(item.id))
                navigation.navigate('SearchBus', { busesOnRoute })
            }
            return;
            // FIXME: add method to filter buses based on origin and destination
        }

        alert('Please enter a valid origin and destination');

        // TODO: add method to filter buses based on locations
    }


    const navigation = useNavigation()
    return (
        <Provider>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleText} >Bus tickets</Text>
                    <LocationSelector
                        handleDatePicker={toggleDatePicker}
                        selectedDate={date}
                        setPickupLocation={setPickup}
                        setDestinationLocation={setDestination}
                    />

                    <PrimaryButton onClick={searchBus} isIconButton={true} iconName='search' title='Search Buses' />
                    {/* Insert your components here */}
                    <Offers />
                    <Card />
                    <RateUs />
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainerStyle} >
                            <Text style={[styles.titleText, { textAlign: 'center' }]}>Pick a date to travel</Text>
                            <DateTimePicker
                                mode="single"
                                date={date}
                                onChange={(params) => toggleVisibility(params.date)}
                                selectedItemColor={PrimaryColor}

                            />
                        </Modal>
                    </Portal>
                </ScrollView>
            </SafeAreaView>
        </Provider>
    )
}