import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function ApiCall(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    return <View style={{flex:1}}>
        <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <View style={{padding:10}}>
                <Text style={{color:'blue'}} >Title: {item.title}</Text>
                <Text>Body: {item.body}</Text>
            </View>
        )}
        />

    </View>
}