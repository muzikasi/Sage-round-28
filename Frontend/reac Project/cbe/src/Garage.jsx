export default function Garage(props){
    return<>
    {props.cars && <h1>there are {props.cars.length} cars in the garage</h1>}
        <ul>
            {props.cars.map(function(car,index){
                return <li key={index}>{car}</li>
            })}
        </ul>
    </>
}