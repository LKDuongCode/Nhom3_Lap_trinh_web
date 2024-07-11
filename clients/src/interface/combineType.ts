import { Category, StateCategoryType } from "./categoriesType";
import { StateCartType, StateProductType } from "./productsType";
import { StateUserType } from "./usersType";





// type chung
export interface CombineType {
    users:StateUserType;
    categories:StateCategoryType;
    products:StateProductType;
    carts:StateCartType;
}
