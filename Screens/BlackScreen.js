import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

const BlackScreen = () => {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View>
        <AntDesign name="closecircleo" size={90} color="red" />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>'나혼자 솔로' 이용 약관 및 이용 규칙을 위반하셨습니다.</Text>
        <Text>귀하의 계정은 10일 후 삭제될 예정입니다.</Text>
        <Text>이용약관 규칙 위반에 대해 궁금한 점이 있으시면.</Text>
        <Text>아래 Email로 문의해 주시기 바랍니다.</Text>
        <Text style={{ marginTop: 10 }}>geunjin622@gmail.com</Text>
        <Text>3일안에 답변을 드리겠습니다.</Text>
      </View>
      <View></View>
    </View>
  )
}

export default BlackScreen

const styles = StyleSheet.create({})
