import React, { useEffect, useState } from 'react'
import FirstAddBhattiPetrolium from './FirstAddBhattiPetrolium';
import AddBhattiPetrolium from './AddBhattiPetrolium';

const CheckAddBhattiPetrolium = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("https://backend.joyiapetroleum.com/joiya/bhattiPetrolium/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddBhattiPetrolium/> : <FirstAddBhattiPetrolium/>
      }
    </div>
  )
}

export default CheckAddBhattiPetrolium
