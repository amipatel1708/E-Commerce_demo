import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct, setCategoryProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

 const data = [
        {
            "_id": "668ec663d8fefe8a006f9bc9",
            "productName": "Airpodes",
            "category": "airpodes",
            "productImage": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
        },
    ]


    useEffect(() => {
        setTimeout(() => {
            setCategoryProduct(data)
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div className='container mx-auto p-4'>
            <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
                {

                    loading ? (
                        categoryLoading.map((el, index) => {
                            return (
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading" + index}>
                                </div>
                            )
                        })
                    ) :
                        (
                            categoryProduct.map((product, index) => {
                                return (
                                    <Link to={"/"} className='cursor-pointer' key={product?.category}>
                                        <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                            <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all' />
                                        </div>
                                        <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                                    </Link>
                                )
                            })
                        )
                }
            </div>
        </div>
    )
}

export default CategoryList