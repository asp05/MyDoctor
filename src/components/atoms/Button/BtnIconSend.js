import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconSendDark, IconSendrLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable,onPress}) => {
    if (disable) {
        return(
            <View style={styles.container(disable)}>
                {disable && <IconSendDark/>}
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(disable)} onPress={onPress} >
            <IconSendrLight/>
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container : (disable) =>  (
        {
            backgroundColor : disable ? colors.disabled : colors.tertiary,
            width : 45,
            height : 45,
            borderRadius :10,
            paddingTop : 3,
            paddingRight : 3,
            paddingLeft : 8,
            paddingBottom : 8
        }
    )
})
