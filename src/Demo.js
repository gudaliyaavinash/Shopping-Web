import React from 'react'
import img1 from './imag/Footwear 3.webp'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from './counter/counterSlice'
const Demo = () => {
    const alldata = useSelector(state => state.counter)
    const Disp = useDispatch()
    return (
        <div className='absolute top-[60px] z-[888] left-0  w-[100%] bg-gray-200'>
            <div className="w-1140-1">
                <div className="flex flex-wrap">
                    {
                        alldata.cart.map((el, i) => {
                            return (
                                <>
                                    <Link to='/Home' onClick={() => Disp(addCard(i))} className='decoration mb-2 men-card'>
                                        <div className=" mx-[8px] mx bg-white">
                                            <div className="img">
                                                <img src={el.image} alt="" className='h-[350px] w-[100%] h'/>
                                            </div>
                                            <div className="details">
                                                <p className='text-[#878787] text-[16px] font-bold m-0'>{el.name} </p>
                                                <p className='title m-0' >{el.Title}</p>
                                                <div className="flex">
                                                    <p className=' me fs  text-[#212121] font-bold text-[16px]'>₹{eval(el.price-(el.price * el.discount /100).toFixed(0))}</p>
                                                    <p className=' me fs text-[#878787] font-bold text-[16px] line-through decoration-2'>₹{el.price}</p>
                                                    <p className='text-green-500 fs text-[16px] font-bold'>{el.discount}%off</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Demo