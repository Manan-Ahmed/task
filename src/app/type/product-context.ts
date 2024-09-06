export type ProductType = {
    id: string,
    name: string,
    category: string,
    price: any,
    qty: any,
    bill: any


}

export type CartType = {
    id: string,
    name: string,
    category: string,
    price: any,
    qty: any
    bill: any
}

export type ProductContextType = {
    products: ProductType[];
    cart: CartType[]
    fetchProducts: (products: ProductType[]) => void;
    // addToCart: (cart : CartType[])=> void,
    setProducts: any
    count: any
    setCount: any
   setCart: any
   cartShow: any
   setCartShow: any
}

