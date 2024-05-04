import { Image, Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../utils/styles'
import OTPComponent from '../components/OTPComponent'
import { useNavigation } from '@react-navigation/native'
import { PrimaryColor } from '../utils/colors'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function OTPPage() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[styles.container, { justifyContent: 'space-between' }]}>
            <View style={{ marginVertical: 20, alignItems: 'center' }}>
                <Image
                    source={require('../assets/hero.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={[styles.heading, { marginTop: 60 }]}>Verification</Text>
                <Text style={styles.labelStyle}>A 6-digit otp is sent to your number</Text>
            </View>

            <View style={{ minHeight: 200 }}>
                <OTPComponent digit={6} />
                <PrimaryButton onClick={() => navigation.navigate('Main')} title='Verify' />
            </View>

            <View style={{ alignItems: 'center', paddingBottom: 60 }}>
                <Text style={styles.labelStyle}>
                    Didn't you receive any code?
                </Text>

                <TouchableOpacity onPress={() => alert('New code sent')}>
                    <Text style={{ color: PrimaryColor, fontWeight: 'bold', fontSize: 16 }}>Resend New Code</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}