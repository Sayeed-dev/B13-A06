import React from "react";
import {  toast } from 'react-toastify';
const Cart = ({ cartItems , setCartItems}) => {
  const handleremove = (item) => {
   const newCartItems = (cartItems.filter((c) => item.id !== c.id));
   setCartItems(newCartItems);  
   toast("Item removed from cart!");
  }
  const handleProcced = () => {
    toast.success("Proceeding to checkout!");
    setCartItems([]);
  }
  return (
    <div className="py-16">
      <h1 className="text-center text-3xl font-bold text-[#00101f]">
        Cart Items
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-[#00101f] mt-2 text-lg py-3">
          Your cart is currently empty. <br /> Browse our products and add items
          to your cart.
        </p>
      ) : (
        <div >
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-between p-8 rounded-3xl bg-[#00101f] backdrop-blur-sm border border-white/10 shadow-2xl items-center"
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  {item.title}
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 text-white">
                <span className="text-5xl font-extrabold">${item.price}</span>
                <span className="text-base font-medium opacity-60">/Mo</span>
              </div>

              <button onClick={() => handleremove(item)} className="btn btn-outline text-amber-50 rounded-full hover:bg-amber-50 hover:text-[#00101f]">Remove</button>

            </div>
          ))}

          <div>
            <h2 className="text-3xl font-bold text-[#00101f] text-center tracking-tight mt-8">
              Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
            </h2>
          </div>
          <button onClick={handleProcced} className="btn bg-[#00101f] text-white text-2xl rounded-full mt-8 py-6 px-5 text-center">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
