import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { colors, fonts } from '../../../utils'

const Loading = ({onPress}) => {
    return (
        <View style={styles.wrapper} onPress={onPress}>
            <ActivityIndicator size="large" color={colors.primary} animating={true} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        position : 'absolute',
        justifyContent : 'center',
        alignItems:'center',
        width : '100%',
        height : '100%',
        backgroundColor : colors.loadingBackground
    },
    text : {
        fontSize :18,
        color : colors.primary,
        fontFamily : fonts.primary[600],
        marginTop : 10
    }
})
