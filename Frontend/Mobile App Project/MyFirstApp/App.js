import { useState } from "react"
import { View,Button,Text,Image, ScrollView, TextInput ,Pressable, ActivityIndicator,Switch} from "react-native"
import Greet from "./Greet";
export default function App(){
  const [isOn, setIsOn]=useState(false);
  return <ScrollView>
  <View style={{backgroundColor:"red",
     flex:1,
    justifyContent:"center",
    alignItems:"center"
  }}>
    <Text style={{Color:"blue",
   }}>My first App</Text>
    <Button title="Click"/>

    <Image
    source={{uri: "https://www.okoone.com/wp-content/uploads/2024/06/React-native-2-logo.png"}}
    style={{ width:150, height:150}}
    />

    <Image
    source={require("./assets/image.png")}
    style={{ width:150, height:150}}
    />

    <Image
    source={{uri: "https://www.okoone.com/wp-content/uploads/2024/06/React-native-2-logo.png"}}
    style={{ width:150, height:150}}
    />

    <Image
    source={require("./assets/image.png")}
    style={{ width:150, height:150}}
    />

   <Image
    source={{uri: "https://www.okoone.com/wp-content/uploads/2024/06/React-native-2-logo.png"}}
    style={{ width:150, height:150}}
    />

    <Image
    source={require("./assets/image.png")}
    style={{ width:150, height:150}}
    />

    <TextInput placeholder="Enter your name"
    style={{
      borderWidth:1,
      padding:10,
      margin:10
    }}
    />

    <Pressable onPress={()=>alert("Pressable Clicked")}>
      <Text
      style={{
      padding:10,
      margin:10,
      backgroundColor: "pink"
    }}
      >Click</Text>
    </Pressable>

    <Pressable>
      <ActivityIndicator size="large" color="white" />
    </Pressable>

    <Switch value={isOn} onValueChange={setIsOn} />

    <Greet name="Chala"/>
    <Greet name="Abebe"/>
    <Greet name="Kebede"/>

  </View>
</ScrollView>
}