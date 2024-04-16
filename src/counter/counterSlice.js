import { createSlice } from '@reduxjs/toolkit'


export let dub  = [
  {
    name: "PUMA puma puma shoes Shoes Men men",
    name_1: "PUMA",
    Removeitem: 1,
    Removeitem1: 1,
    index : 0 ,
    image: require("../imag/Footwear 1.webp"),
    token: 1,
    token1: 1,
    Title:"Plush Comfort Running Shoes For Men (White)",
    rating:4.2,
    rating1:15+','+0+55,
    reviews:1+','+153,
    inc: 2,
    price: 2499,
    price_cart: 0,
    discount: 48,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "KILLER killer Black Track Pants black track pants",
    name_1:"KILLER ",
    Removeitem: 1,
    Removeitem1: 1,
    index : 1 ,
    image: require("../imag/trak pant.webp"),
    token: 1,
    token1: 1,
    Title:"Men Printed Black Track Pants",
    rating:3.8,
    rating1:92,
    reviews:10,
    inc: 2,
    price: 2199,
    price_cart: 0,
    discount: 62,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "TRIPR tripr Sweatshirt sweatshirt Shirt shirt",
    name_1:"TRIPR  ",
    Removeitem: 1,
    Removeitem1: 1,
    image: require("../imag/tshirt.webp"),
    token: 1,
    index : 2,
    token1: 1,
    Title:"Men Full Sleeve Striped Hooded Sweatshirt",
    rating:4,
    rating1:1+','+770,
    reviews:297,
    inc: 2,
    price: 2499,
    price_cart: 0,
    discount: 88,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "TIMEX timex Analog Watch Men men analog watch",
    name_1: "TIMEX",
    Removeitem: 1,
    index : 3,
    Removeitem1: 1,
    image: require("../imag/Watch.webp"),
    token: 1,
    token1: 1,
    Title:"Analog Watch - For Men TWTG80SMU09",
    rating:4.3,
    rating1:4+','+447,
    reviews:330,
    inc: 2,
    price: 2795,
    price_cart: 0,
    discount: 58,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "BoAt Airdopes boAt airdopes ",
    name_1:"boAt Airdopes",
    Removeitem: 1,
    index : 4,
    Removeitem1: 1,
    image: require("../imag/boAt Airdopes.webp"),
    token: 1,
    token1: 1,
    Title:"boAt Airdopes 161 with 40 Hours Playback, ASAP Charge & 10mm Drivers Bluetooth Headset",
    rating:4,
    rating1:7+','+67+','+492,
    reviews:55+','+475,
    inc: 2,
    price: 2490,
    price_cart: 0,
    discount: 63,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "New Balance new balance Shoes shoes Black black",
    name_1: "New Balance",
    image: require("../imag/Footwear 2.webp"),
    token: 1,
    index : 5,
    token1: 1,
    Title:"1080 Running Shoes For Men  (Black)",
    rating:4.3,
    rating1:62,
    reviews:6,
    Removeitem: 1,
    Removeitem1: 1,
    inc: 2,
    price: 19999,
    price_cart: 0,
    discount: 62,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "Clown clown Trousers trousers Black Pants black pants",
    name_1: "Clown ",
    image: require("../imag/pant.webp"),
    token: 1,
    index : 6,
    token1: 1,
    Title:"Men Slim Fit Black Lycra Blend Trousers",
    rating:4.3,
    rating1:62,
    reviews:6,
    Removeitem: 1,
    Removeitem1: 1,
    inc: 2,
    price: 999,
    price_cart: 0,
    discount: 57,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
  {
    name: "Titan titan Mechanical Analog Watch mechanical analog watch",
    name_1: "Titan",
    image: require("../imag/Watch 1.webp"),
    token: 1,
    index : 7,
    token1: 1,
    Title:"Titan Mechanical Analog Watch - For Men 90110QM01",
    rating:4.6,
    rating1:69,
    reviews:9,
    Removeitem: 1,
    Removeitem1: 1,
    inc: 2,
    price: 18995,
    price_cart: 0,
    discount: 20,
    addcart: 0,
    cart_token: 1,
    cartinc1: "",
    carddec1: "",
    cart_5: 0,
  },
]



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    tot_cart: 0,
    tot_cart1: 0,
    add:0,
    display: 'none',
    delivery_charge: 10000,
    cart: [...dub],
      
      // {
      //   name: "New Balance ",
      //   image: require("../imag/Footwear 3.webp"),
      //   Title:"574 Sneakers For Men  (Black)",
      //   Removeitem1: 1,
      //   rating:4.2,
      //   index : ,
      //   rating1:617,
      //   reviews:61,
      //   token: 1,
      //   token1: 1,
      //   Removeitem: 1,
      //   inc: 2,
      //   price: 11999,
      //   price_cart: 0,
      //   discount: 63,
      //   addcart: 0,
      //   cart_token: 1,
      //   cartinc1: "",
      //   carddec1: "",
      //   cart_5: 0,
      // },{
      //   name: "PUMA",
      //   Title:"Cricket HighRun Cricket Shoes For Men (Blue)",
      //   image: require("../imag/Footwear.webp"),
      //   token: 1,
      //   token1: 1,
      //   rating:4.2,
      //   index : ,
      //   rating1:570,
      //   reviews:69, 
      //   Removeitem: 1,
      //   Removeitem1: 1,
      //   inc: 2,
      //   price: 3299,
      //   price_cart: 0,
      //   discount: 20,
      //   addcart: 0,
      //   cart_token: 1,
      //   cartinc1: "",
      //   cart_5: 0,
      // }
    
    data:{

    }

  },
  reducers: {
    Add: (state, actions) => {
      // index
      console.log(state.cart[actions.payload].token);
      if (state.cart[actions.payload].token) {
        // state.data.push(state.cart[actions.payload])
        state.cart[actions.payload].Removeitem = 0;
        state.cart[+actions.payload].cart_5 += 1
        state.tot_cart += 1
        state.display = 'block'
        state.cart[+actions.payload].price_cart = state.cart[+actions.payload].price;
        state.cart[+actions.payload].token = 0;
      } 
      // else {
        
      // }
      // state.cart[actions.payload].token++
      // console.log(state.cart[actions.payload].inc);
    },
    cartinc: (state, action) => {
      console.log(state.cart[+action.payload].cart_5);
      // console.log(state.data[+action.payload].cart_5);
      if (state.cart[+action.payload].cart_5 == 1) {
        state.cart[+action.payload].cartinc1 = "-35px"
        state.cart[+action.payload].cart_5++;
        console.log("ok1");
        state.cart[+action.payload].price_cart += state.cart[+action.payload].price
      } else if (state.cart[+action.payload].cart_5 == 2) {
        state.cart[+action.payload].cartinc1 = "-75px"
        state.cart[+action.payload].cart_5++;
        console.log("ok2");
        state.cart[+action.payload].price_cart += state.cart[+action.payload].price
      } else if (state.cart[+action.payload].cart_5 == 3) {
        state.cart[+action.payload].cartinc1 = "-115px"
        state.cart[+action.payload].cart_5++;
        console.log("ok3");
        state.cart[+action.payload].price_cart += state.cart[+action.payload].price
      } else if (state.cart[+action.payload].cart_5 == 4) {
        state.cart[+action.payload].cartinc1 = "-155px"
        state.cart[+action.payload].cart_5++;
        console.log("ok");
        state.cart[+action.payload].price_cart += state.cart[+action.payload].price
      }
    },
    cartdec: (state, action) => {
      // console.log(state.data[+action.payload].cart_5);
      if (state.cart[+action.payload].cart_5 == 1) {

      } else if (state.cart[+action.payload].cart_5 == 2) {
        state.cart[+action.payload].cartinc1 = "5px"
        state.cart[+action.payload].cart_5--;
        state.cart[+action.payload].price_cart -= state.cart[+action.payload].price
      } else if (state.cart[+action.payload].cart_5 == 3) {
        state.cart[+action.payload].cartinc1 = "-35px"
        state.cart[+action.payload].cart_5--;
        state.cart[+action.payload].price_cart -= state.cart[+action.payload].price
      } else if (state.cart[+action.payload].cart_5 == 4) {
        state.cart[+action.payload].cartinc1 = "-75px"
        state.cart[+action.payload].cart_5--;
        state.cart[+action.payload].price_cart -= state.cart[+action.payload].price
      } else if (state.cart[+action.payload].cart_5 == 5) {
        state.cart[+action.payload].cartinc1 = "-115px"
        state.cart[+action.payload].cart_5--;
        state.cart[+action.payload].price_cart -= state.cart[+action.payload].price
      }
    },
    Remove: (state, action) => {
      // console.log(state.cart[action.payload].inc);
      state.tot_cart -= 1
      if(state.tot_cart == 0){
        state.display = 'none'
      }
      state.cart[action.payload].token = 1;
      state.cart[action.payload].Removeitem = 1;
    },
    addCard: (state , action) => {
      state.data = state.cart[action.payload];
    },
    dataRemove: (state , action) =>{
      state.cart[action.payload].token1 = 1;
      state.cart[action.payload].Removeitem = 1;
    },
    SerchCart: (state , action) =>{
      
       state.cart = action.payload
       console.log(state.cart);
    }
  }
})

// Action creators are generated for each case reducer function
export const { Add, data, cartinc, cartdec, Remove , addCard , dataRemove , SerchCart} = counterSlice.actions

export default counterSlice.reducer