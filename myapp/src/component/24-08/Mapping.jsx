import React from 'react'

export const Mapping = ({productName}) => {
    console.log("Product Name",productName)
  return (
    <div>
        <h1>Mapping</h1>
        {productName.map((names)=>(
            <h1>{names}</h1>
        ))}
    </div>
  )
}
export default Mapping