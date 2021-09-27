import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const NewsItem = ({title,date,image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={{uri : image}} style={styles.image} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderColor : colors.border,
        paddingBottom : 12,
        paddingTop : 16,
        paddingHorizontal : 16
    },
    titleWrapper : {
        flex : 1
    },
    title : {
        fontSize : 16,
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        maxWidth : '90%'
    },

    date : {
        fontSize : 12,
        color : colors.text.secondary,
        fontFamily : fonts.primary[400]
    },
    image : { 
        width :80,
        height:60,
        borderRadius : 11
    }
})
