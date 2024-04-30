import { View, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { PrimaryColor } from '../utils/colors'
import { width } from '../utils/styles'

export default function OTPComponent() {
    const [digits] = useState(6)
    const [otpValues, setOtpValues] = useState(Array(digits).fill(''))
    const otpRef = useRef([])

    const handleTextChange = (index, text) => {
        const newOtpValues = [...otpValues]
        newOtpValues[index] = text
        setOtpValues(newOtpValues)

        if (text.length === 1 && index < digits - 1) {
            otpRef.current[index + 1].focus()
        } else if (text.length === 0 && index > 0) {
            otpRef.current[index - 1].focus()
        }
    }

    const handleDone = () => {
        const otp = otpValues.join('')
        console.log("OTP:", otp)
    }

    return (
        <View style={{ flexDirection: 'row', width: width - 60, padding: 4, marginVertical: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            {
                Array(digits).fill().map((_, index) => (
                    <TextInput
                        key={index}
                        ref={ref => otpRef.current[index] = ref}
                        maxLength={1}
                        returnKeyType={index === digits - 1 ? 'done' : 'next'}
                        keyboardType='number-pad'
                        cursorColor={PrimaryColor}
                        value={otpValues[index]}
                        style={{
                            borderBottomWidth: 2,
                            borderBottomColor: PrimaryColor,
                            height: 40,
                            width: ((width - 60) / digits) - 10,
                            fontSize: 24,
                            textAlign: 'center',
                            shadowOpacity: 0.8,
                            shadowRadius: 4,
                            shadowColor: PrimaryColor,
                            shadowOffset: { width: 0, height: 2 },
                            marginHorizontal: 6
                        }}
                        onChangeText={text => handleTextChange(index, text)}
                        onSubmitEditing={() => {
                            if (index === digits - 1) {
                                handleDone()
                            }
                        }}
                    />
                ))
            }
        </View>
    )
}
