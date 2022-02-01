import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor6 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({onPress,title,desc,photo}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <Image source={photo} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container : {
        paddingVertical : 30,
        paddingHorizontal : 16,
        backgroundColor : colors.secondary,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    content : { flex:1 },
    name :{
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.white,
        textAlign : 'center',
        textTransform:'capitalize'
    },
    desc : {
        fontSize : 14,
        fontFamily : fonts.primary[400],
        color : colors.text.subTitle,
        marginTop : 6,
        textAlign : 'center',
        textTransform:'capitalize'
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2
    }
})
