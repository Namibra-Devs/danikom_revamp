import React from 'react'
import ProductGrid from '@components/ProductGrid'


export default function Products(){
return (
<div className="py-12">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl font-semibold">Our Products</h2>
<p className="text-gray-600 mt-2">Pure, unrefined Shea butter and traditional African Black soap — packaged for global markets.</p>
<ProductGrid />
</div>
</div>
)
}