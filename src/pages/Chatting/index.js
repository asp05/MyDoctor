import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Nairobi Putri Hayza" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white
    },
    content : {
        flex :1,
    },
    chatDate : {
        marginVertical : 20,
        textAlign : 'center',
        fontSize :11,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary
    }
})
