import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
// import "../../global.css"

export default function Uilayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='login'/>
      <Stack.Screen name='signUp'/>
    </Stack>
  )
}