import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stat from "./components/Stat";
import { Suspense } from "react";
import { useState } from "react";



function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
    </>
  );
}

export default App;
