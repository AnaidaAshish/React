const PropDrilling = ({productNames, color,counter,Increment})=>{
    
console.log("Product Names",productNames)
console.log("Color",color)

    return(
        <div>
            <h1>Prop Drilling</h1>
            <h1>Counter - {counter}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )
}
export default PropDrilling;