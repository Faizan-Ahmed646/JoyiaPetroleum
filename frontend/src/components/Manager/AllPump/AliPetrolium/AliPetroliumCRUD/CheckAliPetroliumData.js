import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetAliPetrolium from './GetAliPetrolium';

const CheckAliPetroliumData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("https://backend.joyiapetroleum.com/joiya/pump/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetAliPetrolium/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckAliPetroliumData
