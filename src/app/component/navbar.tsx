"use client"
import Link from "next/link";
import Product from "./productList";
import { ProductData } from "@/context/product-context";
import { useState } from "react";
import CartAdd from "../cardAdd/page";
import { useRouter } from "next/navigation";


export default function Navbar({ toggle }: any) {
  const [chng, setChng] = useState(false)
  // const {cart,cartShow} = ProductData()!
  const router = useRouter()

  const { cartShow, setCartShow, cart } = ProductData()!


  const go = () => {
    router.push('/cardAdd')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shopping Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
            </ul>


            <button className="btn btn-outline-success m-3" onClick={go}>AddCart</button>

            <button className="btn btn-outline-success" onClick={(e) => { setCartShow(!cartShow) }}>
              {`cartList${cart.length}`}
            </button>

            {/* <Link href={"./cardAdd"}>AddProduct</Link> */}
          </div>
        </div>
      </nav>
      {/* {
    chng? <CartAdd />: <Product />

} */}

    </>
  )
}