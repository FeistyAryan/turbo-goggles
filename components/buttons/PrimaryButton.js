import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../utils/styles'

export default function PrimaryButton({ style, onClick, isIconButton, iconName, title }) {
    return (
        <TouchableOpacity style={[styles.buttonPrimary, style]} onPress={onClick} >
            {
                isIconButton && <Icon name={iconName} size={24} color='#fff' />
            }

            <Text style={styles.buttonTextPimary}>{title}</Text>
        </TouchableOpacity>
    )
}