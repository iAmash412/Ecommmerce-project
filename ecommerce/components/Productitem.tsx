/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}:any) {
  return (
    <div className="card">
        <Link href={`/product/${product.slug}`} legacyBehavior>
            <a>
             <img
                src={product.image}
                alt={product.name}
                className="rounded shadow"
             />
            </a>
        </Link>
       <div className="flex flex-col item-center justify-center p-5"></div> 
       <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
       <h2 className="text-lg">{product.name}</h2>
       </a>
       </Link>
            
       <p className="mb-2">{product.countryOfOrigin}</p>
       <p>${product.price}</p>
       <button className="primary-button" type="button">
        Add to Cart
       </button>
    
    
    </div>
  )
}
