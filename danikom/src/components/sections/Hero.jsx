import React from 'react'
import { motion } from 'framer-motion'


export default function Hero(){
return (
<section className="bg-[url('/images/hero1.png')] bg-cover bg-center">
<div className="backdrop-brightness-75">
<div className="max-w-6xl mx-auto px-4 py-28 flex items-center">
<div className="max-w-2xl text-white">
<motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold leading-tight">Danikom — Pure, Unrefined Shea & African Black Soap</motion.h1>
<p className="mt-4 text-lg text-gray-100/90">Sustainably sourced from women cooperatives in northern Ghana. Ethically produced, exported worldwide.</p>
<div className="mt-6 flex gap-3">
<a href="/products" className="px-5 py-3 rounded-lg bg-accent text-white font-semibold shadow">Shop Products</a>
<a href="/about" className="px-5 py-3 rounded-lg border border-white/30 text-white">Our Story</a>
</div>
</div>
</div>
</div>
</section>
)
}