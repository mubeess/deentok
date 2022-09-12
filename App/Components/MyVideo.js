import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { useRef } from 'react';
import { useState } from 'react';
export default function MyVideo() {
  const [videoRef,setVid]=useState({})
  const [paused,setIspaused]=useState(false)
  return (
    <TouchableOpacity onPress={()=>{
    setIspaused(!paused)
     console.log(videoRef) 
    }} style={styles.container}>
      <StatusBar translucent barStyle='light-content' backgroundColor='#000000'/>
      <Video
      paused={paused}
      ref={(vid)=>setVid(vid)}
      controls
      preventsDisplaySleepDuringVideoPlayback
      repeat
      resizeMode='contain'
       source={{uri: "https://res.cloudinary.com/nutscoders/video/upload/v1662958869/258cbe0cd89bba1f0371182bab5f8d08_not4bz.mp4"}}                                                
       style={styles.backgroundVideo}>
       </Video>

       <View style={styles.bottom}>
       <Text style={styles.user}>@mubarak.deentok</Text>
       <Text style={styles.desc}>
        Dīn is an Arabic word with three general senses: judgment, custom,
        and religion. It is used by both Muslims and Arab Christians.
       </Text>
       <View style={styles.song}>
        <Text style={styles.songText}>song</Text>
       </View>
       </View>
     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black',
    position:'relative'
},
backgroundVideo:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
bottom:{
  position:'absolute',
  width:'60%',
  height:150,
  backgroundColor:'transparent',
  zIndex:20,
  bottom:0,
  marginBottom:50,
  marginLeft:20
},
user:{
  fontWeight:'bold',
  fontSize:16,
  color:'white'
},
desc:{
  marginTop:5,
  textAlign:'justify',
  color:'white'
  
},
song:{
  flexDirection:'row',
  marginTop:5
},
songText:{
  color:'white'
}
})