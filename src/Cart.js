import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import { Remove, cartdec, cartinc } from './counter/counterSlice'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Cart = () => {

  const alldata = useSelector(state => state.counter)
  // console.log(alldata.data);
  const disp = useDispatch();

  let totalprice = 0;
  let discount = 0;
  let charge = 0;
  let display = '';
  let underli = '';

  alldata.cart.map((el) => {
    totalprice += el.price_cart;
    discount += (eval(el.price_cart - (el.price_cart * el.discount / 100).toFixed(0)))
    charge += (eval(el.price_cart - (el.price_cart * el.discount / 100).toFixed(0)))
  })
  if (charge >= alldata.delivery_charge) {
    charge += 0
    display = 'block'
    underli = 'line-through'
  }
  else {
    charge += 40
  }
  if (alldata.tot_cart) {
    return (
      <div>
        <div className="w-full bg-gray-200 pb-[10px] mt-[55px]">
          <div className="w-1140">
            <h1 className='text-center font-bold mb-4 text-6xl'>Cart</h1>
            <div className="flex b flex-wrap flex-row-reverse just-center justify-between">
              <div className="w-[30%] price-w m h-[250px] bg-white  p-4 shadow-lg">
                <div className="">
                  <span className='font-bold text-lg'>PRICE DETAILS</span>
                  <h1 className='w-full h-[2px] mt-3 bg-black'></h1>
                  <div className="flex justify-between">
                    <p>Price ({alldata.tot_cart} items)</p>
                    <p>₹{totalprice}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Discount</p>
                    <p className='text-green-500'>-₹{discount}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Delevery charge</p>
                    <div className="flex">
                      <p className='m-0 text-left' style={{ textDecoration: underli }}>₹40</p>
                      <p className=' text-left pl-[7px] text-green-600 hidden' style={{ display: display }}>Free</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p>Total</p>
                    <p className='text-green-500'>₹{charge}</p>
                  </div>
                </div>
              </div>
              <div className='w-[60%] cart-w'>
                {
                  alldata.cart.map((el, i) => {
                    if (!(el.Removeitem)) {
                      return (<>
                        <div className="w-[100%] bg-white c-p  mb-3 shadow-lg">
                          <div className="flex flex-wrap">
                            <div className=' w-[22%] w-imag'>
                              <img src={el.image} alt="" width='100%' />
                            </div>
                            <div className="p">
                              <h1 className='font-bold name-m'>{el.name_1}</h1>
                              <p>{el.Title}</p>
                              <div className="flex m-t items-baseline">
                                <del className='line-through decoration-1'>₹{el.price_cart}</del>
                                <p className='font-bold ms-3 text-xl'> ₹{eval(el.price_cart - (el.price_cart * el.discount / 100).toFixed(0))}</p>
                                <p className='ms-3 text-green-600 font-bold'>{el.discount}%off</p>
                              </div>
                              <div className="flex items-center">
                                <p className='flex me-2 bg-[#26a541] items-center text-[16px] text-white w-[55px] rounded-[14px] px-[7px] py-[2px]'>{el.rating}<FaStar className='ms-1' /></p>
                                <p className='font-bold text-[#878787]'>{el.rating1} ratings and {el.reviews} reviews</p>
                              </div>
                            </div>
                          </div>
                          <div className=' w-[100%] flex flex-wrap j-c gap-[40px] gap md:mt-3'>
                            <div className='flex pt-[0px] pb-[10px] justify-between gap-1 w-[150px] '>
                              <button onClick={() => disp(cartdec(i))} className='cursor-pointer rounded-[50%] px-[13.5px] pb-[5px]  border-[rgba(177,175,175)] border-[1px]'>
                                -
                              </button>
                              {/* <p className='border-[rgba(177,175,175)] border-[1px] p-[3px_25px] '>1</p> */}
                              <div className='border-[rgba(177,175,175)] border-[1px] w-[60px] max-_381_:w-[40px]  h-[35px] relative overflow-hidden'>
                                <div className='absolute text-center w-[100%] h-[100%] top-[5px] transition-all duration-[500ms]'
                                  style={{
                                    top: el.cartinc1,
                                  }}

                                >
                                  <p className='font-[700] '>1</p>
                                  <p className='font-[700] '>2</p>
                                  <p className='font-[700] '>3</p>
                                  <p className='font-[700] '>4</p>
                                  <p className='font-[700] '>5</p>
                                </div>
                              </div>
                              <button onClick={() => disp(cartinc(i))} className='cursor-pointer rounded-[50%] px-[11px] pb-[5px]  border-[rgba(177,175,175)] border-[1px]'>
                                +
                              </button>
                            </div>
                            <div>
                              <button onClick={() => disp(Remove(i))}
                                className='p-[0px_20px]   pb-[4px] text-[1.3em] transition-all duration-500 font-[700] hover:text-[blue]'>Remove</button>
                            </div>
                          </div>
                        </div>
                      </>
                      )
                    }
                  })
                }
              </div>
            </div>
            <div className="just-center flex">
              <div className="w-[60%] cart-w bg-white p-2">
                <div className="flex justify-end">
                  <div className="bg-red-600 text-white font-bold py-2 px-5 size md:text-3xl">Place Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <div className='bg-[#ffd3d3] w-[100%]'>
      <div className='w-[1100px] mx-auto h-[100vh] flex justify-center items-center  max-_1100_:w-[100%] max-_553_:mt-[0px]'>
        <div className="">
          <div className='w-[500px] py-[30px] mx-auto max-_553_:w-[100%]'>
            <img src={require('./imag/cart-add.webp')} />
          </div>
          <div className='text-[50px] text-center font-[800] max-_553_:text-[30px]'>
            Missing Cart Items
          </div>
          <Link to="/" className="text-center text-[blue] underline pb-[30px] block">Shop More</Link>
        </div>
      </div>
    </div>
  }
}

export default Cart