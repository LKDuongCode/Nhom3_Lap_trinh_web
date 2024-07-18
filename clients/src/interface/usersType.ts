// type cho state users----------------------------------------------------
export type User  = {
    id: number;
    favorites:number[];
    carts:number[],
    user_name: string;
    email: string;
    password: string;
    role: boolean;
    status: boolean;
    full_name: string;
    avata: string;
    phone: string;
    address: string;
    created_at: string;
    updated_at: string;
  }
export type StateUserType = {
    loading:boolean;
    data:User[];
    error:string | null;
}