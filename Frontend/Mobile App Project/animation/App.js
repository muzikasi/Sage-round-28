import {  View, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export default function App() {
  const fadeAnim= useRef(new Animated.Value(0)).current

  useEffect(()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:8000,
      useNativeDriver:true
    }).start()
  })
  return (
    <View style={{flex:1, justifyContent:"center" , alignItems:"center"}} >
      <Animated.View style={{
        width:200,
        height:200,
        backgroundColor: "green",
        opacity:fadeAnim
      }}
      />
    </View>
  );
}
