import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product } from "../interfaces/product";

type ProductsStore = {
  products: Product[];
  filteredProducts: Product[];
  setProducts: (products: Product[]) => void;
  setFilteredProducts: (products: Product[]) => void;
  addProductStore: (product: Product) => void;
  updateProductStore: (id: number, product: Product) => void;
};

const useProductsStore = create<ProductsStore>()(
  devtools((set) => ({
    products: [],
    filteredProducts: [],
    setProducts: (products) => set({ products }),
    setFilteredProducts: (products) => set({ filteredProducts: products }),
    addProductStore: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    updateProductStore: (id, product) =>
      set((state) => ({
        products: state.products.map((p) =>
          p.id === id ? { ...p, ...product } : p
        ),
      })),
  }))
);

export default useProductsStore;
