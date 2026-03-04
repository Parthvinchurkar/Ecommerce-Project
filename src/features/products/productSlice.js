import { createSlice } from "@reduxjs/toolkit"
import menKurta from "../../assets/images/menkurta.jpg"
import womenSaree from "../../assets/images/womensaree.jpg"
import kidtshirt from "../../assets/images/kidtshirt.jpg"
import Jeans from"../../assets/images/Jeans.jpg"
import OnePlus from"../../assets/images/Oneplus.jpg"
import Iphone from"../../assets/images/Iphone.jpg"
import Wheat from"../../assets/images/Wheat.jpg"
const initialState = {
  products: [
    {
      id: 1,
      title: "Men Kurta",
      price: 1499,
      gender: "men",
      category:"clothes",
      thumbnail: menKurta
    },
    {
      id: 2,
      title: "women Saree",
      price: 2499,
      gender: "women",
      category:"clothes",
      thumbnail: womenSaree
    },
    {
      id: 3,
      title: "Kid Tshirt",
      price: 799,
      gender: "kids",
       category:"clothes",
      thumbnail: kidtshirt
    },
    {
       id:4,
       title:"Jeans",
       price:4000,
       gender:"men",
        category:"clothes",
       thumbnail:Jeans
      },
      {
        id:5,
        title:"One Plus 15",
        price:20000,
        gender:"all",
        category:"electronics",
        thumbnail:OnePlus
      },
      {
        id:6,
        title:"Iphone 15",
        price:75000,
        gender:"all",
        category:"electronics",
        thumbnail:Iphone
      },
      {

         id:7,
        title:"Whear Flour",
        price:20000,
        gender:"all",
        category:"grocery",
        thumbnail:Wheat

      }
  ]
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
})

export default productSlice.reducer