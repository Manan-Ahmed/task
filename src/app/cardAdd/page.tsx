"use client"

import { ProductData } from "@/context/product-context"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function CartAdd(){
   const {products,setProducts} = ProductData()!
    const [productName,setProductName] = useState('')
    const [productCategory,setProductCategory] = useState('')
    const [productPrice,setProductPrice] = useState('')
const router = useRouter()




const back = ()=>{
    router.push('/')
}
const addOne = (newCard: any)=>{
    let clone = [...products,newCard]
    setProducts([...clone])
    console.log(clone);
    
}


    const submit = (e:any)=>{
e.preventDefault()
const card = {
    id: `666pp${productCategory}000`,
    name: productName,
    category: productCategory,
    price: productPrice,
    qty: 0

}
addOne(card)
router.push('/')

setProductName('')
setProductCategory('')
setProductPrice('')
    }
    return(

        <>


          


<form onSubmit={submit} className="mt-4 " >
  <div className="mb-3 w-45 m-5" >
    <label htmlFor="exampleInputEmail1" className="form-label">
      Product Category
    </label>
    <input
      type="text"
      className="form-control "
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={productCategory} onChange={(e)=>{setProductCategory(e.target.value)}}
    />
    
  </div>
  <div className="mb-3 m-5">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Product Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      value={productName} onChange={(e)=>{setProductName(e.target.value)}} 
    />
  </div>

   <div className="mb-3 m-5">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Select Price
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}}
    />
  </div>
  <button onClick={back} className="btn btn-primary " style={{position: 'relative',left: "1160px", margin: '3px'}}>
    Back
  </button>

  <button type="submit" className="btn btn-primary " style={{position: 'relative',left: "1180px"}}>
    Submit
  </button>

  
</form>

            
        </>
    )
}