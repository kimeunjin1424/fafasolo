import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../Utils/registrationUtils'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { WheelPicker } from 'react-native-infinite-wheel-picker'

const BirthScreen = () => {
  const navigation = useNavigation()
  const monthRef = useRef(null)
  const yearRef = useRef(null)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [decade, setDecade] = useState('')

  const initialData = [
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    58, 59,
  ]

  const handleDayChange = (text) => {
    setDay(text)
    if (text.length == 2) {
      monthRef.current.focus()
    }
  }

  const handleMonthChange = (text) => {
    setMonth(text)
    if (text.length == 2) {
      yearRef.current.focus()
    }
  }

  const handleYearChange = (text) => {
    setYear(text)
  }

  // useEffect(() => {
  //   getRegistrationProgress('Birth').then((progressData) => {
  //     if (progressData) {
  //       const { dateOfBirth } = progressData
  //       const [dayValue, monthValue, yearValue] = dateOfBirth.split('/')

  //       setDay(dayValue)
  //       setMonth(monthValue)
  //       setYear(yearValue)
  //     }
  //   })
  // }, [])

  useEffect(() => {
    if (age > 19 && age < 30) {
      setDecade('20대')
    } else if (age >= 30 && age < 40) {
      setDecade('30대')
    } else if (age >= 40 && age < 50) {
      setDecade('40대')
    } else if (age >= 50 && age < 60) {
      setDecade('50대')
    }
  }, [age])

  const handleNext = () => {
    const dateOfBirth = '07/07/7777'
    //saveRegistrationProgress('Birth', { '12/12/1212' })
    saveRegistrationProgress('Age', { age })
    saveRegistrationProgress('Decade', { decade })

    navigation.navigate('Location')
  }

  console.log('age decade', age, decade)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 60, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderColor: 'black',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name="cake-variant-outline"
              size={26}
              color="black"
            />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            //fontWeight: 'bold',
            fontFamily: 'Se-Hwa',
            marginTop: 15,
          }}
        >
          당신의 나이를 입력해 주세요.
        </Text>
        <Text
          style={{
            fontSize: 15,
            //fontWeight: 'bold',
            //fontFamily: 'Se-Hwa',
            marginTop: 15,
            color: 'gray',
            fontFamily: 'Se-Hwa',
            fontSize: 20,
          }}
        >
          -당신의 연령대에 맞게 상대방이 추천됩니다!
        </Text>
        <View>
          <Text
            style={{
              color: 'gray',
              marginLeft: 5,
              fontFamily: 'Se-Hwa',
              fontSize: 20,
            }}
          >
            -본인의 나이를 클릭해 주세요!
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              width: '80%',
              alignContent: 'center',
            }}
          >
            <WheelPicker
              initialSelectedIndex={1}
              data={initialData}
              restElements={2}
              elementHeight={30}
              onChangeValue={(index, value) => {
                setAge(value)
              }}
              age={age}
              containerStyle={styles.containerStyle}
              selectedLayoutStyle={styles.selectedLayoutStyle}
              elementTextStyle={styles.elementTextStyle}
            />
          </View>
        </View>

        {age ? (
          <View style={{ marginTop: 30 }}>
            <View style={{ gap: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                    backgroundColor: 'lightgray',
                    width: 100,
                    marginRight: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      fontFamily: 'Se-Hwa',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    {age}세
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 100,
                  }}
                >
                  {age > 19 && age < 30 && (
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: 'Se-Hwa',
                        color: 'gray',
                        textAlign: 'center',
                      }}
                    >
                      20대
                    </Text>
                  )}
                  {age >= 30 && age < 40 && (
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: 'Se-Hwa',
                        color: 'gray',
                        textAlign: 'center',
                      }}
                    >
                      30대
                    </Text>
                  )}
                  {age >= 40 && age < 50 && (
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: 'Se-Hwa',
                        color: 'gray',
                        textAlign: 'center',
                      }}
                    >
                      40대
                    </Text>
                  )}
                  {age >= 50 && age < 60 && (
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: 'Se-Hwa',
                        color: 'gray',
                        textAlign: 'center',
                      }}
                    >
                      50대
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        ) : null}
        {age && decade && (
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={{ marginTop: 1, marginLeft: 'auto' }}
          >
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={45}
              color="#581845"
              style={{ alignSelf: 'center', marginTop: 20 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}

export default BirthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
  },
  selectedLayoutStyle: {
    backgroundColor: '#00000026',
    borderRadius: 15,
  },
  containerStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
  },
  elementTextStyle: {
    fontSize: 18,
  },
})

// <View
// style={{
//   flexDirection: 'row',
//   gap: 10,
//   marginTop: 50,
//   justifyContent: 'flex-start',
//   marginLeft: 10,
// }}
// >

// <TextInput
//   autoFocus={true}
//   style={{
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     width: 50,
//     fontSize: day ? 30 : 30,
//     fontFamily: 'Se-Hwa',
//   }}
//   placeholder="DD"
//   keyboardType="numeric"
//   maxLength={2}
//   onChangeText={handleDayChange}
//   value={day}
// />
// <Text
//   style={{
//     marginTop: 25,
//     marginLeft: -10,
//     fontFamily: 'Se-Hwa',
//     fontSize: 25,
//   }}
// >
//   일
// </Text>

// {/* Month Input Field */}
// <TextInput
//   ref={monthRef}
//   style={{
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     width: 60,
//     fontSize: day ? 30 : 30,
//     fontFamily: 'Se-Hwa',
//   }}
//   placeholder="MM"
//   keyboardType="numeric"
//   maxLength={2}
//   onChangeText={handleMonthChange}
//   value={month}
// />
// <Text
//   style={{
//     marginTop: 25,
//     marginLeft: -10,
//     fontFamily: 'Se-Hwa',
//     fontSize: 25,
//   }}
// >
//   월
// </Text>

// {/* Year Input Field */}
// <TextInput
//   ref={yearRef}
//   style={{
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     width: 75,
//     fontSize: day ? 30 : 30,
//     fontFamily: 'Se-Hwa',
//   }}
//   placeholder="YYYY"
//   keyboardType="numeric"
//   maxLength={4}
//   onChangeText={handleYearChange}
//   value={year}
// />
// <Text
//   style={{
//     marginTop: 25,
//     marginLeft: -10,
//     fontFamily: 'Se-Hwa',
//     fontSize: 25,
//   }}
// >
//   년
// </Text>
// </View>
// <View>
// <Text
//   style={{
//     color: 'gray',
//     marginLeft: 5,
//     fontFamily: 'Se-Hwa',
//     fontSize: 20,
//   }}
// >
//   - 당신의 생년월일은 공개되지 않습니다.
// </Text>
// </View>
// <View
// style={{
//   flexDirection: 'row',
//   justifyContent: 'flex-start',
//   marginLeft: 10,
// }}
// >
// <TextInput
//   ref={yearRef}
//   style={{
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     width: 75,
//     fontSize: day ? 30 : 30,
//     fontFamily: 'Se-Hwa',
//   }}
//   placeholder="나이"
//   keyboardType="numeric"
//   maxLength={2}
//   onChangeText={(text) => setAge(text)}
//   value={age}
// />
// <Text
//   style={{
//     marginTop: 10,
//     marginLeft: -10,
//     fontFamily: 'Se-Hwa',
//     fontSize: 25,
//   }}
// >
//   세
// </Text>
// </View>  */}
