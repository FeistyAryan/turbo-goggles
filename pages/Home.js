import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import LocationSelector from '../components/LocationSelector'
import { Modal, Portal, Provider } from 'react-native-paper'
import DateTimePicker from 'react-native-ui-datepicker'
import dayjs from 'dayjs'
import { PrimaryColor } from '../utils/colors'


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
    return (
        <Provider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText} >Bus tickets</Text>
                <LocationSelector handleDatePicker={toggleDatePicker} selectedDate={date} />
                <TouchableOpacity style={styles.buttonPrimary} >
                    <Icon name='search' size={24} color='#fff' />
                    <Text style={styles.buttonTextPimary}>Search Buses</Text>
                </TouchableOpacity>
                <Text style={styles.titleText} >Book your return trip</Text>
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
            </SafeAreaView>
        </Provider>
    )
}