export default function List(){
    const cars=["BMW", "Tesla", "Ferari","Ford", "BYD","Toyota"]

    return<>
        <ul>
            
               {cars.map(function (car,index){
                    return <li key={index}>{car}</li>
               })}
        </ul>
    </>
}