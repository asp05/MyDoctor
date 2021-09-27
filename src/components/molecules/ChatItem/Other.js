import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor6 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor6} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Oh tentu saja tidak karena jeruk itu sangat sehat...</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container : {
        paddingLeft : 16,
        marginBottom : 20,
        alignItems : 'flex-end',
        flexDirection : 'row'
    },
    chatContent : {
        backgroundColor : colors.primary,
        padding : 12,
        maxWidth : '80%',
        borderRadius : 10,
        borderBottomLeftRadius : 0
    },
    avatar : {
        height : 30,
        width : 30,
        borderRadius : 30/2,
        marginRight : 12
    },
    text : {
        fontSize : 14,
        color : colors.white,
        fontFamily : fonts.primary[400]
    },
    date : {
        fontSize : 11,
        color : colors.text.secondary,
        fontFamily : fonts.primary[400],
        marginTop : 8
    }
})
