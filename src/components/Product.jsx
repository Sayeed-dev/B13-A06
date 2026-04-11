import React, { use } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
const Product = ({ productData }) => {
  const data = use(productData);
  const [isCart, setIsCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="py-12">
      {" "}
      <h1 className="text-center text-3xl font-bold text-[#00101f]">
        Premium Digital Tools
      </h1>
      <p className="text-center text-[#00101f] mt-2 text-lg py-3">
        Choose from our curated collection of premium digital products <br />{" "}
        designed to boost your productivity and creativity.
      </p>
      <div className="btn-area flex justify-center gap-2 mt-4">
        <button
          onClick={() => {
            setIsCart(false);
          }}
          className={
            isCart
              ? `btn bg-white text-[#00101f] rounded-full border border-[#00101f] w-40`
              : `btn bg-[#00101f] text-white rounded-full w-40`
          }
        >
          All Product
        </button>
        <button
          onClick={() => {
            setIsCart(true);
          }}
          className={
            isCart
              ? `btn bg-[#00101f] text-white rounded-full w-40`
              : `btn bg-white text-[#00101f] rounded-full border border-[#00101f] w-40`
          }
        >
          Cart Items
        </button>
      </div>
      <div className={isCart ? "container mx-auto  px-4 flex flex-col gap-6 mt-8 justify-items-center" : "container mx-auto  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center"}>
        {isCart ? (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        ) : (
          data.map((product) => (
            <div className="">
              <ProductCard
                key={product.id}
                product={product}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
