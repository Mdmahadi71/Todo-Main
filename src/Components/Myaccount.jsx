import React, { useEffect, useState } from 'react'
import Container from './Container'
import { getDatabase, ref, onValue } from "firebase/database";

const Myaccount = () => {
  const db = getDatabase();
  let [data , setdata] = useState([])



  useEffect(() => {
    const starCountRef = ref(db, 'user/');
    onValue(starCountRef, (snapshot) => {
        const arr = [];
      snapshot.forEach((item)=>{
        arr.push({...item.val()})
      })
      setdata(arr)
    });
  },[db])



  return (
    <div className=' py-[100px]'>
      <Container>
        <div className=" w-[400px] mx-auto text-center bg-cyan-600">
            {data.map((item)=>(
              <div className="">
              <h2>Name: {item.username}</h2>
              <h2>Email: {item.email}</h2>
          </div>
            ))}
            
    
          
        </div>
      </Container>
    </div>
  )
}

export default Myaccount