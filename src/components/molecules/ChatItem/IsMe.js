import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const IsMe = ({text,date}) => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container : {
        paddingRight : 16,
        marginBottom : 20,
        alignItems : 'flex-end'
    },
    chatContent : {
        backgroundColor : colors.cardLight,
        padding : 12,
        maxWidth : '70%',
        borderRadius : 10,
        borderBottomRightRadius : 0
    },
    text : {
        fontSize : 14,
        color : colors.text.primary,
        fontFamily : fonts.primary[400]
    },
    date : {
        fontSize : 11,
        color : colors.text.secondary,
        fontFamily : fonts.primary[400],
        marginTop : 8
    }
})
