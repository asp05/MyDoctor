import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { List } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = ({navigation}) => {
    const [doctor] = useState([
        {
            id : 1,
            profile : DummyDoctor1,
            name : 'Alexander Jannie',
            desc : 'Baik ibu, terima kasih banyak atas wakt...'
        },
        {
            id : 2,
            profile : DummyDoctor2,
            name : 'Nairobi Putri Hayza',
            desc : 'Oh tentu saja tidak karena jeruk it...'
        },
        {
            id : 3,
            profile : DummyDoctor3,
            name : 'John McParker Steve',
            desc : 'Oke menurut pak dokter bagaimana unt...'
        }
    ])
    return (
        <View style={styles.page}  >
           <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctor.map(doctor => {
                        return (
                            <List 
                                key={doctor.id} 
                                profile={doctor.profile} 
                                name={doctor.name} 
                                desc={doctor.desc} 
                                onPress={()=>navigation.navigate('Chatting')}
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
