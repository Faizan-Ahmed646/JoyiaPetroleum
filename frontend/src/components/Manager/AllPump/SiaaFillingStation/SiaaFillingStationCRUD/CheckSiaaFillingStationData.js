import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetSiaaFillingStation from './GetSiaaFillingStation';

const CheckSiaaFillingStationData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/siaaFillingStation/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetSiaaFillingStation/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckSiaaFillingStationData
