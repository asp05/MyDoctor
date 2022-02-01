import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, ILNullPhoto } from '../../assets'
import { List } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, getData } from '../../utils'

const Messages = ({navigation}) => {
    const [user, setUser] = useState({})
    const [historyChat,setHistoryChat] = useState([])

    useEffect(() => {
        getDataUserFromLocal()
        const rootDB =Fire.database().ref() 
        const urlFirebase = `messages/${user.uid}`
        
        rootDB.child(urlFirebase).on('value',async snapshoot => {
            if (snapshoot.val()) {
                const oldData = snapshoot.val()
                const data = []
                const promises = await Object.keys(oldData).map( async key=>{
                    const urlUidDoctor = `doctors/${oldData[key].uidPartner}`
                    const detailDoctor = await rootDB.child(urlUidDoctor).once('value')
                    data.push({
                        id : key,
                        detailDoctor : detailDoctor.val(),
                        ...oldData[key]
                    })
                })
                await Promise.all(promises)
                console.log(data)
                setHistoryChat(data)
            }
        })
        

    }, [user.uid])

    const getDataUserFromLocal =()=>{
        getData('user').then(res=>{
            setUser(res)
        })
    }

    return (
        <View style={styles.page}  >
           <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    historyChat.map(item => {
                        const dataDoctor = {
                            id : item.detailDoctor.uid,
                            data : item.detailDoctor
                        }
                        console.log(item.lastContentChat)
                        return (
                            <List 
                                key={item.id} 
                                profile={item?.detailDoctor?.photo?.length > 0 ? {uri : item.detailDoctor.photo} : ILNullPhoto} 
                                name={item.detailDoctor.fullName} 
                                desc={item.lastContentChat} 
                                onPress={()=>navigation.navigate('Chatting',dataDoctor)}
                                />
                        )
                    })
                }
           </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.secondary,
    },
    content : {
        flex : 1,
        backgroundColor : colors.white,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginLeft : 16,
        marginTop:30
    }
})
