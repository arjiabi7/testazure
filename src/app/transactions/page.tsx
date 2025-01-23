'use client'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';

const Transactions = () => {
    const [transactions, setTransactions] = useState()

    useEffect(() => {
        fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/SistemPenjualan/GetAllTransactions')
        .then((response) => response.json())
    }, [])

    function Logout(){
        localStorage.removeItem('uname')
        window.location.href = '/LoginNew'
    }
   
  return (
    <div>
        <title>Transactions</title>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content container mx-auto mt-5">
                {/* Page content here */}
                <span className='font-bold text-5xl text-neutral'>Transactions</span><span className='font-bold text-5xl text-amber-500'> Page</span>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li className=''><a href=""><img src="/LogoNew.svg" alt="Logo" /></a></li>
                <li id='menuTransactions'>
                    <a href='/transactions' >
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 2.25C0.5 2.25 0.5 0.25 2.5 0.25H14.5C14.5 0.25 16.5 0.25 16.5 2.25V8.25C16.5 8.25 16.5 10.25 14.5 10.25H10.5C10.5 10.9167 10.5833 11.4167 10.75 11.75H11.5C11.7761 11.75 12 11.9739 12 12.25C12 12.5261 11.7761 12.75 11.5 12.75H5.5C5.22386 12.75 5 12.5261 5 12.25C5 11.9739 5.22386 11.75 5.5 11.75H6.25C6.41667 11.4167 6.5 10.9167 6.5 10.25H2.5C2.5 10.25 0.5 10.25 0.5 8.25V2.25ZM1.89845 1.39455C1.79294 1.46489 1.71011 1.56584 1.64443 1.69721C1.57678 1.8325 1.53798 1.97989 1.51764 2.1019C1.50787 2.16053 1.50337 2.20721 1.50136 2.23531C1.50053 2.24696 1.50016 2.25504 1.5 2.25902V8.25C1.5 8.57502 1.57838 8.75229 1.64455 8.85155C1.71489 8.95706 1.81584 9.03989 1.94721 9.10557C2.0825 9.17322 2.22989 9.21202 2.3519 9.23236C2.41053 9.24213 2.45721 9.24663 2.48531 9.24864C2.49697 9.24947 2.50504 9.24984 2.50903 9.25H14.5C14.825 9.25 15.0023 9.17162 15.1016 9.10545C15.2071 9.03511 15.2899 8.93416 15.3556 8.80279C15.4232 8.6675 15.462 8.52011 15.4824 8.3981C15.4921 8.33947 15.4966 8.29279 15.4986 8.26469C15.4995 8.25303 15.4998 8.24496 15.5 8.24097V2.25C15.5 1.92498 15.4216 1.7477 15.3554 1.64845C15.2851 1.54294 15.1842 1.46011 15.0528 1.39443C14.9175 1.32678 14.7701 1.28798 14.6481 1.26764C14.5895 1.25787 14.5428 1.25337 14.5147 1.25136C14.503 1.25053 14.495 1.25016 14.491 1.25H2.5C2.17498 1.25 1.9977 1.32838 1.89845 1.39455Z" fill="#757575"/>
                    </svg>
                        Transactions
                    </a>
                </li>
                <li id='menuProducts'>
                    <a href='/products' >
                    <svg width="15" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 1.75C13.6574 1.75 15.4062 3.14911 15.4062 4.875V5.5H7.59375V4.875C7.59375 3.14911 9.34264 1.75 11.5 1.75ZM16.9688 5.5V4.875C16.9688 2.45875 14.5203 0.5 11.5 0.5C8.47969 0.5 6.03125 2.45875 6.03125 4.875V5.5H0.5625V18C0.5625 19.3807 1.96161 20.5 3.6875 20.5H19.3125C21.0384 20.5 22.4375 19.3807 22.4375 18V5.5H16.9688ZM2.125 6.75H20.875V18C20.875 18.6904 20.1754 19.25 19.3125 19.25H3.6875C2.82455 19.25 2.125 18.6904 2.125 18V6.75Z" fill="#757575"/>
                    </svg>
                        Products
                    </a>
                </li>
                {/*<li><a>Sidebar Item 2</a></li>*/}
                <div className='p-5' style={{position: 'absolute',left: 0, bottom: 0, width: 'auto'}}><li className='bg-black text-white rounded-full'><a onClick={Logout}>Log out</a></li></div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Transactions