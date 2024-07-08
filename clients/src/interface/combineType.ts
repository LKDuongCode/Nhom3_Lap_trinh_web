import { StateUserType } from "./usersType";

// type cho state categories------------------------------------------------
export type StateCategoryType = {
    loading:boolean;
    data:[];
    error:string | null;
}



// type chung
export interface CombineType {
    users:StateUserType;
}
