import React from "react";
import Hero from "@components/sections/Hero";
import CoopStory from "@components/sections/CoopStory";
import ProductGallery from "@components/sections/ProductGallery";
import CountriesSection from "@components/sections/CountriesSection";
import Testimonials from "@components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoopStory />
      <ProductGallery />
      <CountriesSection />
      <Testimonials />  
    </div>
  );
}
