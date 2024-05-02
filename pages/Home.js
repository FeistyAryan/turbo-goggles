import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import LocationSelector from '../components/LocationSelector'
import { Modal, Portal, Provider } from 'react-native-paper'
import DateTimePicker from 'react-native-ui-datepicker'
import dayjs from 'dayjs'
import { PrimaryColor } from '../utils/colors'
import { useNavigation } from '@react-navigation/native'
import Offers from '../components/Offers'
import RateUs from '../components/RateUs'

export default function Home() {
    const [date, setDate] = useState(dayjs())
    const [visible, setVisible] = useState(false)
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
    const navigation = useNavigation()
    return (
        <Provider>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleText} >Bus tickets</Text>
                    <LocationSelector handleDatePicker={toggleDatePicker} selectedDate={date} />
                    <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('SearchBus')} >
                        <Icon name='search' size={24} color='#fff' />
                        <Text style={styles.buttonTextPimary}>Search Buses</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleText} >Book your return trip</Text>
                    {/* Insert your components here */}
                    <Offers />
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