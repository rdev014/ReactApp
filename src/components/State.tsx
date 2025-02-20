import { useState } from "react";

interface Product {
Name: string;
Description:string;
Price:number;
inStock:boolean;
}

export default function State() {
  const [product, setProduct] = useState<Product>();

  return <div>{product.name}</div>;
}
