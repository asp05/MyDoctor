import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ProfileItem = ({label,value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container : {
        padding : 16,
        borderBottomWidth : 1,
        borderColor : colors.border
    },
    label : {
        fontSize : 16,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary,
        marginBottom : 6
    },
    value : {
        fontSize : 16,
        color : colors.text.primary,
        fontFamily : fonts.primary[400],
    }
})
