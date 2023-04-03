export interface Params {
  params:       ParamsClass;
  searchParams: SearchParams;
}

export interface ParamsClass {
  id: string;
}

export interface SearchParams {
}

export interface Product {
  id:          string;
  name:        string;
  price:       string;
  image:       string;
  active:      boolean;
  seller:      string;
  brand:       string;
  model:       string;
  color:       string;
  category:    string;
  description: string;
}