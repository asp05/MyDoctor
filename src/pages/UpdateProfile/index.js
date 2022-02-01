import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Input, Loading, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, getData, showError, storeData } from '../../utils'

const UpdateProfile = ({navigation}) => {

    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState("")
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch()

    const [profile, setProfile] = useState({
        fullName : "",
        profession : "",
        email : "",
        photo : ILNullPhoto,
    })

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            const photoawal = res?.photo?.length > 0 ? {uri : res.photo} : ILNullPhoto
            setPhoto(photoawal)
            setPhotoForDB(res.photo)
            setProfile(data)
            console.log(data.fullName)
        })
    }, [])

    const changeText = (key,value) => {
        setProfile({
            ...profile,
            [key] : value
        })
    }

    const update = () => {
        dispatch({type:'SET_LOADING',value:true})
       if (password.length > 0) {
           if (password.length < 6) {
               dispatch({type:'SET_LOADING',value:false})
               showError('Password kurang dari 6 karakter')
           }else{
                updatePassword()
                updateProfileData()
                navigation.replace('MainApp')
            }
        }else{
            updateProfileData()
            navigation.replace('MainApp')
        }
    }

    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password)
                .catch((error) => {
                    dispatch({type:'SET_LOADING',value:false})
                    const errorMessage = error.message;
                    showError(errorMessage)
                });
            }
        })
    }

    const updateProfileData = () => {
        const data = profile
        data.photo = photoForDB
        Fire.database()
        .ref(`users/${profile.uid}`)
        .update(data)
        .then(res => {
            dispatch({type:'SET_LOADING',value:false})
            storeData('user',data)
        })
        .catch((error) => {
            dispatch({type:'SET_LOADING',value:false})
            const errorMessage = error.message;
            showError(errorMessage)
        });
    }

    const getImage = () => {
        let options = {
            maxWidth : 500,
            maxHeight : 500,
            quality : 0.5,
            includeBase64 : true
        };
        launchImageLibrary(options, response => {
            if (response.didCancel || response.errorCode) {
                showError('oops, sepertinya anda tidak memilih foto?')
            }else{
                const assets = response.assets[0]
                const source = {uri : assets.uri }
                setPhotoForDB(`data:${assets.type};base64,${assets.base64}`)
                setPhoto(source)
            }
        })
    }
    return (
        <View style={styles.container}>
            <Header title="Edit Profile" onPress={()=>navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <Gap height={40}/> 
                <Profile isRemove photo={photo} onPress={getImage} />
                <View style={styles.content}>
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName',value) }  />
                    <Gap height={24} />
                    <Input label="Profession"  value={profile.profession} onChangeText={(value) => changeText('profession',value) } />
                    <Gap height={24} />
                    <Input label="Email Address" value={profile.email} disable/>
                    <Gap height={24} />
                    <Input label="Password" secureTextEntry value={password} onChangeText={(value) => setPassword(value)} />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white
    },
    content : {
        padding : 40,
        paddingTop : 0
    }
})
