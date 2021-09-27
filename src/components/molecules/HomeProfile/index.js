import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const HomeProfile = ({onPress,profile}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Image source={profile.photo} style={styles.avatar} />
            <View style={styles.text}>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container : {
        flexDirection:'row'
    },
    avatar : {
        height : 46,
        width : 46,
        borderRadius: 46/2,
        marginRight:12
    },
    text : {
        justifyContent:'center'
    },
    name : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary
    },
    profession : {
        fontSize : 12,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary
    }
})
