
export type products={
    id:number,
    qty:string
}

export type CartProducts={
    payload: products
}
export interface cartItems{
    name: string
    image: string,
    _id: number,
    description: string,
    price: string,
    brand: string,
    Category: string,
    CountInStock: number,
    rating: number,
    numReviews: number,
    quantity:number
}
