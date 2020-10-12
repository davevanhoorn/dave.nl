import Link from 'next/link'
import React from 'react'

const Header = () => (
  <>
    <div className="bg-yellow-200 p-4 mb-4 text-center font-medium">Deze site is in ontwikkeling</div>
    <header className="py-4 flex justify-between items-center text-lg text-black font-medium leading-none">
      <div>
        <Link href="/">
          <a className="p-1 px-2 bg-black text-white">
            Dave.nl
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/wordpress-websites">
          <a className="mr-2 p-1 px-2 hover:bg-black hover:text-white">WordPress optimalisatie</a>
        </Link>
        <Link href="/wordpress-plugins">
          <a className="mr-2 p-1 px-2 hover:bg-black hover:text-white">WooCommerce plugins</a>
        </Link>
        <Link href="/react-typescript-werk">
          <a className="mr-2 p-1 px-2 hover:bg-black hover:text-white">React & TypeScript</a>
        </Link>
        <Link href="/over-mij">
          <a className="mr-2 p-1 px-2 hover:bg-black hover:text-white">Over mij</a>
        </Link>
        <Link href="/contact">
          <a className="p-1 px-2 hover:bg-black hover:text-white">Contact</a>
        </Link>
      </nav>
    </header>
  </>
)

export default Header
