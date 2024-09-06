import React, { useEffect, useRef, useState } from 'react'
import displayINRCurrency from '../helpers/displayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const HorizontalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)
    const scrollElement = useRef()

    const ProductData = [
        {
            "productName": "Airpodes",
            "brandName": "Boat",
            "category": "airpodes",
            "productImage": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            "description": "best",
            "price": 2000,
            "sellingPrice": 200,
        },
        {
            "productName": "Smart Watch",
            "brandName": "Samsung",
            "category": "watches",
            "productImage": [
                "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1725611379~exp=1725614979~hmac=2673f7da0bf15bd5d59ecc426009374b822b46e5d9b146fab36a0ed80fef0604&w=1060"
            ],
            "description": "best smartwatch",
            "price": 10000,
            "sellingPrice": 8000,
        },
        {
            "productName": "Analog Watch",
            "brandName": "Titan",
            "category": "watches",
            "productImage": [
                "https://img.freepik.com/free-psd/digital-smart-watch-icon-isolated-3d-render-illustration_439185-11924.jpg?w=740&t=st=1725611405~exp=1725612005~hmac=afda6e485660e4768c81dec68a097bd3fdfa4a2345cbaac95a9460d065aa7922"
            ],
            "description": "premium analog watch",
            "price": 5000,
            "sellingPrice": 4500,
        }
    ]

    useEffect(() => {
        // Filtering the product data based on the category prop
        const filteredData = ProductData.filter(product => product.category === category)
        setTimeout(() => {
            setData(filteredData)
            setLoading(false)
        }, 2000)
    }, [category])


    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

            <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>

                <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block'><FaAngleLeft /></button>
                <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block'><FaAngleRight /></button>

                {loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'></div>
                            <div className='p-4 grid w-full gap-2'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                <div className='flex gap-3 w-full'>
                                    <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                    <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                </div>
                                <button className='text-sm text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <Link key={index} to={"/"} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                                <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all' alt={product.productName} />
                            </div>
                            <div className='p-4 grid'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product.productName}</h2>
                                <p className='capitalize text-slate-500'>{product.category}</p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium'>{displayINRCurrency(product.sellingPrice)}</p>
                                    <p className='text-slate-500 line-through'>{displayINRCurrency(product.price)}</p>
                                </div>
                                <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full'>Add to Cart</button>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default HorizontalCardProduct
