import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({title,size,align,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.title(size,align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    title:(size,align) =>({
        color:colors.text.secondary,
        fontFamily: fonts.primary[400],
        textDecorationLine:'underline',
        fontSize :size,
        textAlign : align
    })
})
