import Header from "./Header"
import Footer from "./Footer"
import Greet from "./Greet"
import Goal from "./Goal"
import Garage from "./Garage"
import List from "./LIst"
import Styling from "./Styling"

export default function App(){
  return <>
  <Header />
  <Greet name ="Filmon"/>
  <Greet name = "Fuad"/>
  <Greet name = "Abebe"/>
  <Footer/>
  <Goal isGoal={false}/>
  <Garage cars={["BYD","BMW","VolksWagon","Tesla", "Ferari",]}/>
  <List/>
  <Styling/>
  </> 
}