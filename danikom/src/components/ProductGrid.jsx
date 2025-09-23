import React from 'react'
import ProductCard from '@components/ProductCard'


const MOCK = [
{ id:1, name:'Unrefined Shea Butter - 250g', short:'Cold-pressed, raw', price:'9.99', slug:'shea-250', image:'/images/shea.jpeg'},
{ id:2, name:'African Black Soap - 200g', short:'Traditional, handmade', price:'7.99', slug:'blacksoap-200', image:'/images/blacksoap.jpg'},
]


export default function ProductGrid(){
return (
<div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
{MOCK.map(p => <ProductCard key={p.id} product={p} />)}
</div>
)
}