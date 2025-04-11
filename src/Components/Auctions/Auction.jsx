import React, { useEffect, useState } from 'react'
import Mydata from '../Mydata/Mydata'

const Auction = ({handleAddData}) => {


    const [datas, setDatas] = useState([])

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data => setDatas(data))
    },[])

    console.log(datas);

  return (
    <div>
        {
            datas.map((mydata=><Mydata key={mydata.id} mydata={mydata} handleAddData={handleAddData}></Mydata>))
        }
    </div>
  )
}

export default Auction