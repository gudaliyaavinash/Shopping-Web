import React, { useEffect } from 'react'
import './App.css';
import img1 from './imag/icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { FaBars } from "react-icons/fa";
import Cart from './Cart';
import { SerchCart, addCard } from './counter/counterSlice';
let Data = []
const Heder = () => {
    const alldata = useSelector(state => state.counter)
    const totcart = useSelector(state => state)
    const Disp = useDispatch()
    let i = 1
    const MenuHandler = () => {
        if (i % 2 != 0) {
            document.getElementsByClassName('menu')[0].style.height = "0px"
        }
        else {
            document.getElementsByClassName('menu')[0].style.height = "155px"
        }
        i++
    }
    return (
        <>
            <header>
                <div className="bg-red-500 p-s z-[999]">
                    <div className=" mx-auto  w-full max-w-screen-xl">
                        <div className='flex items-center max-_350_:justify-between py-2 gaap mx-4'>
                            <div className="w-[10%] w-img max-_377_:gap-[5px] just-between flex items-center">
                                <div id='add' className='p-r me-2'>
                                    <FaBars onClick={MenuHandler} className='text-black text-xl '></FaBars>
                                    <div className="">
                                        <ul className=' menu  p-0 demo p-a z-[999]'>
                                            <li onClick={MenuHandler} className='font-bold my-[10px]'><Link to='/' className='decoration text-white font-bold'>Home</Link></li>
                                            <li onClick={MenuHandler} className='font-bold my-[10px]'><Link to='/Signup' className='decoration text-white font-bold'>Sign Up</Link></li>
                                            <li onClick={MenuHandler} className='font-bold my-[10px]'><Link to='/Login' className=' decoration text-white font-bold'>Login</Link></li>
                                            <li onClick={MenuHandler} className='font-bold my-[12px]'><Link to='/Cart' className='flex items-center font-bold decoration text-white decoration'><BsCart3 className='me-2 text-xl relative' />Cart
                                                <span class="position-absolute ms-[18px] mb-[8px] translate-middle badge rounded-pill bg-danger" style={{
                                                    display: totcart.counter.display
                                                }}>
                                                    {totcart.counter.tot_cart}
                                                    <span class="visually-hidden">unread messages</span>
                                                </span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <Link to='/'><img src={img1} alt="" className='w-[50px]' /></Link>
                            </div>
                            <Form className="w-[100%] search-w flex justify-center items-center">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 bg-gray-300 w-[60%] max-_427_:w-[90%] py-2 ps-4 pe-5 outline-none rounded-[50px]"
                                    aria-label="Search"
                                />
                                <IoSearch className='text-black text-3xl -ms-[50px] ' />
                            </Form>
                            <div className="w-[40%] dis-no flex justify-center just-start w max-lg:relative items-center">
                                <div className=' duration-500 transition-all'>
                                    <ul className='flex demo max-lg:bg-white m-0 gap-[15px] p-0'>
                                        <li className='font-bold none'><Link to='/' className='a decoration none text-black font-bold'>Home</Link></li>
                                        <li className='font-bold none'><Link to='/Signup' className='a decoration none text-black font-bold'>Sign Up</Link></li>
                                        <li className='font-bold none '><Link to='/Login' className='a decoration none text-black font-bold'>Login</Link></li>
                                        <li className='font-bold  te'><Link to='/Cart' className='flex items-center font-bold text-black a decoration'><BsCart3 className='me-2 text-xl relative' />Cart
                                            <span class="position-absolute ms-[18px] mb-[8px] translate-middle badge rounded-pill bg-danger" style={{
                                                display: totcart.counter.display
                                            }}>
                                                {totcart.counter.tot_cart}
                                                <span class="visually-hidden">unread messages</span>
                                            </span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Heder