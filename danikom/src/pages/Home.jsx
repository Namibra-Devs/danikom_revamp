import React from "react";
import Hero from "@components/sections/Hero";
// import Features from '@components/sections/Features'
import CoopStory from '@components/sections/CoopStory'
// import Gallery from '@components/sections/Gallery'

export default function Home() {
  return (
    <div>
      <Hero />
     
        <CoopStory />
        {/* <Features />

<Gallery /> */}
      
    </div>
  );
}
