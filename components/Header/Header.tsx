// EXTERNAL
import Link from 'next/link'
import React, { useState } from 'react'

// INTERNAL
import styles from './header.module.css'

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const handleToggleMenu = () => {
    setMenuIsVisible((currentState) => !currentState)
  }
  return (
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
          <nav className={`${menuIsVisible ? 'block fixed top-0 right-0 w-auto bg-black h-full flex flex-col items-start p-4 z-30' : 'hidden lg:block'}`}>
            <Link href="/wordpress-websites">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'mr-1 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded'}`}>WordPress optimalisatie</a>
            </Link>
            <Link href="/react-typescript-werk">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'mr-1 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded'}`}>React & TypeScript</a>
            </Link>
            <Link href="/over-mij">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'mr-1 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded'}`}>Over mij</a>
            </Link>
            <Link href="/contact">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'mr-4 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded'}`}>Contact</a>
            </Link>
            <Link href="/samenwerken">
              <a className={`p-2 px-3 rounded ${menuIsVisible ? 'bg-black text-white border-orange-500 bg-orange-500' : 'bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white border border-orange-500 hover:border-transparent'}`}>Samenwerken</a>
            </Link>
            {menuIsVisible && (
              <button type="button" className="flex justify-end items-end flex-grow mr-4 xl:mr-1 py-2 bg-black text-white hover:bg-black hover:text-white rounded text-sm font-medium mt-2" onClick={handleToggleMenu}>Menu sluiten</button>
            )}
          </nav>
          <button type="button" className="block lg:hidden p-2 px-3 bg-black text-white rounded" onClick={handleToggleMenu}>Menu</button>
          {menuIsVisible && (
            <div
              role="none"
              onClick={handleToggleMenu}
              className={`fixed w-full h-full top-0 left-0 bg-white z-20 ${menuIsVisible ? 'opacity-75' : 'opacity-0'}`}
            />
          )}
        </header>
      </div>
    </>
  )
}

export default Header
