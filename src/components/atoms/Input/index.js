import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label,value,onChangeText,secureTextEntry,disable}) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                onFocus={onFocusForm}
                onBlur={onBlurForm} 
                style={styles.input(border,disable)} 
                value={value} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    label:{
        fontSize : 16,
        fontFamily: fonts.primary[400],
        marginBottom:6,
        color:colors.text.secondary
    },
    input : (border,disable) => (
        {
            borderWidth:1,
            borderRadius:10,
            borderColor:border,
            padding:12,
            fontFamily: fonts.primary[400],
            color : disable ? colors.button.disable.text : colors.text.primary,
            backgroundColor : disable ? colors.button.disable.background : colors.white
        }
    )
})
