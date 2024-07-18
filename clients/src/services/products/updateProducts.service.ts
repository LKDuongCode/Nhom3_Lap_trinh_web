import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";
type ProductUpdate = {
  id: number,
  product_name: string,
  description: string,
  unit_price: number,
  stock_quantity: number,
  product_image: string,
  category_id: number,
  updated_at: string,
}
export const updateAproduct:any = createAsyncThunk(
    "products/updateAproduct",
    async (product: ProductUpdate) => {
      let response = await baseURL.patch(`/products/${product.id}`, {
        product_name: product.product_name,
        description: product.description,
        stock_quantity:product.stock_quantity,
        unit_price:product.unit_price,
        product_image:product.product_image,
        category_id:product.category_id,
        updated_at:product.updated_at,
      });
      return response.data;
    }
  );