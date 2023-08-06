import React, { useEffect, useState } from 'react'
import FirstAddJahangirPetroliumService from './FirstAddJahangirPetroliumService';
import AddJahangirPetroliumService from './AddJahangirPetroliumService';

const CheckAddJahangirPetroliumService = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("https://backend.joyiapetroleum.com/joiya/jahangirPetrolium/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddJahangirPetroliumService/> : <FirstAddJahangirPetroliumService/>
      }
    </div>
  )
}

export default CheckAddJahangirPetroliumService
