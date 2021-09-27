import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
            <Button type="btn-icon-send" />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container : {
        padding : 16,
        flexDirection : 'row'
    },
    input : {
        padding : 14,
        backgroundColor : colors.disabled,
        borderRadius : 10,
        fontSize : 14,
        color : colors.text.primary,
        flex : 1,
        marginRight : 10,
        maxHeight : 45
    }
})
