import { Product } from "../types";

export async function getItemDetail(id:string): Promise<Product> {
  const response = await fetch(`http://localhost:3000/api/detail?id=${id}`);
  const data = await response.json();
  return data[0];
}