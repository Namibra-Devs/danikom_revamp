import React from "react";
import Hero from "@components/sections/Hero";
import CoopStory from "@components/sections/CoopStory";
import ProductGallery from "@components/sections/ProductGallery";
import CountriesSection from "@components/sections/CountriesSection";
// import Testimonials from "@components/sections/Testimonials";
import FAQ from "@components/sections/FAQ";
import CustomerStories from "@components/sections/CustomerStories";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoopStory />
      <ProductGallery />
      <CountriesSection />
      <CustomerStories />
      {/* <Testimonials />   */}
      <FAQ />
    </div>
  );
}
