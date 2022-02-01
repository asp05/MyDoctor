import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, getData, showError } from '../../utils'

const Doctor = ({navigation}) => {
    const [news, setNews] = useState([])
    const [categoryDoctor, setCategoryDoctor] = useState([])
    const [doctors, setDoctors] = useState([])

    const [profile, setProfile] = useState({
        fullName : '',
        profession : '',
        photo : ILNullPhoto
    })

    useEffect(() => {
        getNews()
        getCategory()
        getDoctor()
        navigation.addListener('focus', () => {
            // do something
            getUserData()
        });
    
    }, [navigation])
    
    const getUserData = () => {
        getData('user').then(res=>{
            const data = res
            data.photo = res?.photo?.length > 1 ?  { uri: res.photo } : ILNullPhoto
            setProfile(data)
        })
    }

    const getNews = () => {
        Fire.database()
        .ref('news/').once('value')
        .then(res=>{
            if (res.val()) {
                const data = res.val()
                const filterData = data.filter(el => el !== null)
                setNews(filterData)
            }
        })
        .catch(err => {
            showError(err.message)
        })
    }
    
    const getDoctor = () => {
        Fire
        .database()
        .ref('doctors/')
        .orderByChild('rate')
        .limitToLast(3)
        .once('value')
        .then(res => {
            if (res.val()) {
                const oldData = res.val()
                const data = []
                Object.keys(oldData).map(key => {
                    data.push({
                        id : key,
                        data : oldData[key]
                    })
                })
                setDoctors(data)
            }
        })
        .catch(err=>{
            showError(err.message)
        })
    }

    const getCategory = () => {
        Fire.database()
        .ref('category_doctor')
        .once('value')
        .then(res => {
            if (res.val()) {
                const data = res.val()
                const filterData = data.filter(el => el !== null)
                setCategoryDoctor(filterData)
            }
        })
        .catch(err => {
            showError(err.message)
        })
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile onPress={()=>navigation.navigate('UserProfile',profile)} profile={profile} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScroll}> 
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                {categoryDoctor.map(item => {
                                    return (
                                        <DoctorCategory key={item.id} category={item.name} onPress={()=>navigation.navigate('ChooseDoctor',item)} />
                                    )
                                })}
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        {doctors.map(doctor => {
                            return(
                                <RatedDoctor
                                    key={`rated-${doctor.id}`}
                                    name={doctor.data.fullName} 
                                    desc={doctor.data.profession} 
                                    avatar={doctor.data.photo.length > 0 ? {uri : doctor.data.photo} : ILNullPhoto } 
                                    onPress={() => navigation.navigate('DoctorProfile',doctor)}  />
                            )
                        })}
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    {news.map(item => {
                        return (
                        <NewsItem
                            key={`news-${item.id}`}
                            title={item.title}
                            date={item.date}
                            image={item.image}
                        />
                        );
                    })}
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex : 1
    },
    content : {
        backgroundColor : colors.white,
        flex : 1,
        // paddingHorizontal:16,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    welcome : {
        fontSize : 20,
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        maxWidth : 209,
        marginTop: 30,
        marginBottom : 16
    },
    wrapperScroll : { marginHorizontal : -16 },
    category : {flexDirection:'row'},
    wrapperSection : { paddingHorizontal :16 },
    sectionLabel : {
        fontSize : 16,
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        marginTop:30,
        marginBottom :16
    }
})
