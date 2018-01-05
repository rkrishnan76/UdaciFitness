import React from 'react'
import { Text } from 'react-native'
import { white,purple } from '../utils/colors'
export default function DateHeader ({ date }) {
  return (
    <Text style={{color: purple, fontSize: 25}}>
      {date}
    </Text>
  )
}
