"use client"
import { ProductData } from "@/context/product-context"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function EditForm(){

    const {products,setProducts,count} = ProductData()!

    let index = products[count]
const [productName,setProductName] = useState(index.name)
const [productCategory,setProductCategory] = useState(index.category)
const [productPrice,setProductPrice] = useState(index.price)


const edtFrm = (edtCard:any)=>{
    let clone = [...products]
    // let target = products[count]
    clone.splice(count,1,edtCard)
     
    setProducts([...clone])
}

   const submit = (e:any)=>{
         e.preventDefault()
const product = {
    id: `666pp${productCategory}000`,
    category: productCategory,
    name: productName,
    price: productPrice,
    qty: 0
}

edtFrm(product)
setProductName('')
setProductCategory('')
setProductPrice('')

   }

   const router = useRouter()




const back = ()=>{
    router.push('/')
}
    return(

        <>
        {/* <form onSubmit={submit}>
            <label >Product Name</label>
            <input type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} />

            <label >Product category</label>
            <input type="text" value={productCategory} onChange={(e)=>{setProductCategory(e.target.value)}} />

            <label >Product Price</label>
            <input type="text" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} />


<button type="submit">Save</button>

        </form> */}
        


         


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
  {/* <button onClick={back} className="btn btn-primary " style={{position: 'relative',left: "1160px", margin: '3px'}}>
    Back
  </button> */}

  <button type="submit" className="btn btn-primary " style={{position: 'relative',left: "1180px"}}>
    Submit
  </button>

  
</form> 
        </>
    )
}



