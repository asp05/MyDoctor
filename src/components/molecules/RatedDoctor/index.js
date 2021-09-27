import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = ({name,desc,avatar,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingBottom : 16
    },
    avatar : {
        width : 50,
        height : 50,
        borderRadius : 50/2,
        marginRight : 12
    },
    profile : {
        flex : 1,
        justifyContent : 'center'
    },
    name : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary
    },
    category : {
        fontSize : 12,
        fontFamily : fonts.primary[400],
        color : colors.text.primary,
        marginTop:2
    },
    rate : {
        flexDirection :'row',
    }
})
