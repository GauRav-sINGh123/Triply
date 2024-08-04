import Hero from "@/components/hero/Hero";
import Middle from "@/components/middle/Middle";
import React from "react";
import Testmonials from "@/components/testomonials/Testmonials";
import Brands from "@/components/brands/Brands";

function Landing() {
  return (
    <>
      <Hero />
      <Middle />
      <Testmonials />
      <Brands />
    </>
  );
}

export default Landing;
