import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const List = ({profile,name,desc,type,onPress,icon}) => {
    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconEditProfile/>
        }
        if (icon === 'language') {
            return <IconLanguage/>
        }
        if (icon === 'rate') {
            return <IconRate/>
        }
        if (icon === 'help') {
            return <IconHelp/>
        }
        return <IconEditProfile/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            {icon ? <Icon/> : <Image source={profile} style={styles.avatar} />}
            <View style={styles.wrapperName(icon)}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext />}
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container : {
        padding : 16,
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderColor : colors.border,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2
    },
    wrapperName : (icon) =>  (
        {
            flex:1,
            marginLeft: icon ? 16 : 12
        }
    ),
    name : {
        fontSize : 16,
        fontFamily : fonts.primary[400],
        color : colors.text.primary,
        textTransform : 'capitalize',
    },
    desc : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary,
        textTransform : 'capitalize',
    }
})
