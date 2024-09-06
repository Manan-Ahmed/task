

"use client"
import {ProductData  } from "@/context/product-context";
import Link from "next/link";
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

// let matchFound;
// let findIndex:any;
//    cart.map((item,index)=>{
//     item.id === product.id
//     matchFound = true
//     findIndex = index
//    })
  
//    if(matchFound){
//        console.log('hello');
//        let clone = products[findIndex]
//        clone.qty = clone.qty + 1
//        clone.bill = clone.qty * clone.price
       
//    }
//    else{
//         let cloneProduct = {...product}
//         cloneProduct.qty = 1
//         cloneProduct.bill = cloneProduct.qty * cloneProduct.price
//         cart.push(cloneProduct)
//         setCart([...cart])
//         console.log(cart);

//    }
   
//  let cartItem  = [...cart]
 
//  cart.map((data)=>{
//       if(data.id === item.id){
//         let clone = {...item}
//         clone.qty = 1
//        clone.bill =  clone.price * clone.qty 
    
//       }
//       else{
//         let clone = products[item]
//         // clone.qty = clone.qty + 1
//         // clone.bill =  clone.price * clone.qty
//         cart.push(clone)
//         setCart([...cart])
//         console.log(cart);
//    console.log(clone);
   
   
   
           
         
 
//        let [data]:any = cart.findIndex((prd : {id : any})=> prd.id === product.id)
//       console.log(data);
      
// if(data === -1){
//     product.qty = 1
//     product.bill = product.qty * product.price
    
//     setCart([...cart,product])
// }
// else{
//   data.qty = data.qty +  1
//   data.bill = data.qty * data.price
// }
      

      
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