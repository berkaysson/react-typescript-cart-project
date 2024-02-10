import { ReactElement, createContext, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type UseProductContextType = {
  products: ProductType[];
};

const initContextState: UseProductContextType = { products: initState }

const ProductsContext = createContext<UseProductContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined
}

export const ProductsProvider = ({children}: ChildrenType):ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<ProductType[]>(initState);

  return <ProductsContext.Provider value={{products}}>
    {children}
  </ProductsContext.Provider>
}

export default ProductsContext;