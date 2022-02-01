import React, { useEffect, useState } from 'react'
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { ChatItem, Header, InputChat } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, getChatTime, getData, setDateChat, showError } from '../../utils'

const Chatting = ({navigation,route}) => {
    const doctor = route.params
    const [chatContent, setChatContent] = useState('')
    const [user, setUser] = useState({})
    const [chatData, setChatData] = useState([])


    useEffect(() => {
        getDataUserFromLocal()

        const chatID = `${user.uid}_${doctor.data.uid}`
        const urlFirebase = `chatting/${chatID}/allChat/` 

        Fire.database()
        .ref(urlFirebase)
        .on('value', snapshoot => {
            if (snapshoot.val()) {
                const dataSnapshoot = snapshoot.val()
                const allDataChat = []
                Object.keys(dataSnapshoot).map(key => {
                    const dataChat = dataSnapshoot[key]
                    const newDataChat = []
                    
                    Object.keys(dataChat).map(itemChat => {
                        newDataChat.push({
                            id : itemChat,
                            data : dataChat[itemChat]
                        })
                    })

                    allDataChat.push({
                        id : key,
                        data : newDataChat
                    })
                })
                setChatData(allDataChat)
            }
        })


    }, [doctor.data.uid,user.uid])

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res)
        })
    }

    const chatSend = () => {
        const today = new Date()
        
        const data = {
            sendBy      : user.uid,
            chatDate    : new Date().getTime(),
            chatTime    : getChatTime(today),
            chatContent : chatContent
        }
        
        const chatID = `${user.uid}_${doctor.data.uid}`

        const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}` 
        const urlMessageUser = `messages/${user.uid}/${chatID}`
        const urlMessageDoctor = `messages/${doctor.data.uid}/${chatID}`

        const dataHistoryChatForUser = {
            lastContentChat : chatContent,
            lastChatDate : today.getTime(),
            uidPartner : doctor.data.uid
        }


        const dataHistoryChatForDoctor = {
            lastContentChat : chatContent,
            lastChatDate : today.getTime(),
            uidPartner : user.uid
        }

        Fire.database()
        .ref(urlFirebase)
        .push(data)
        .then(res => {
            Fire.database().ref(urlMessageUser).set(dataHistoryChatForUser)
            Fire.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor)
            setChatContent('')
            Keyboard.dismiss()
        })
        .catch(err => {
            showError(err.message)
        })
    }

    return (
        <View style={styles.page}>
            <Header 
                type="dark-profile" 
                title={doctor.data.fullName} 
                desc={doctor.data.category}
                photo={doctor?.data?.photo?.length > 0 ? {uri : doctor.data.photo} : ILNullPhoto} 
                onPress={() => navigation.goBack()} />
            <View style={styles.content}>
               <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    ref={scroll => {
                        this.scroll = scroll;
                    }}
                    onContentSizeChange={() => this.scroll.scrollToEnd()}
               >
                    {chatData.map(chat => {
                        return(
                            <View key={chat.id}>
                                <Text style={styles.chatDate}>{chat.id}</Text>
                                {chat.data.map(itemChat =>{
                                    const isMe = itemChat.data.sendBy == user.uid
                                    return(
                                        <ChatItem 
                                            key={itemChat.id}
                                            isMe={isMe}
                                            text={itemChat.data.chatContent}
                                            date={itemChat.data.chatTime}
                                            photo={isMe ? null : (doctor?.data?.photo?.length > 0 ? {uri : doctor.data.photo} : ILNullPhoto)}
                                        />
                                    )
                                })}
                            </View>
                        )
                    })}
               </ScrollView>
            </View>
            <InputChat 
                value={chatContent}
                onChangeText={(value)=>setChatContent(value)}
                onPress={chatSend}
             />
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
