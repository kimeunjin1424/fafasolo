import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
  TextInput,
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { baseUrl } from '../Utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { removeToSave } from '../slices/userSlice'

const BlackList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [people, setPeople] = useState([])
  const [user, setUser] = useState([])
  const [username, setUsername] = useState('')
  const [option, setOption] = useState('search')

  const { width } = useWindowDimensions()
  const route = useRoute()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const firstSearch = async () => {
    try {
      await axios
        .post(`${baseUrl}/api/user/first-search`, {
          name: username,
        })
        .then((res) => {
          setUser(res.data.users)
          console.log('blacklist', res.data.users)
        })
        .catch((err) => {
          console.log('err', err)
        })
    } catch (err) {
      console.log('fetch Users', err)
    }
  }

  //   useEffect(() => {
  //     setPeople(route.params.blockPeople)
  //     console.log('blockPeople', route.params.blockPeople)
  //   }, [])

  const { savePeople, likedPeople, userId } = useSelector((state) => state.user)

  const addBlacklist = async (bkId) => {
    try {
      await axios
        .post(`${baseUrl}/api/user/blacklist-profiles`, {
          bkId,
        })
        .then((res) => {
          if (res.status == 200) {
            Alert.alert('블랙리스트로 등록되었습니다.')
          }
        })
        .catch((err) => {
          console.log('err', err)
        })
    } catch (err) {
      console.log('fetch Users', err)
    }
  }

  const getBlacklist = async () => {
    try {
      await axios
        .get(`${baseUrl}/api/user/blacklist`, {})
        .then((res) => {
          console.log('blacklisrt', res.data.user)
          setPeople(res.data.user)
        })
        .catch((err) => {
          console.log('err', err)
        })
    } catch (err) {
      console.log('fetch Users', err)
    }
  }

  useEffect(() => {
    getBlacklist()
  }, [option])

  const cancelBlacklist = async (bkId) => {
    await axios
      .post(`${baseUrl}/api/user/cancel-blacklist`, {
        bkId,
      })
      .then((res) => {
        console.log(res.status)
        if (res.status === 200) {
          Alert.alert(
            '성공',
            '블랙리스트 삭제가 완료되었습니다. OK를 눌러주세요.',
            [
              {
                text: 'OK',
                onPress: () => {
                  getBlacklist()
                },
              },
            ]
          )
        }
      })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 5, marginLeft: 20, flexDirection: 'row' }}>
        <TouchableOpacity activeOpacity={0.8} style={{}}>
          <MaterialCommunityIcons
            name="arrow-left-circle"
            size={45}
            color="#581845"
            style={{ marginTop: 5 }}
            onPress={() => navigation.navigate('Profile')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOption('search')}
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: '#581845',
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'Se-Hwa',
              alignSelf: 'center',
              fontSize: 20,
              color: '#581845',
            }}
          >
            Black List 검색
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOption('list')}
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            borderWidth: 1,
            borderRadius: 25,
            backgroundColor: 'black',
            paddingVertical: 5,
            paddingHorizontal: 3,
          }}
        >
          <Text
            style={{
              fontFamily: 'Se-Hwa',
              alignSelf: 'center',
              fontSize: 20,
              color: 'white',
            }}
          >
            Black List 보기
          </Text>
        </TouchableOpacity>
      </View>
      {option == 'search' && (
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
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
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  paddingVertical: 5,
                  width: width * 0.9,
                  borderWidth: 2,
                  borderColor: 'orange',
                  borderRadius: 25,
                  justifyContent: 'space-around',
                  marginHorizontal: 2,
                  paddingHorizontal: 20,
                  marginBottom: 5,
                }}
              >
                <TextInput
                  style={{ flex: 1, fontFamily: 'Se-Hwa', fontSize: 25 }}
                  placeholder="남자XX호, XX호..."
                  placeholderTextColor={'lightgray'}
                  onChangeText={(text) => setUsername(text)}
                />
                <TouchableOpacity
                  onPress={firstSearch}
                  style={{
                    borderRadius: 25,
                    padding: 7,
                    backgroundColor: 'orange',
                  }}
                >
                  <AntDesign name="search1" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {isLoading ? (
            <View>
              <ActivityIndicator size={50} />
            </View>
          ) : (
            <ScrollView style={{ marginTop: 5, marginBottom: 200 }}>
              <View style={{}}>
                <View style={[{ backgroundColor: '#ffcbcb' }]}>
                  <View style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                    <SafeAreaView style={{ paddingVertical: 0 }}>
                      {user &&
                        user !== undefined &&
                        user?.map((u, index) => (
                          <ScrollView
                            style={{
                              padding: 0,
                              marginTop: 30,
                              marginBottom: 10,
                            }}
                            key={index}
                          >
                            <View
                              style={{
                                padding: 10,
                                marginTop: 20,
                                borderColor: 'gray',
                                borderRadius: 25,
                                marginBottom: 20,
                                marginHorizontal: 8,
                                backgroundColor: 'white',
                                shadowColor: '#000',
                                shadowOffset: {
                                  width: 0,
                                  height: 3,
                                },
                                shadowOpacity: 0.27,
                                shadowRadius: 4.65,

                                elevation: 10,
                              }}
                            >
                              <TouchableOpacity
                                style={{
                                  borderRadius: 15,
                                  backgroundColor: 'black',
                                  padding: 10,
                                  marginBottom: 15,
                                }}
                                onPress={() => addBlacklist(u._id)}
                              >
                                <Text
                                  style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: 'white',
                                  }}
                                >
                                  블랙리스트 추가하기
                                </Text>
                              </TouchableOpacity>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10,
                                  }}
                                >
                                  <View
                                    style={{
                                      borderColor: '#3baea0',
                                      paddingHorizontal: 12,
                                      paddingVertical: 4,
                                      borderWidth: 1,
                                      borderRadius: 25,
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: 30,
                                        fontFamily: 'Se-Hwa',
                                        color: '#3baea0',
                                      }}
                                    >
                                      {u?.name}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      borderColor: '#ff7e67',
                                      paddingHorizontal: 12,
                                      paddingVertical: 4,
                                      borderWidth: 1,
                                      borderRadius: 25,
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: 30,
                                        fontFamily: 'Se-Hwa',
                                        color: '#ff7e67',
                                      }}
                                    >
                                      {u?.age}세
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      borderColor: '#452c63',
                                      paddingHorizontal: 12,
                                      paddingVertical: 4,
                                      borderRadius: 20,
                                      marginLeft: 5,
                                      borderWidth: 1,
                                    }}
                                  >
                                    <Text
                                      style={{
                                        textAlign: 'center',
                                        fontSize: 20,
                                        color: '#452c63',
                                        fontFamily: 'Se-Hwa',
                                      }}
                                    >
                                      {u?.region}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  // alignItems: 'flex-end',
                                  alignItems: 'flex-end',
                                  justifyContent: 'space-between',
                                  gap: 15,
                                }}
                              >
                                <View
                                  style={{
                                    borderColor: '#ff7e67',
                                    borderWidth: 1,
                                    padding: 8,
                                    borderRadius: 25,
                                    marginTop: 10,
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontFamily: 'Se-Hwa',
                                      fontSize: 20,
                                      color: '#ff7e67',
                                      borderRadius: 25,
                                    }}
                                  >
                                    {u?.lookingFor} 을/를 찾고 있습니다.
                                  </Text>
                                </View>
                              </View>

                              <View style={{ marginVertical: 15 }}>
                                <View>
                                  <View>
                                    <Image
                                      style={{
                                        width: '100%',
                                        height: 350,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                      }}
                                      source={{
                                        uri: u?.imageUrls[0],
                                      }}
                                    />
                                  </View>

                                  {/* Profile Details */}
                                </View>

                                <View>
                                  {u?.imageUrls?.map((item, index) => (
                                    <View
                                      key={index}
                                      style={{ marginVertical: 10 }}
                                    >
                                      <Image
                                        style={{
                                          width: '100%',
                                          height: 350,
                                          resizeMode: 'cover',
                                          borderRadius: 10,
                                        }}
                                        source={{
                                          uri: item,
                                        }}
                                      />
                                    </View>
                                  ))}
                                </View>
                              </View>
                            </View>
                          </ScrollView>
                        ))}
                    </SafeAreaView>
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
        </View>
      )}
      {option == 'list' && (
        <ScrollView style={{ marginTop: 10 }}>
          <View style={{}}>
            {people?.map((i, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 1,
                  marginTop: 10,
                  backgroundColor: 'white',
                  borderRadius: 25,
                  //borderBottomWidth: 1,
                  borderBottomColor: 'gray',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginLeft: 5,
                    alignItems: 'center',
                  }}
                >
                  <View>
                    {i?.imageUrls[0] !== '' ? (
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                        }}
                        source={{ uri: i?.imageUrls[0] }}
                      />
                    ) : null}
                  </View>
                  <View style={{ marginLeft: 5, alignSelf: 'center' }}>
                    <Text
                      style={{
                        fontFamily: 'Se-Hwa',
                        color: 'black',
                        fontSize: 20,
                      }}
                    >
                      {i.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Se-Hwa',
                        color: 'gray',
                        fontSize: 20,
                      }}
                    >
                      {i.region}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 4,
                    marginRight: 10,
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ProfileDetail', {
                        userId: i._id,
                      })
                    }}
                    style={{ marginRight: 10 }}
                  >
                    <FontAwesome5 name="user-circle" size={30} color="gray" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => cancelBlacklist(i._id)}>
                    <AntDesign name="closecircleo" size={30} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default BlackList

const styles = StyleSheet.create({})
