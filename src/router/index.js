import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chatting, ChooseDoctor, Doctor, GetStarted, Hospitals, Login, Messages, Register, Splash, UploadPhoto, UserProfile,UpdateProfile, DoctorProfile } from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigator } from '../components';

const {Navigator,Screen} = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () =>{
     return (
          <Tab.Navigator tabBar={ props => <BottomNavigator {...props} /> }>
               <Tab.Screen 
                    name="Doctor"
                    component={Doctor}
                    options={{ headerShown:false }} 
               />
               <Tab.Screen 
                    name="Messages"
                    component={Messages}
                    options={{ headerShown:false }} 
               />
               <Tab.Screen 
                    name="Hospitals"
                    component={Hospitals}
                    options={{ headerShown:false }} 
               />
          </Tab.Navigator>    
     )
}

const Router = () => {
    return (
       <Navigator initialRouteName="Splash">
          <Screen 
               name="Splash" 
               component={Splash} 
               options={{ headerShown:false }} />
          <Screen 
               name="GetStarted" 
               component={GetStarted} 
               options={{ headerShown:false }} />
          <Screen 
               name="Register" 
               component={Register} 
               options={{ headerShown:false }} />
          <Screen 
               name="Login" 
               component={Login} 
               options={{ headerShown:false }} />
          <Screen 
               name="UploadPhoto" 
               component={UploadPhoto} 
               options={{ headerShown:false }} />
          <Screen 
               name="MainApp" 
               component={MainApp} 
               options={{ headerShown:false }} />
          <Screen 
               name="ChooseDoctor" 
               component={ChooseDoctor} 
               options={{ headerShown:false }} />
          <Screen 
               name="Chatting" 
               component={Chatting} 
               options={{ headerShown:false }} />
          <Screen 
               name="UserProfile" 
               component={UserProfile} 
               options={{ headerShown:false }} />
          <Screen 
               name="UpdateProfile" 
               component={UpdateProfile} 
               options={{ headerShown:false }} />
           <Screen 
               name="DoctorProfile" 
               component={DoctorProfile} 
               options={{ headerShown:false }} />
       </Navigator>
    )
}

export default Router