// EXTERNAL
import Link from 'next/link'
import React from 'react'

// INTERNAL
import styles from './header.module.css'

const Header = () => (
  <>
    <div className={styles.headerWrapper}>
      <header className="py-4 lg:py-8 flex justify-between items-center text-lg text-black font-medium leading-none px-3 max-w-screen-lg mx-auto p-4">
        <div>
          <Link href="/">
            <a className="p-2 px-1 text-black font-bold">
              Dave.nl
            </a>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <Link href="/wordpress-websites">
            <a className="mr-1 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded">WordPress optimalisatie</a>
          </Link>
          <Link href="/react-typescript-werk">
            <a className="mr-1 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded">React & TypeScript</a>
          </Link>
          <Link href="/over-mij">
            <a className="mr-4 xl:mr-1 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded">Over mij</a>
          </Link>
          <Link href="/contact">
            <a className="hidden xl:inline-block mr-4 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded">Contact</a>
          </Link>
          <Link href="/samenwerken">
            <a className="p-2 px-3 bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white border border-orange-500 hover:border-transparent rounded">Samenwerken</a>
          </Link>
        </nav>
        <button type="button" className="block lg:hidden p-2 px-3 bg-black text-white rounded">Menu</button>
      </header>
    </div>
  </>
)

export default Header
