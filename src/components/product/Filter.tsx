import { useState, useEffect } from "react";

import useProductsStore from "../../zustand/productsStore";

import { InputText } from "primereact/inputtext";

const Filter = () => {
  const [search, setSearch] = useState<string>("");

  const { products, filteredProducts, setFilteredProducts } =
    useProductsStore();

  useEffect(() => {
    if (search.length > 2) {
      const searchProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(searchProducts);
    } else {
      setFilteredProducts([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="flex gap-2">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          placeholder="Busca un producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <div>
        {search.length > 2 && (
          <p>Se han encontrado: {filteredProducts.length} resultados</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
