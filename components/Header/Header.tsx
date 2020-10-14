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
      <div className="bg-red-400 text-center py-4 text-white">Deze site is in ontwikkeling.</div>
      <div className={styles.headerWrapper}>
        <header className="py-4 flex justify-between items-center text-lg text-black leading-none px-3 max-w-screen-lg mx-auto p-4">
          <div>
            <Link href="/">
              <a title="Dave">
                <img className="w-20" src="profile.jpg" alt="Dave" />
              </a>
            </Link>
          </div>
          <nav className={`${menuIsVisible ? 'block fixed top-0 right-0 w-auto bg-black h-full flex flex-col items-start p-4 z-30' : 'hidden lg:block'}`}>
            <Link href="/wordpress-websites">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded-sm'}`}>WordPress optimalisatie</a>
            </Link>
            <Link href="/react-typescript-werk">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded-sm'}`}>React & TypeScript</a>
            </Link>
            <Link href="/over-mij">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded-sm'}`}>Over mij</a>
            </Link>
            <Link href="/contact">
              <a className={`${menuIsVisible ? 'py-2 mb-4 bg-black text-white' : 'mr-2 p-2 px-3 bg-white text-black hover:bg-black hover:text-white rounded-sm'}`}>Contact</a>
            </Link>
            <Link href="/samenwerken">
              <a className={`p-2 px-3 rounded-sm ${menuIsVisible ? 'bg-black text-white border-yellow-500 bg-yellow-500' : 'bg-transparent bg-teal-400 text-white hover:border-transparent'}`}>Samenwerken</a>
            </Link>
            {menuIsVisible && (
              <button type="button" className="flex justify-end items-end flex-grow mr-4 xl:mr-1 py-2 bg-black text-white hover:bg-black hover:text-white rounded text-sm font-bold mt-2" onClick={handleToggleMenu}>Menu sluiten</button>
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
