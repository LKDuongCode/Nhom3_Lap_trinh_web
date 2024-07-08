//định nghĩa kiểu cho categories
type ProductInfo = {
    product_id: number;
    product_name: string;
  }
  
export type Category  = {
    id: number;
    category_name: string;
    description: string;
    status: boolean;
    productsInfo: ProductInfo[];
  }
  
// type cho state categories------------------------------------------------
export type StateCategoryType = {
  loading:boolean;
  data:Category[];
  error:string | null;
}