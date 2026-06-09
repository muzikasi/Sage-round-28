import { FlatList, View , Text} from "react-native";

export default  function FlatListScreen(){
    const date = Array.from(
        {length:1000},
        (_,i) => ({id: i.toString(), name: `Item ${i + 1}`})
    );

    return(
        <View style={{flex:1}}>
            <FlatList
            data={date}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>(
                <View>
                    <Text>{item.name}</Text>
                </View>
            )}
            />
        </View>
    )
}