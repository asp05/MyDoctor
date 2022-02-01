import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILHospitalBG } from '../../assets'
import { ListHospital } from '../../components'
import { Fire } from '../../config'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    const [hospitals, setHospitals] = useState([])
    useEffect(() => {
        Fire.database()
        .ref('hospitals/')
        .once('value')
        .then(res => {
            if (res.val()) {
                const dataFilter = res.val()
                const data = dataFilter.filter(el => el !== null)
                setHospitals(data)
            }
        })
    }, [])
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>{hospitals.length} Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {hospitals.map(item => {
                        return(
                            <ListHospital key={item.id} type={item.title} name={item.name} address={item.address} picture={{uri : item.pictures}} />
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.secondary
    },
    content : {
        flex : 1,
        backgroundColor : colors.white,
        borderRadius : 20,
        marginTop : -30,
        paddingTop : 14
    },
    background : {
        height : 240,
        paddingTop : 30
    },
    title : {
        fontSize : 20,
        color : colors.white,
        textAlign : 'center',
        fontFamily : fonts.primary[600]
    },
    desc : {
        fontSize : 14,
        color : colors.white,
        textAlign : 'center',
        fontFamily : fonts.primary[300]
    }
})
