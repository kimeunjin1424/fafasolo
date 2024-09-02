import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'

import Animated, {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { PanGesture } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { baseUrl } from '../Utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { addToBlock, addToSave } from '../slices/userSlice'

const screenWidth = Dimensions.get('screen').width
export const tinderCardWidth = screenWidth * 0.9

const TinderCard = ({
  user,
  numOfCards,
  index,
  activeIndex,
  onResponse,
  setQuestionModal,
  userInfo,
}) => {
  const dispatch = useDispatch()
  const { token, userId, likedPeople, savePeople, blockPeople } = useSelector(
    (state) => state.user
  )

  const [blockModal, setBlockModal] = useState(false)
  const [blockId, setBlockId] = useState('')
  const [blockName, setBlockName] = useState('')

  const translationX = useSharedValue(0)
  const navigation = useNavigation()

  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [0.95, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [-30, 0, 0]
        ),
      },
      {
        translateX: translationX.value,
      },
      {
        rotateZ: `${interpolate(
          translationX.value,
          [-screenWidth / 2, 0, screenWidth / 2],
          [-15, 0, 15]
        )}deg`,
      },
    ],
  }))

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translationX.value = event.translationX

      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [index, index + 0.8]
      )
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 400) {
        translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
          velocity: event.velocityX,
        })
        activeIndex.value = withSpring(index + 1)

        runOnJS(onResponse)(event.velocityX > 0)
      } else {
        translationX.value = withSpring(0)
      }
    })

  // console.log('user Tinder', user._id)

  const secondSearch = async () => {
    try {
      await axios
        .post(`${baseUrl}/api/user/second-search`, {
          region,
          decade,
        })
        .then((res) => {
          setApiUser(res.data.users)
          setQuestionModal(false)
        })
        .catch((err) => {
          console.log('err', err)
        })
    } catch (err) {
      console.log('fetch Users', err)
    }
  }

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371 // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1) // deg2rad below
    var dLon = deg2rad(lon2 - lon1)
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c // Distance in km
    return roundToTwoDecimals(d)
  }

  const roundToTwoDecimals = (num) => {
    return +(Math.round(num + 'e+2') + 'e-2')
  }

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180)
  }

  const pushSave = async (fdId) => {
    console.log('push zzim func')
    await axios
      .post(`${baseUrl}/api/user/push-zzim`, {
        userId: fdId,
        myName: user.name,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log('send push success')
        }
      })
  }

  const saveProfile = async () => {
    try {
      await axios
        .post(`${baseUrl}/api/user/save-profiles`, {
          userId: userInfo._id,
          saveUserId: user._id,
        })
        .then((res) => {
          Alert.alert('success', '찜하기가 성공되었습니다.')
          dispatch(addToSave(user._id))
          pushSave(user._id)
          //setSavePeople((prev) => [...prev, user._id])
        })
        .catch((err) => {
          console.log('save profile err', err)
        })
    } catch (err) {
      console.log('save profile', err)
    }
  }

  const blockProfile = async (blockId) => {
    try {
      await axios
        .post(`${baseUrl}/api/user/block-profiles`, {
          userId: userId,
          blockUserId: blockId,
        })
        .then((res) => {
          Alert.alert('success', '차단하기가 성공되었습니다.')
          dispatch(addToBlock(blockId))
          setBlockId('')
          setBlockName('')
          setBlockModal(false)
        })
        .catch((err) => {
          console.log('block profile err user', err)
        })
    } catch (err) {
      console.log('block profile', err)
    }
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.card,
          animatedCard,
          {
            zIndex: numOfCards - index,
          },
        ]}
      >
        <Image
          style={[StyleSheet.absoluteFillObject, styles.image]}
          source={{ uri: user?.imageUrls[0] }}
        />
        {blockPeople?.includes(user._id) ? null : (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              right: 230,
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: 99,
              padding: 10,
            }}
            onPress={() => setBlockModal(true)}
          >
            <AntDesign name="close" size={30} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            right: 175,
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: 99,
            padding: 10,
          }}
          onPress={() => setQuestionModal(true)}
        >
          <AntDesign name="search1" size={30} color="green" />
        </TouchableOpacity>
        {savePeople?.includes(user._id) ? null : (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              right: 120,
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: 99,
              padding: 10,
            }}
            onPress={saveProfile}
          >
            <AntDesign name="staro" size={30} color="yellow" />
          </TouchableOpacity>
        )}
        {likedPeople?.includes(user._id) ? null : (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              right: 7,
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: 99,
              padding: 10,
            }}
            onPress={() =>
              navigation.navigate('SendLike', {
                image: user.imageUrls[0],
                name: user.name,
                likedUserId: user._id,
                //likedUserId: item?.id,
              })
            }
          >
            <AntDesign name="hearto" size={30} color="pink" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            right: 65,
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: 99,
            padding: 10,
          }}
          onPress={() =>
            navigation.navigate('ProfileDetail', { userId: user._id })
          }
        >
          <Ionicons name="person-outline" size={30} color="#ff7e67" />
        </TouchableOpacity>

        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />

        <View style={styles.footer}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}
          >
            <AntDesign name="heart" size={24} color="pink" />
            <Text style={{ marginLeft: 5, color: 'white' }}>
              {user.receviedHeartCount}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              color: user.gender == 'Men' ? 'rgb(0,255,255)' : '#7FFFD4',
              fontFamily: 'Se-Hwa',
            }}
          >
            {user.age}세
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: user.gender == 'Men' ? 'rgb(0,255,255)' : '#7FFFD4',
              fontFamily: 'Se-Hwa',
            }}
          >
            {user?.region}
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: user.gender == 'Men' ? 'rgb(0,255,255)' : '#7FFFD4',
              fontFamily: 'Se-Hwa',
            }}
          >
            {getDistanceFromLatLonInKm(
              userInfo?.location?.lat,
              userInfo?.location?.lng,
              user?.location?.lat,
              user?.location?.lng
            ) * 2}
            Km
          </Text>
          <View
            style={{
              borderRadius: 15,
              alignContent: 'center',
              display: 'flex',
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: user.gender == 'Men' ? '#F7786B' : 'orange',
                fontFamily: 'Se-Hwa',
              }}
            >
              {user?.name}
            </Text>
            {user?.jobVerify.verify == 'true' && (
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: 'white',
                    fontFamily: 'Se-Hwa',
                  }}
                >
                  {user?.jobVerify.jobName}
                </Text>
                <View style={{ marginTop: 3, marginLeft: 10 }}>
                  <AntDesign name="checkcircleo" size={40} color="red" />
                </View>
              </View>
            )}
          </View>
          <Text
            style={{
              fontSize: 30,
              color: user.gender == 'Men' ? 'rgb(0,255,255)' : '#7FFFD4',
              fontFamily: 'Se-Hwa',
            }}
          >
            {user?.lookingFor}을/를 찾아요.
          </Text>
        </View>
        <Modal
          visible={blockModal}
          onTouchOutside={() => {
            setBlockModal(false)
          }}
          animationType="fade"
          transparent={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                margin: 10,
                borderRadius: 20,
                padding: 15,
                alignItems: 'center',
                shadowColor: 'white',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.55,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 25,
                    color: 'black',
                    fontFamily: 'Se-Hwa',
                  }}
                >
                  {`${user.name}님을 차단하시겠습니까?`}
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{ color: 'gray' }}
                >{`${user.name}님을 더이상 추천받지 않습니다`}</Text>
                <Text style={{ color: 'gray' }}>
                  {`${user.name}님으로부터 하트나 메세지를 받을 수 없습니다`}
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, gap: 20 }}>
                <TouchableOpacity
                  onPress={() => blockProfile(user._id)}
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    paddingVertical: 5,
                    borderWidth: 1,
                    borderColor: 'pink',
                    borderRadius: 25,
                    justifyContent: 'space-around',
                    marginHorizontal: 2,
                    paddingHorizontal: 20,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Se-Hwa',
                      color: 'pink',
                      fontSize: 30,
                    }}
                  >
                    확인
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setBlockModal(false)}
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    paddingVertical: 5,

                    backgroundColor: 'pink',
                    borderRadius: 25,
                    justifyContent: 'space-around',
                    marginHorizontal: 2,
                    paddingHorizontal: 20,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Se-Hwa',
                      color: 'white',
                      fontSize: 30,
                    }}
                  >
                    취소
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    // height: tinderCardWidth * 1.67,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: 'flex-end',
    position: 'absolute',

    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    top: '10%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    color: 'white',
    //fontFamily: 'InterBold',
  },
})

export default TinderCard
