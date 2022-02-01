import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { Header, List } from '../../components'
import { Fire } from '../../config'
import { colors, showError } from '../../utils'

const ChooseDoctor = ({navigation,route}) => {
    const category = route.params.name
    const [listDoctor, setListDoctor] = useState([])
    useEffect(() => {
        getDoctorByCategory()
    }, [])
    
    const getDoctorByCategory =()=>{
        Fire.database()
        .ref('doctors/')
        .orderByChild('category')
        .equalTo(category)
        .once('value')
        .then(res=>{
            if (res.val()) {
                const oldData = res.val()
                const data = []
                Object.keys(oldData).map(key => {
                    data.push({
                        id : key,
                        data : oldData[key]
                    })
                })
                setListDoctor(data)
            }
        })
        .catch(err=>{
            showError(err.message)
        })
    }

    return (
        <View style={styles.page}>
            <Header type="dark" title={`pilih ${category}`} onPress={() => navigation.goBack()} />
            {listDoctor.map(item => {
                return(
                    <List 
                        key={item.id}
                        type="next" 
                        profile={item?.data?.photo?.length > 0 ? {uri : item.data.photo} : ILNullPhoto } 
                        name={item.data.fullName} 
                        desc={item.data.gender} 
                        onPress={()=>navigation.navigate('DoctorProfile',item)}
                    />
                )
            })}
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white,
    }
})
