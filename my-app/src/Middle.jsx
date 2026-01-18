import React from 'react'
import'./Middle.css'
import Product from './Product'

function Middle() {
  let pname1={name:"i3",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVjRYAlDRjp-WUTNA1_xZz1rZbX1nMxsXNw&s",price:20000}

  let pname2={name:"i36",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxRGPBFLbLrhozX3PLdnv0i3dMzzDB0rE8Q&s",price:20000}

  return (

    <>
    
      <div className='search'>
      <input type="text" placeholder='Search' /> 
      <button id='mybtn1'> Search Product</button>
      </div>
      <div className='middle'>
    <Product data={pname1}></Product>
     <Product data={pname2}></Product>
      <Product ></Product>
       <Product></Product>
    </div>
    </>
    
  )
}
export default Middle