// EXTERNAL
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
  return (
    <header className="p-4 lg:pb-0 lg:pt-4 lg:mb-16 max-w-screen-xl mx-auto flex justify-between items-center text-black leading-none" >
      <div>
        <Link href="/">
          <a title="Dave">
            <img className="w-32" src="profile-2.jpg" alt="Dave van Hoorn" />
          </a>
        </Link>
      </div>
      <div className="font-bold lowercase leading-none text-gray-400">
        <Link href="/">
          <a className="ml-6 hover:text-black text-teal-400" title="Projecten">
            home
          </a>
        </Link>
        <Link href="/projecten">
          <a className="ml-6 hover:text-black" title="Projecten">
            diensten
          </a>
        </Link>
        <Link href="/projecten">
          <a className="ml-6 hover:text-black" title="Projecten">
            portfolio
          </a>
        </Link>
        <Link href="/projecten">
          <a className="ml-6 hover:text-black" title="Projecten">
            over mij
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
