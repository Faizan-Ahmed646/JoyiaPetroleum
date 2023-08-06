import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetAwanBrother from './GetAwanBrother';

const CheckAwanBrotherData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("https://backend.joyiapetroleum.com/joiya/awanbrothers/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetAwanBrother/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckAwanBrotherData
