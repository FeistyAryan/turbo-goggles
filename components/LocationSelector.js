import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles, width } from '../utils/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { PrimaryColor } from '../utils/colors'
import dayjs from 'dayjs'

export default function LocationSelector({ handleDatePicker, selectedDate }) {

    const [isFocused, setIsFocused] = useState(false)
    const [selection, setSelection] = useState(dayjs(selectedDate).format('ddd,D MMM'))
    useEffect(() => {
        handleDatePicker(isFocused)

    }, [isFocused, selectedDate])

    useEffect(() => {
        setSelection(dayjs(selectedDate).format('ddd,D MMM'))
        console.log(selection)
    }, [selectedDate])



    return (
        <View style={styles.locationContainer}>
            <View style={styles.pickDropSelector}>
                <Icon name='bus' size={28} color="#777" />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.labelStyle}>From</Text>
                    <TextInput
                        style={styles.cityTextInput}
                        placeholder='Banglore'
                        clearTextOnFocus={true}
                        placeholderTextColor='#000'
                        cursorColor={PrimaryColor}
                        maxLength={48}
                        multiline={false}
                        numberOfLines={1}

                    />
                </View>
            </View>

            <View style={styles.pickDropSelector}>
                <Icon name='bus' size={28} color="#777" />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.labelStyle}>To</Text>
                    <TextInput
                        style={styles.cityTextInput}
                        placeholder='Banglore'
                        placeholderTextColor='#000'
                        cursorColor={PrimaryColor}
                        maxLength={48}
                        multiline={false}
                        numberOfLines={1}
                    />
                </View>
            </View>

            <View style={[styles.pickDropSelector, { borderBottomWidth: 0 }]}>
                <Icon name='calendar-number' size={28} color="#777" />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.labelStyle}>Date of Journey</Text>

                    <Text
                        style={[styles.cityTextInput, { width: width / 3 }]}
                        onPress={() => setIsFocused(!isFocused)}
                    >{selection}</Text>
                </View>
                {/* Quick Date Selection */}
                <TouchableOpacity
                    style={[styles.buttonPrimary,
                    {
                        height: 24,
                        borderRadius: 4,
                        backgroundColor: '#D63942CC',
                        marginVertical: 0,
                        marginHorizontal: 4
                    }]}>
                    <Text style={[styles.buttonTextPimary, { fontSize: 12 }]}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonPrimary,
                {
                    height: 24,
                    borderRadius: 4,
                    backgroundColor: '#D63942CC',
                    marginVertical: 0,
                    marginHorizontal: 4
                }]}>
                    <Text style={[styles.buttonTextPimary, { fontSize: 12 }]}>Tomorrow</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}