import { View, Text } from 'react-native'
import React from 'react'

export default function SignIn({ isLoggedIn }) {
    return (
        <View>
            <Text>SignIn</Text>
            {
                isLoggedIn && <Text>Welcome</Text>
            }
        </View>
    )
}