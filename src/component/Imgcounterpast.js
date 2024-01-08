import React from 'react'
import Carts from  '../component/Carts';
export default function Imgcounterpast(props) {
    const anmol = props.abhayprops;
    const remove = props.sabremove;

  return (
<div>
    {
    
anmol.map((item)=>{
    return
   <Carts{...item} nextremove ={remove}></Carts>
})
}
</div>

    
   
  )
}
