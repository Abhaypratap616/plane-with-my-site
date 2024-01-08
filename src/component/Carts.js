import React from 'react'
import '../component/Carts.css';
export default function Carts( {image, price, name, info,id, nextremove}  ) {
  return (
    <div className='main'>
      <div className="cartssystem">
<div className="imgplace">
    <img src={image} alt="" />
</div>
<div className= "price"> {price}</div>
<div className="palcename"><h3>{name}</h3></div>
<div className="info">{info}</div>
<button className='btn-1' onClick={()=>nextremove(id)}>Not interested</button>

      </div>
    </div>
  )
}

