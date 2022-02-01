import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'


const windowWidth = Dimensions.get("window").width;

const Other = ({text,date,photo}) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
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
        flexDirection : 'row',
    },
    chatContent : {
        backgroundColor : colors.primary,
        padding : 12,
        maxWidth : windowWidth/1.5,
        borderRadius : 10,
        borderBottomLeftRadius : 0,
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
