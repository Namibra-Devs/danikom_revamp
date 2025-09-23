import { useState, useEffect } from 'react'
import api from '@lib/api'


export default function useProducts(){
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(()=>{
let mounted = true
api.get('/products')
.then(r=> mounted && setProducts(r.data))
.catch(e=> mounted && setError(e))
.finally(()=> mounted && setLoading(false))
return ()=> mounted=false
},[])


return {products, loading, error}
}