import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice, incremented } from '../Redux/Video/videoReducer'

export default function Header() {
    const count=useSelector((state)=>state.value)
    const dispatch=useDispatch()
  return (
    <View>
        {console.log(count,"++")}
      <Text>Header</Text>
      <TouchableOpacity onPress={()=>{
        dispatch(incremented())
      }}>
        <Text>incremented</Text>
      </TouchableOpacity>
    </View>
  )
}