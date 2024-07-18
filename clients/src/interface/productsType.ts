export type Product ={
    id:number,
    product_name:string,
    category_id:number,
    description:string,
    unit_price:number,
    stock_quantity:number,
    product_image:string,
    created_at:string,
    updated_at:string,
}

export type StateProductType = {
    loading:boolean;
    data:Product[];
    error:string | null;
}
