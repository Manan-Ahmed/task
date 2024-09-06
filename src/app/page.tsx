"use client"
import { useState } from "react";
import Product from "./component/productList";
import CartAdd from "./cardAdd/page";
import { ProductData } from "@/context/product-context";
import Link from "next/link";
import Navbar from "./component/navbar";
export default function Home() {
  const { cart, setCart, cartShow, setCartShow } = ProductData()!
  const [chng, setChng] = useState(false)


  // const toggle = cartShow? "displayitem" : `cartList${cart.length}`

  return (

    <>




      <br />
      {
        chng ? <CartAdd /> : <Product />

      }



    </>
  )
}
