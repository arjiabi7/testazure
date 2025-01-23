'use client'
import React, { useEffect, useState } from 'react'

const login = () => {
    const [c_username, setUsername] = useState('');
    const [c_password, setPassword] = useState('');
    const [c_isremember, setRemember] = useState(false);
    const [isvalid, setValid] = useState(0);

    useEffect(() => {
            //buat untuk ngecek username kalo gakosong direct ke halaman user
            const cekUname = localStorage.getItem('uname');
            if(cekUname){
                window.location.href = '/user'
            }else{
                null
            }
        }, [])

    async function Login(){
        const inputlogin = {username : c_username, password : c_password, isremember : c_isremember}
        const response = await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
              },
              body: JSON.stringify(inputlogin),
        });
        const data = await response.json();
        console.log(data)

        //membuat local storage untuk digunakan setelah login
        localStorage.setItem('uname', c_username)

        if(data.isvalid){
            setValid(1);
        }else{
            setValid(2)
        }
    }

  return (
    <div className='center-container'>
        <form action="" className='shadow-xl p-5 rounded bg-neutral'>
            <h1 className='text-center text-white mb-5'>LOGIN SML</h1>
            <div><input type="text" placeholder='masukkan email' className='mb-2' onChange={(e) =>{setUsername(e.target.value)}}/></div>
            <div><input type="password" placeholder='masukkan password' onChange={(e) =>{setPassword(e.target.value)}}/></div>
            <button type='button' className='w-full btn btn-success text-white mt-5' onClick={() => Login()}>Login</button>
        </form>

        {isvalid == 1 ?(
            window.location.href = '/user'
        ):isvalid == 2?(
            <p>login failed</p>
        ):(
            null
        )}
    </div>
  )
}

export default login