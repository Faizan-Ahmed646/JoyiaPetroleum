import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetGo45 from './GetGo45';

const CheckGo45Data = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("https://backend.joyiapetroleum.com/joiya/go45/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetGo45/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckGo45Data
