'use client'
import React, { useState } from 'react'
import Alert from '../component/alert_success';
import AlertNew from '../component/alert';

const userAdd = () => {
  const [nama, setNama] = useState('');
  const [showAlert, SetShowAlert] = useState(false);
  
    async function Submit() {
      const data = {nama}

      const res = await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Create', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(data),
      })

      await res.json();
      SetShowAlert(true);
      setTimeout(() => {
        window.location.href = '/user'
      }, 1000);
      
  }

  return (
    <div>
      {showAlert ?(
          <AlertNew className="btn btn-success text-white" textAlert="Berhasil kirim data" />
      ): (
          null
      )}
      <div className="flex justify-center items-center h-screen">
          <form action={Submit}>
              <div><label htmlFor="">Nama user</label></div>
              <input type="text" value={nama} onChange={(e) => {setNama(e.target.value)}} placeholder='masukkan nama user' className='rounded border-gray-500 mt-1' />
              <div><button type='submit' className='btn btn-warning text-white mt-3 w-full'> Simpan data</button></div>
          </form>
      </div>
    </div>
  )
}

export default userAdd