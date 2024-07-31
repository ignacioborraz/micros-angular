export interface Product {
  _id: string;
  title: string;
  description?: string;
  price: number;
  stock: number;
  images: Array<string> | string;
  colors: Array<string> | string;
  onsale: boolean;
}
