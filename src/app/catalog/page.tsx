'use client'
import React, {useEffect, useState} from 'react'

const Catalog = () => {
    const [products, setProducts] = useState([{id : 0, name : "", price : 0}])

    useEffect(() => {
        fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/SistemPenjualan/GetAllProducts')
            .then((response) => response.json())
            .then((product) => {
                setProducts(product);
                
            })
    }, []);

  return (
    <div className='p-12'>
        <title>Catalog Product</title>
        <div className='w-full webkit-center mb-5'>
            <img src="/LogoNew.svg" alt="logo" width={250}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
                return (
                <div key={product.id} className="card bg-primary text-primary-content w-full">
                    <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>Rp.{product.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
  )
}

export default Catalog