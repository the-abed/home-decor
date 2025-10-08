import React, { useState } from "react";
import { Link } from "react-router";
import useProducts from "../Hooks/useProducs";
import ProductCard from "../Components/ProductCard";

const Product = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchProducts = term
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : products;
  return (
    <div className="max-w-6xl mx-auto py-6 px-5 md:px-0">
      <div className="flex justify-between my-3">
        <h1 className="font-semibold text-xl">
          All Products{" "}
          <span className="text-sm text-gray-400 font-normal">
            Product pound({searchProducts.length})
          </span>
        </h1>
         <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
