import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, dataRemove } from './counter/counterSlice'
import { FaShoppingCart } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import './App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { FaStar } from "react-icons/fa";
import pin from './imag/pin.webp'
const Home = () => {
    const Alldata = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            <div className="w-full mt-[75px]">
                <div className="w-1140">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex flex-wrap mb-3">
                            <div className="w-[30%] width-img">
                                <img src={Alldata.data.image} alt="" width='100%' className='border-gray-300 h-[100%] border-1 p-3' />
                            </div>
                            <div className="w-[70%] width ps-4">
                                <div className="mt-3">
                                    <p className='text-[#878787] text-[20px] font-bold m-0'>{Alldata.data.name_1}</p>
                                    <p className='m-0' >{Alldata.data.Title}</p>
                                    <p className='mt-1 text-[#26a541] Special-none mb-1 font-bold'>Special price</p>
                                    <div className="flex items-center">
                                        <p className='me-3  text-[#212121] font-bold text-[28px]'>₹{eval(Alldata.data.price - (Alldata.data.price * Alldata.data.discount / 100).toFixed(0))}</p>
                                        <p className='me-3 text-[#878787] mt-[3px] text-[16px] line-through decoration-1'>₹{Alldata.data.price}</p>
                                        <p className='text-green-500 text-[16px] mt-[3px] font-bold'>{Alldata.data.discount}%off</p>
                                    </div>
                                    <div className="flex items-center rating-center ">
                                        <p className='flex me-2 bg-[#26a541] font-bold items-center text-[16px] text-white  rounded-[14px] px-[7px] py-[2px]'>{Alldata.data.rating}<FaStar className='ms-1' /></p>
                                        <p className='font-bold text-[#878787]'>{Alldata.data.rating1} ratings and {Alldata.data.reviews} reviews</p>
                                    </div>
                                </div>
                                <div className="alloffers-none">
                                    <p className='mt-1 text-black mb-1 font-bold'>Available offers</p>
                                    <span className='flex'>
                                        <img src={pin} alt="" className='w-[20px] h-[20px] mt-[7px]' />
                                        <p className='font-bold ms-3'>Bank Offer <span className='font-[400]'>10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000</span></p>
                                    </span>
                                    <span className='flex'>
                                        <img src={pin} alt="" className='w-[20px] h-[20px] mt-[7px]' />
                                        <p className='font-bold ms-3'>Bank Offer <span className='font-[400]'>10% off on OneCard Credit Card and EMI Transactions, up to ₹500 on orders of ₹2,000</span></p>
                                    </span>
                                    <span className='flex offers-none-1'>
                                        <img src={pin} alt="" className='w-[20px] h-[20px] mt-[7px]' />
                                        <p className='font-bold ms-3'>Bank Offer <span className='font-[400]'>8% off on Yes Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000</span></p>
                                    </span>
                                    <span className='flex offers-none-1'>
                                        <img src={pin} alt="" className='w-[20px] h-[20px] mt-[7px]' />
                                        <p className='font-bold ms-3'>Special Price<span className='font-[400]'>Get extra 5% off (price inclusive of cashback/coupon)</span></p>
                                    </span>
                                </div>
                                <div className="flex max-_377_:gap-[0px] gap-[100px] max-_377_:mx-3 max-_377_:justify-between but-gap">
                                    <button className='bg-yellow-500 p-2 text-white fs font-bold flex items-center batn' onClick={() => dispatch(Add(Alldata.data.index))}><FaShoppingCart className='me-2' />ADD TO CARD</button>
                                    <button onClick={() => dispatch(Add(Alldata.data.index))} className='bg-red-500 fs p-2 text-white batn font-bold flex items-center'><GiElectric className='me-2' /><Link to='/Cart' className='text-white decoration'>BUY NOW</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    //     }
}
export default Home