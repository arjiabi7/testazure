'use client'
import React from 'react'
import { useEffect } from 'react'

const page = () => {
  
    //fungsi useEffect akan dijalankan setiap kali komponen di render
    useEffect(() => {
        console.log('page')
    })
    
  return (
    <div>
      <title>cihuy</title>
      <p>page</p>
    </div>
  )
}

export default page