/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Productitem({product}:any) {
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
       <div className="flex flex-col item-center justify-center"></div> 
       
    
    
    </div>
  )
}
