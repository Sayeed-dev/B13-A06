import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import { useState } from "react";



function App() {

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
