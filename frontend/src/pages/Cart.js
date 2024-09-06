import React from 'react'
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const data = [
        {
            _id: "1",
            quantity: 2,
            productId: {
                productName: "Product 1",
                category: "Category 1",
                sellingPrice: 500,
                productImage: ["https://via.placeholder.com/150"]
            }
        },
        {
            _id: "2",
            quantity: 1,
            productId: {
                productName: "Product 2",
                category: "Category 2",
                sellingPrice: 1000,
                productImage: ["https://via.placeholder.com/150"]
            }
        }
    ];

    const loading = false;
    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
    const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.productId?.sellingPrice), 0);

    const displayINRCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`;

    return (
        <div className='container mx-auto'>

            <div className='text-center text-lg my-3'>
                {
                    data.length === 0 && !loading && (
                        <p className='bg-white py-5'>No Data</p>
                    )
                }
            </div>

            <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                {/***view product */}
                <div className='w-full max-w-3xl'>
                    {
                        loading ? (
                            new Array(4).fill(null).map((el, index) => {
                                return (
                                    <div key={index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
                                    </div>
                                )
                            })
                        ) : (
                            data.map((product, index) => {
                                return (
                                    <div key={product?._id} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
                                        <div className='w-32 h-32 bg-slate-200'>
                                            <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' alt='not found' />
                                        </div>
                                        <div className='px-4 py-2 relative'>
                                            {/**delete product */}
                                            <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer'>
                                                <MdDelete />
                                            </div>

                                            <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                            <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                                <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                                            </div>
                                            <div className='flex items-center gap-3 mt-1'>
                                                <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'>-</button>
                                                <span>{product?.quantity}</span>
                                                <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>

                {/***summary */}
                {
                    data[0] && (
                        <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                            {
                                loading ? (
                                    <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
                                    </div>
                                ) : (
                                    <div className='h-36 bg-white'>
                                        <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
                                        <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                            <p>Quantity</p>
                                            <p>{totalQty}</p>
                                        </div>

                                        <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                            <p>Total Price</p>
                                            <p>{displayINRCurrency(totalPrice)}</p>
                                        </div>

                                        <button className='bg-blue-600 p-2 text-white w-full mt-2'>Payment</button>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Cart;
