import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnIconSend from './BtnIconSend'
import IconOnly from './IconOnly'

export default function Button({type,title,onPress,icon,disable}) {
    if (type === 'btn-icon-send') {
        return <BtnIconSend disable={disable} onPress={onPress} />
    }
    if (type === 'icon-only') {
        return <IconOnly onPress={onPress} icon={icon} />
    }
    if (disable) {
        return (
            <View style={styles.disableBg} >
                <Text style={styles.disableText}>{title}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.title(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : (type) => ({
        backgroundColor : type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical:10,
        borderRadius:10
    }),
    disableBg : {
        backgroundColor : colors.button.disable.background,
        paddingVertical:10,
        borderRadius:10
    },
    disableText : {
        textAlign:'center',
        fontSize:18,
        fontFamily:fonts.primary[600],
        color : colors.button.disable.text
    },
    title : (type) => ({
        color:type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text ,
        textAlign:'center',
        fontSize:18,
        fontFamily:fonts.primary[600]
    })
})
