'use client'
import React from 'react'

interface struktur{
    id: number;
    nama: string;
    createdon: Date;
}

const TesAPI = async () => {
    const search = "";
    const filter = "";
    const res = await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Get?Filter='+filter+'&Search='+search);
    const strukturs: struktur[] = await res.json();

  return (
    <>
    <h1 className='font-bold'>Testing GET API dari Outsystems</h1>
    <input type="text" defaultValue="" placeholder='Search by nama'/>
    <button type='submit' className='btn btn-success text-white'>filter</button>
    {strukturs.map(struktur => <p>{struktur.nama}</p>)}
    
    </>
  )
}

export default TesAPI