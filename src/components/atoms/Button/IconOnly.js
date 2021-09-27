import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBackDark, IconBackLigtht } from '../../../assets'

const IconOnly = ({onPress,icon}) => {
    const Icon = ()=>{
        if (icon === 'back-dark') {
            return <IconBackDark/>
        }
        if (icon === 'back-light') {
            return <IconBackLigtht/>
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly

