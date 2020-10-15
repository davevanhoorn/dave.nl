// EXTERNAL
import Link from 'next/link'
import React from 'react'

const Services = () => (
  <>
    <h2 className="p-4 text-4xl font-bold leading-tight text-center mt-8 md:mt-10 md:mb-16">Dit kan ik voor je doen</h2>
    <div className="flex flex-wrap max-w-screen-lg mx-auto lg:mt-12 text-lg leading-relaxed font-medium">
      <div className="p-4 md:p-0 w-full md:w-6/12 md:pl-24 md:pr-4 md:mb-12">
        <h6 className="text-3xl mb-2 font-bold leading-tight">WordPress optimalisatie</h6>
        <p className="mb-2">
          Ik kan jouw WordPress site sneller maken,
          {' '}
          <span className="inline lg:block">zoals ik eerder deed voor Noten.nl.</span>
        </p>
        <Link href="/wordpress-websites">
          <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">Meer over WordPress optimalisatie</a>
        </Link>
      </div>
      <div className="p-4 md:p-0 md:w-6/12 md:pr-12 md:pl-12 md:mb-12">
        <h6 className="text-3xl mb-2 font-bold leading-tight">WooCommerce maatwerk</h6>
        <p className="mb-2">
          Ik kan een plugin schrijven voor jouw shop,
          {' '}
          <span className="inline lg:block">zoals ik eerder deed voor ReisReport.nl.</span>
        </p>
        <Link href="/wordpress-websites">
          <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">Meer over WooCommerce maatwerk</a>
        </Link>
      </div>
      <div className="p-4 md:p-0 md:w-6/12 md:pl-24 md:pr-4 md:mb-12">
        <h6 className="text-3xl mb-2 font-bold leading-tight">Een &quot;MVP&quot; maken</h6>
        <p className="mb-2">
          Ik kan een minimum viable product maken,
          {' '}
          <span className="inline lg:block">zoals ik eerder deed voor Schiphol.</span>
        </p>
        <Link href="/wordpress-websites">
          <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">Meer over MVP&apos;s</a>
        </Link>
      </div>
      <div className="p-4 md:p-0 md:w-6/12 md:pr-12 md:pl-12 md:mb-12">
        <h6 className="text-3xl mb-2 font-bold leading-tight">Een kapotte site repareren</h6>
        <p className="mb-2">
          Ik kan jouw SSL certificaat vernieuwen,
          {' '}
          <span className="inline lg:block">zoals ik eerder deed voor Orange Tribes.</span>
        </p>
        <Link href="/wordpress-websites">
          <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">Meer over het repareren van websites</a>
        </Link>
      </div>
    </div>
  </>
)

export default Services
