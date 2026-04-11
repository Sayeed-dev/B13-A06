import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const ProductCard = ({ product, cartItems, setCartItems }) => {
  const [isBuying, setIsBuying] = useState(false);
  const handleBuyNow = () => {
    setIsBuying(true);
    toast("Added to Cart!");
    setCartItems([...cartItems, product]);
  };
  return (
    <div className="">
      <div className="relative w-full max-w-sm p-8 rounded-3xl bg-[#00101f] backdrop-blur-sm border border-white/10 shadow-2xl space-y-7 group transition hover:scale-[1.01]">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {product.title}
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1 text-white">
          <span className="text-5xl font-extrabold">${product.price}</span>
          <span className="text-base font-medium opacity-60">/Mo</span>
        </div>

        <ul className="space-y-4 pt-1">
          {[
            "Unlimited AI generations",
            "50+ writing templates",
            "Grammar checker",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-success/20 text-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-white/80 text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleBuyNow}
          className="w-full h-14 rounded-full bg-primary text-white text-lg font-bold tracking-wide shadow-primary-shadow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] active:shadow-primary-active-shadow"
        >
          {isBuying ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
