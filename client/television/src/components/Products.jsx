import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try{
            const res = await fetch('http://localhost:8000/television/');
            const mainData = await res.json();
            setData(mainData);    
            console.log(mainData)

        }catch(error){
            console.log("failed to fetch ",error)
        }
    }

    useEffect(() => {
        getData();
    },[])

  return (
    <>
        <div>
            <h1 className='text-center text-blue-900 text-4xl my-14'>All Products</h1>

            <div className='flex justify-center items-center border w-[90%] m-auto h-[100]'>
                {
                    data?.map((val, i) => {
                        return(
                            <>
                                <div className='border border-gray-700 p-4 h-80 w-44 flex flex-col justify-center items-center m-4 rounded-md shadow-lg'>
                                    <h3 className='font-bold text-3xl font-mono text-emerald-600'>{val.model}</h3>
                                    <h3 className='text-gray-600'>{val.brand}</h3>
                                    <h3 className='text-slate-900 font-extrabold'>RS.{val.price}/-</h3>
                                    <div>
                                        <button className='bg-blue-700 text-white rounded p-2'>Add to cart</button>
                                        <button className='bg-red-700 text-white rounded p-2'>Delete</button>
                                    </div>
                                </div>
                                
                            </>
                        );
                    })  
                }
            </div>
        </div>
        
    </>
  )
}

export default Products