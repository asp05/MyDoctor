import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name,desc,isRemove,photo,onPress}) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove &&  <IconRemovePhoto style={styles.addPhoto} />}
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress} >
                    <Image source={photo} style={styles.avatar} />
                    {isRemove &&  <IconRemovePhoto style={styles.addPhoto} />}
                </TouchableOpacity>
            )}
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    borderProfile : {
        width : 130,
        height : 130,
        borderRadius : 130 / 2,
        borderColor : colors.border,
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    avatar : {
        width : 110,
        height : 110,
        borderRadius : 110 / 2
    },
    addPhoto : {
        position:'absolute',
        bottom:8,
        right:8
    },
    name : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 16,
        textAlign : 'center'
    },
    profession : {
        fontSize : 16,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary,
        marginTop : 2,
        textAlign : 'center'
    }
})
