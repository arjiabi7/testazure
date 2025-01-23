import React from 'react';
import Image from 'next/image';
import Carousel from '../component/carousel';
import Form from '../component/form';

const Dashboard = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
            <div id='ImageNavbar' className="flex-1">
                <Image 
                src='/Logo.svg'
                alt='navbar'
                width={200}
                height={10}
                />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>Community</a></li>
                    <li><a>Blog</a></li>
                    <li>
                        <details>
                        <summary>Pricing</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><button className='btn btn-success text-white'>Register Now</button></li>
                </ul>
            </div>
        </div>
        <Carousel />
        <div id='OurClient' className='text-center' style={{ marginTop: '10px', marginBottom: '10px' }}>
            <p className='text-3xl font-bold'>Our Client</p>
            <p>Weve been working with some Fortune 500+ clients</p>
        </div>
        <div id='ListOfCard' className='w-full text-center mt-5'>
            <div className="grid grid-cols-3 gap-5 p-5">
                <div className="card shadow-xl w-fit">
                    <div className="card-body items-center text-center">
                        <Image 
                            src='/Icon1.png'
                            alt='icon1'
                            width={100}
                            height={100}
                        />
                        <h1 className='font-bold text-lg'>Membership Organisations</h1>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                <div className="card shadow-xl w-fit">
                    <div className="card-body items-center text-center">
                        <Image 
                            src='/Icon2.png'
                            alt='icon2'
                            width={100}
                            height={100}
                        />
                        <h1 className='font-bold text-lg'>Membership Organisations</h1>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                <div className="card shadow-xl w-fit">
                    <div className="card-body items-center text-center">
                        <Image 
                            src='/Icon3.png'
                            alt='icon3'
                            width={100}
                            height={100}
                        />
                        <h1 className='font-bold text-lg'>Membership Organisations</h1>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='webkit-center'>
            <Form />
        </div>
    </div>

  )
}

export default Dashboard