"use client"

import { CartType, ProductContextType, ProductType } from "@/app/type/product-context"
import {createContext, useContext, useState} from "react"





const productsData = [
    {
        
        id:  `666ppLaptop000`,
        name: 'Macbook',
        category: 'Laptop',
        price: '500',
        qty: 0,
        bill:0
    },
    {
        id: `666ppMobile000`,
        name: 'iPhone',
        category: 'Mobile',
        price: '500',
        qty: 0,
        bill: 0
    },
]

const ProductContext = createContext<ProductContextType | null>(null)

export default function ProductContextProvider({children}: {children: React.ReactNode}){
const [products,setProducts] = useState<ProductType[]>(productsData)

const [cart,setCart] = useState<CartType[]>([])
const [count,setCount] = useState<ProductContextType>()
const [cartShow,setCartShow] = useState(false)
const fetchProducts = (card:ProductType[])=>{
    setProducts([...products,...card])
}

    return(
        <>
        <ProductContext.Provider value={
            {products,fetchProducts,setProducts,count,setCount,cart,setCart,cartShow,setCartShow}
            }>
            {children}
            </ProductContext.Provider>
        
        </>
    )
}



export const ProductData = ()=> useContext(ProductContext)
