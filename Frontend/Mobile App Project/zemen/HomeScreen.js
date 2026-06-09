import { View } from "react-native";
import { Button } from "react-native";

export default function HomeScreen({navigation}){
    return<View>
        <Button
        style={{
            padding:10,
            margin:10
            
        }}
        title="Go to details screen"
        onPress={()=>navigation.navigate("details")}
        />

        <Button
        style={{
            padding:10,
            margin:10
            
        }}
        title="Go to FlatList Screen"
        onPress={()=>navigation.navigate("FlatListScreen")}
        />

        <Button
        style={{
            padding:10,
            margin:10
            
        }}
        title="Go to  Screen ApiCall"
        onPress={()=>navigation.navigate("ApiCall")}
        />
    </View>
}