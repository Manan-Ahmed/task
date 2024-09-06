"use client"
import { ProductData } from '@/context/product-context'


export default function CartList({addToCart}:any) {
    const {products,fetchProducts,setProducts,setCount,cart,setCart,cartShow,setCartShow} = ProductData()!
  
    


   return(
   <>



{
  cart.map((item,ind)=>(

  <div className="card" style={{ width: "18rem" }}>
  <div className="card-body" key={item.name + item.id}>
    <h5 className="card-title">{item.category}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{item.name}</h6>
    <p className="card-text">
      {item.price}
    </p>
         <p className="card-text">qty: {item.qty}</p>
         <p className="card-text">totalBill: {item.bill}</p>

  </div>
</div>
  ))
}
    </>
   )
  
}



