import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
export default function MyVideo() {
  return (
    <View style={styles.container}>
      <Video 
      resizeMode='contain'
       source={{uri: "https://res.cloudinary.com/nutscoders/video/upload/v1657951546/AHM_-_Made_with_Clipchamp_2_1_lkknr1.mp4"}}                                                
       style={styles.backgroundVideo} />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'dodgerblue'
},
backgroundVideo:{
height:Dimensions.get('window').height,
width:Dimensions.get('window').width
}
})