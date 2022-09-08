import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './App/Redux/store'
import RNBootSplash from "react-native-bootsplash";
import Header from './App/Components/Header';

export default function App() {
  useEffect(()=>{
    RNBootSplash.hide({ fade: true });
  })
  return (
    <Provider store={store}>
    <View>
      <Text>App</Text>
      <Header/>
    </View>
    </Provider>
  )
}