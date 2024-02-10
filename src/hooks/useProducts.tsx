import { useContext } from "react";
import ProductsContext, {
  UseProductContextType,
} from "../context/ProductsProvider";

const useCart = (): UseProductContextType => {
  return useContext(ProductsContext);
};

export default useCart;
