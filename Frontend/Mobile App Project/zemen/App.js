import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"
import FlatListScreen from "./FlatListScreen"
import ApiCall from "./ApiCall"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import CounterScreen from "./CounterScreen"


const Stack = createNativeStackNavigator()

export default function App() {

  return <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
      <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
      <Stack.Screen name="ApiCall" component={ApiCall} />
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
    </Stack.Navigator>

  </NavigationContainer>
  </Provider>
}