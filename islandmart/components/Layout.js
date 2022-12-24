import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({title, children}){
  return (
    <>
        <Head>
        <title>{title? title + ' - Island Mart': 'Island Mart'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex min-h-screen flex-col justify-between">
         <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href = "/" legacyBehavior>
              <a className="text-lg font-bold">Island Marts</a>
            </Link>
            <div>
              <Link href = "/cart">Cart</Link>
              <Link href = "/login">Login</Link>
            </div>
          </nav>
         </header>
         <main className="container m-auto mt-4 px-4">
            {children}
         </main>
          <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022  The Island Mart Limited</p>
          </footer>
        </div>
    </>
  )
}
