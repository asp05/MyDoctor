import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type="Rumah Sakit " name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20" picture={DummyHospital1} />
                <ListHospital type="Rumah Sakit Anak" name="Happy Family & Kids" address="Jln. Surya Sejahtera 20" picture={DummyHospital2} />
                <ListHospital type="Rumah Sakit Jiwa" name="Tingkatan Paling Atas" address="Jln. Surya Sejahtera 20" picture={DummyHospital3} />
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
