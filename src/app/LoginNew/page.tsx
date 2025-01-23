'use client'
import React, { useEffect , useState} from 'react'
import CustomButton from '../component/button'

const loginNew = () => {
    const [c_username, setUsername] = useState('');
    const [c_password, setPassword] = useState('');
    const [c_isremember, setRemember] = useState(false);
    const [isvalid, setValid] = useState(0);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {

        //buat untuk ngecek username kalo gakosong direct ke halaman user
        const cekUname = localStorage.getItem('uname');
        if(cekUname){
            window.location.href = '/transactions'
        }else{
            null
        }

        // Mengubah gaya body hanya di halaman ini
        document.body.style.backgroundColor = '#FFC300';
        document.body.style.fontFamily = 'Arial, sans-serif';
    
        // Membersihkan perubahan saat halaman berpindah
        return () => {
          document.body.style.backgroundColor = '';
          document.body.style.fontFamily = '';
        };
      }, []);

    async function Login(){
        setLoading(true)
        const inputlogin = {username : c_username, password : c_password, isremember : c_isremember}
        const response = await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
              },
              body: JSON.stringify(inputlogin),
        });
        const data_api = await response.json();
        console.log(data_api)

        //membuat local storage untuk digunakan setelah login
        if(data_api.isvalid){
            localStorage.setItem('uname', data_api.username)
            console.log(data_api.Username)
            setValid(1);
        }else{
            setValid(2)
        }
        setLoading(false)
    }

  return (
    
        <div className='center-container'>
            <title>Login</title>
            <div className='shadow-xl content' >
                <div className='grid grid-cols-2'>
                    <div id='column_1' className='bg-white rounded-bl-3xl rounded-tl-3xl'>
                        <div id='logo' className='p-10 h-1/4'>
                            <img src="/LogoNew.svg" alt="Logo" />
                        </div>
                        <div className='text-center h-3/4'>
                            <form action="">
                                <h1 className='text-4xl font-bold'>WELCOME TO RUIX</h1>
                                <p>Welcome to Ruix. dashboard Community</p>
                                <div><input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mt-10" onChange={(e) =>{setUsername(e.target.value)}}/></div>
                                <div><input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mt-5" onChange={(e) =>{setPassword(e.target.value)}}/></div>
                                {loading ?(
                                    <button className='btn disabled w-full max-w-xs mt-5 rounded-full'>
                                        <span className="loading loading-spinner loading-xs"></span>
                                    </button>
                                ):(
                                    <CustomButton href='' children='Login' className='btn btn-mustard w-full max-w-xs mt-5 rounded-full'onClick={() => Login()}/>  
                                )}
                                {isvalid == 1 ?(
                                    window.location.href = '/transactions'
                                ):isvalid == 2?(
                                <p className='text-red-600 mt-2'>Login Failed</p>
                                ):(
                                    null
                                )}
                            </form>
                        </div>
                    </div>
                    <div id='column_2' className='bg-black rounded-br-3xl rounded-tr-3xl' >
                        <img src="/BackgroundNew.svg" alt="" className='rounded-br-3xl rounded-tr-3xl'/>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default loginNew