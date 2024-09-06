

"use client"
import {ProductData  } from "@/context/product-context";
import { useRouter } from "next/navigation";
import CartList from "./selectCart-list/page";



export default function Product(){
    const {products,setProducts,setCount,cart,setCart,cartShow,setCartShow} = ProductData()!
    const router = useRouter();

    const delet = (e:any)=>{
        console.log(e);
    let cloneProduct = [...products]
    cloneProduct.splice(e,1)
        setProducts(...[cloneProduct])
    
    }

    const edit = (index:any)=>{
         setCount(index)
         router.push('/editForm');
console.log(index);

    }
    
 
const addToCart = (product:any)=>{
  console.log(product);
  
let [filterCard] = cart.filter((data)=> data.id === product.id)

if(filterCard == undefined){
      product.qty = 1
      product.bill = product.qty * product.price

      setCart([...cart,product])
}
else{
  filterCard.qty = filterCard.qty + 1
  filterCard.bill = filterCard.qty * filterCard.price
}


      

      
}
          

   
    return(
        <>
 

 {

  cartShow && <CartList/> 

} 

<div className="d-flex flex-wrap gap-3 m-3">
{

  

products.map((item:any,ind: any)=>(



<div className="card "  style={{display: cartShow? 'none' :"block" ,width: "18rem" }} >

  <div className="card-body" key={item.name + item.id}>
    <h5 className="card-title">{item.category}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{item.name}</h6>
    <p className="card-text">
      {item.price}
    </p>
    <button onClick={()=>{addToCart(item)}}  style={{borderRadius: '15px', margin: '4px',backgroundColor: 'white',}}>addToCart</button>
     <button onClick={(e)=>{edit(ind)}} style={{borderRadius: '15px', margin: '4px',backgroundColor: 'white',}} >edit</button>
     <button onClick={(e)=>{delet(ind)}} style={{borderRadius: '15px', margin: '4px',backgroundColor: 'white',}} >Delete</button>
  </div>
</div>

  )
        
  )
}
</div>
        
        </>
    )
}