import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat";
import { Suspense } from "react";
import Product from "./components/Product";
import { ToastContainer } from "react-toastify";
import GetSarted from "./components/GetSarted";
import Plan from "./components/Plan";
import CallToAction from "./components/CallToAction";
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
      <GetSarted />
      <Plan />
      <CallToAction />
    </>
  );
}

export default App;
