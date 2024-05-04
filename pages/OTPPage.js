import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../utils/styles'
import OTPComponent from '../components/OTPComponent'
import { useNavigation } from '@react-navigation/native'

export default function OTPPage() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[styles.container,{justifyContent:'center',alignItems:'center'}]}>
            <Text>A 6-digit otp is sent to your number </Text>
            <OTPComponent />
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonTextPimary}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}