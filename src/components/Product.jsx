import React, { use } from "react";
import ProductCard from "./ProductCard";
const Product = ({ productData }) => {
  const data = use(productData);
  return (
    <div className="py-6">
      {" "}
      <h1 className="text-center text-3xl font-bold text-[#00101f]">
        Premium Digital Tools
      </h1>
      <div className="btn-area flex justify-center gap-4 mt-4">
        <button className="btn bg-[#00101f] text-white rounded-full">All Product</button>
        <button className="btn bg-white text-[#00101f] rounded-full border border-[#00101f]">Cart Items</button>
      </div>
      <div className="container mx-auto  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
