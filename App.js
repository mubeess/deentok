import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './App/Redux/store'
import RNBootSplash from "react-native-bootsplash";
import Header from './App/Components/Header';
import MyVideo from './App/Components/MyVideo';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

export default function App() {
  useEffect(()=>{
    RNBootSplash.hide({ fade: true });
  })
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <MyVideo/>
    </GestureHandlerRootView>
    
  )
}