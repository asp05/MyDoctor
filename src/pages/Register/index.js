import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { Fire } from '../../config'
import { colors, showError, storeData, useForm } from '../../utils'


const Register = ({navigation}) => {
    const [loading,setLoading] = useState(false)
    const [form, setForm] = useForm({
        fullName : '',
        profession : '',
        email : '',
        password : '',
    })

    const onContinue = () => {
        // console.log(form)
        setLoading(true)    //ini adalah response pertama
        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then(success => {
            // console.log(success) //ini adalah response kedua
            setLoading(false)
            setForm('reset')

            const data = {
                fullName : form.fullName,
                profession : form.profession,
                email : form.email,
                uid : success.user.uid,
            }

            Fire
            .database()
            .ref('users/'+ success.user.uid +'/')
            .set(data)

            storeData('user',data)

            navigation.navigate('UploadPhoto',data)
        })
        .catch((error) => {
            const errorMessage = error.message;
            showError(errorMessage)
            setLoading(false)
        });
    }

    return (
        <>
        <View style={styles.page}>
            <Header onPress={()=> navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input label="Full Name" value={form.fullName} onChangeText={(value) => setForm('fullName',value)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={form.profession} onChangeText={(value) => setForm('profession',value)} />
                    <Gap height={24} />
                    <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email',value)} />
                    <Gap height={24} />
                    <Input label="Password" value={form.password} onChangeText={(value) => setForm('password',value)} secureTextEntry />
                    <Gap height={40}/>
                    <Button title="Continue" onPress={onContinue} />
                </ScrollView>
            </View>
        </View>
        {loading && <Loading />}
        </>

    )
}

export default Register

const styles = StyleSheet.create({
    page:{backgroundColor:colors.white,flex:1},
    content : {
        padding:40,
        paddingTop:0
    }
})