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
    category_img:string;
    productsInfo: ProductInfo[];
  }
  
// type cho state categories------------------------------------------------
export type StateCategoryType = {
  loading:boolean;
  // currentPage: number;
  // totalPages: number;
  data:Category[];
  error:string | null;
  // itemsPerPage:number;
}