// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Kevin Koltraka
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch("http://localhost:3001/api/products");
  const products = await data.json();
  return (
    <div className="bg-gradient-to-l from-white to-green-300">
      <div className="max-w-screen-2xl mx-auto pt-20">
        <Heading title="PRODUKTE TE DALLUARA" />
        <div className="grid grid-cols-2 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} color="black" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
