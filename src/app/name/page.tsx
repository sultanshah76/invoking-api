"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

export default function namepage() {
  const router =useRouter ();
  const handeladdress=()=>{
setTimeout(()=>{ router.push("./name/address")},3000);
  }
  return (<div className='p-3'>
  <button className='bg-black border-2 rounded-lg text-white' onClick={()=>{router.back}}> back</button>
  <button className='bg-blue-800 border-2 rounded-lg text-white' onClick={handeladdress}> address</button>
  <button className='bg-green-800 border-2 rounded-lg text-white' onClick={()=>{router.refresh}}>refresh</button>
  <button className='bg-black border-2 rounded-lg text-white' onClick={()=>{router.replace("./")}}>replace</button>

  </div>
  
  )
}
