import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation,route}) => {
    const dataDoctor = route.params
    return (
        <View style={styles.page}>
            <Header title="Dokter Pofile" onPress={()=>navigation.goBack()} />
            <Gap height={40}/> 
            <Profile 
                name={dataDoctor.data.fullName} 
                desc={dataDoctor.data.profession}  
                photo={dataDoctor?.data?.photo?.length > 0 ? {uri : dataDoctor.data.photo} : ILNullPhoto} />
            <Gap height={26} />
            <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
            <ProfileItem label="Tempat Praktik" value={dataDoctor.data.hospital_address} />
            <ProfileItem label="No. STR" value={dataDoctor.data.str_number} />
            <View style={styles.action}>
                <Button title="Start Consultation" onPress={()=>navigation.navigate('Chatting',dataDoctor)} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white
    },
    action : {
        paddingHorizontal : 40,
        paddingTop : 23
    }
})
