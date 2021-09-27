import React,{useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { Gap, Header, List, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, getData } from '../../utils'

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName : '',
        profession : '',
        photo : { ILNullPhoto }
    })
    useEffect(()=>{
        getData('user').then(res => {
            const data = res
            data.photo = {uri : res.photo}
            setProfile(data)
        })
    },[])
    const signOut = () => {
        Fire.auth().signOut().then(res => {
            navigation.replace('GetStarted')
        })
        .catch((error) => {
            // setLoading(false)
            const errorMessage = error.message;
            showMessage({
                message: errorMessage,
                type: "default",
                backgroundColor: colors.error, // background color
                color: colors.white, // text color
              });
        });
    }
    return (
        <View style={styles.container}>
            <Header title="Profile" onPress={()=>navigation.goBack()}/>
            <Gap height={40} />
            {profile.fullName.length > 0 && (
                <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />
            )}
            <Gap height={30} />
            <List name="Edit Profile" desc="Last updated yesterday" type="next" icon="edit-profile" onPress={()=>navigation.navigate('UpdateProfile')} />
            <List name="Language" desc="Available 12 languages" type="next" icon="language" />
            <List name="Give Us Rate" desc="On Google Play Store" type="next" icon="rate" />
            <List 
                name="Sign Out" d
                esc="Read our guidelines" 
                type="next" 
                icon="help"
                onPress={signOut}    
            />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white
    }
})
