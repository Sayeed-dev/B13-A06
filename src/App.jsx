import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat";
import { Suspense } from "react";
import Product from "./components/Product";
import { ToastContainer } from "react-toastify";
const toolsData = async () => {
  const response = await fetch("data.json");
  return response.json();
};
const productData = toolsData();

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Stat />
      <Suspense fallback={<div>Loading...</div>}>
        <Product productData={productData} />
      </Suspense>
    </>
  );
}

export default App;
