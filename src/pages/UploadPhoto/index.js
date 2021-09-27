import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, storeData } from '../../utils'


const UploadPhoto = ({navigation,route}) => {
    const {fullName,profession,uid} = route.params

    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState("")

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
                setHasPhoto(true)
            }
        })
    }
    const uploadAndContinue = () => {
        Fire
        .database()
        .ref('users/' + uid + '/')
        .update({photo : photoForDB})
        
        const data = route.params
        data.photo = photoForDB
        storeData('user',data)

        navigation.replace('MainApp')
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style ={ styles.avatar } />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={uploadAndContinue} disable={!hasPhoto} />
                    <Gap height={30}/>
                    <Link title="Skip for this" size={16} align='center' onPress={()=>navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page : {
        flex:1,
        backgroundColor: colors.white
    },
    content : {
        paddingHorizontal:40,
        flex:1,
        justifyContent:'space-between',
        paddingBottom:64
    },
    profile : {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    avatarWrapper : {
        height: 130,
        width: 130,
        borderRadius: 130/2,
        borderColor : colors.border,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    avatar : {
        height :110,
        width :110,
        borderRadius : 110/2
    },
    addPhoto : {
        position:'absolute',
        bottom:8,
        right:6
    },
    name : {
        fontFamily : fonts.primary[600],
        fontSize:24,
        color:colors.text.primary,
        textAlign:'center'
    },
    profession : {
        fontFamily : fonts.primary[400],
        fontSize:18,
        color:colors.text.secondary,
        textAlign:'center'
    }
})
