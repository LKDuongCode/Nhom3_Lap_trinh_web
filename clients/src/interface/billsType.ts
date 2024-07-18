
export type Bill ={
    id:number,
    user_id: number,
    full_name: string,
    address: string,
    detailAddress: string,
    email: string,
    user_name: string,
    phone: string,
    created_at: string,
    productIn: [],
    total_price: number,
}

export type StateBillType = {
    loading:boolean;
    data:Bill[];
    error:string | null;
}
