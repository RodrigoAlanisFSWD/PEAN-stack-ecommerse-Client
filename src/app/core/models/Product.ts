import { Category } from "./Category";

export interface Product {
  id: number,
  name: string,
  price: number,
  count: number,
  category: Category,
}
