import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LottieView from 'lottie-react-native'
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { baseUrl } from '../Utils/api'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToLike,
  addToSave,
  addToToken,
  addToUser,
  addToUserId,
} from '../slices/userSlice'
import { jwtDecode } from 'jwt-decode'
import 'core-js/stable/atob'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'
import image from '../assets/splash.png'

const PreLogin = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { token, userId } = useSelector((state) => state.user)

  useEffect(() => {
    const fetchUser = async () => {
      const token123 = await AsyncStorage.getItem('hinge_token')
      console.log('token', token)
      if (token123) {
        const decodedToken = jwtDecode(token123)
        const uId = decodedToken.userId
        dispatch(addToUserId(uId))
        dispatch(addToToken(token123))
        console.log('uId', uId)
      } else {
        navigation.navigate('Login')
      }
    }
    fetchUser()
  }, [])

  const fetchUserInfo = async () => {
    await axios
      .post(`${baseUrl}/api/user/user-profile`, { userId })
      .then((res) => {
        dispatch(addToUser(res.data.user))
        for (i = 0; i < res.data.user.likedProfiles.length; i++)
          dispatch(addToLike(res.data?.user?.likedProfiles[i]._id))
        //  console.log('aaaaaaa', res.data?.user?.likedProfiles[i]._id)
        for (i = 0; i < res.data.user.saveProfiles.length; i++)
          dispatch(addToSave(res.data?.user?.saveProfiles[i]._id))

        navigation.navigate('MainStack', { screen: 'Main' })
      })
      .catch((err) => console.log('fetch user Error', err))

    console.log('hello world')
  }

  useEffect(() => {
    if (userId) fetchUserInfo()
  }, [userId])

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableOpacity
          style={{
            //borderWidth: 1,
            borderRadius: 25,
            //paddingHorizontal: 10,
            //paddingVertical: 5,
            marginTop: 300,
            marginHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
          }}
          onPress={() => navigation.navigate('Login')}
        >
          {token ? (
            <View>
              <Text style={{ textAlign: 'center' }}>
                10초만 기다리시면 자동 로그인됩니다.
              </Text>
              <View>
                <ActivityIndicator size={'large'} color={'white'} />
              </View>
            </View>
          ) : (
            <Text
              style={{
                fontFamily: 'Se-Hwa',
                fontSize: 40,
                textAlign: 'center',
              }}
            >
              시작하기
            </Text>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    //fontFamily: 'Se-hwa',
  },
})

export default PreLogin
