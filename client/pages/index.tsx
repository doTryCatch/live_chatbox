
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [room,setRoom]=useState('');
  const [name,setName]=useState('')

  const handleLogin = () => {
    // Perform your login logic here (e.g., check credentials)
    // If login is successful, redirect to another page
    router.push({
      pathname: '/chat',
      query: {name, room }, // Pass the userName as a query parameter
    });
  
  };
  const set_room=(e)=>{
setRoom(e.target.value);
  }
  const set_name=(e)=>{
setName(e.target.value)
  }
  return (
    
    <>
    <section className="join_area">
    
    <div className="bg-slate-900 p-6 rounded-lg shadow-md space-y-4">
      
        <div className="  center  space-x-1">
          <div className="head w-[100px]   center">
            <label htmlFor="" className="block text-white font-bold ">Room ID:</label>
         
          </div>
         
          
            
            <div className="input   ">
            <input type="text" id="room-id"  onChange={set_room}className="text-slate-200 w-full px-3 py-2 border-b bg-transparent border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter Room ID"/>
            </div>
          
          
        </div>
       

        <div className="center space-x-1">
          <div className="head w-[100px]   center">
          <label htmlFor="name" className="block text-white font-bold ">Name:</label>
          </div>
         
          
          
            <div className="input ">
            <input type="text" id="room-id" onChange={set_name} className="w-full px-3 py-2 border-b bg-transparent border-gray-300 focus:outline-none focus:border-blue-500" placeholder="name here"/>
            </div>
          
          
        </div>
          <div className="btn">
            <button onClick={handleLogin}>Enter</button>
          </div>

      
        </div>

    
    </section>
    </>
  )
}

