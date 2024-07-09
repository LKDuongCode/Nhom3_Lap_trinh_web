import { Category, StateCategoryType } from "./categoriesType";
import { StateProductType } from "./productsType";
import { StateUserType } from "./usersType";





// type chung
export interface CombineType {
    users:StateUserType;
    categories:StateCategoryType;
    products:StateProductType;
}
