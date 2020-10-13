// EXTERNAL
import React, { FunctionComponent } from 'react'

// INTERNAL
import IndexLayout from '~/components/Layouts/IndexLayout'
import Logos from '~/components/Logos/Logos'

const Index: FunctionComponent = () => (
  <IndexLayout>
    <main className="sm:px-1 sm:mt-12">
      <div className="relative w-12/12 md:w-10/12 lg:w-4/6 flex flex-col-reverse sm:flex-row items-center mx-auto">
        <div className="w-12/12 sm:w-3/6 pr-6 xl:pr-12">
          <h1 className="text-4xl font-bold">Hi, ik ben Dave</h1>
          <p className="text-xl mt-6">
            Ik werk vanuit Portugal als freelance developer voor bedrijven als Noten.nl,
            Capgemini, Schiphol en ReisReport.nl.
          </p>
          <p className="text-xl mt-6">
            Ik help mijn opdrachtgevers met het optimaliseren van WordPress,
            het maken van WooCommerce plugins of het schrijven van full-stack
            apps in React en TypeScript.
          </p>
          <p className="text-xl mt-6">
            Samenwerken? Stuur een WhatsApp of een email en ik kom snel bij je terug.
          </p>
          <p className="text-xl mt-6">
            Tenha um bom dia (fijne dag)
            {' '}
            <span role="img" aria-label="peace sign">✌️</span>
            <span role="img" aria-label="Portugese vlag">🇵🇹</span>
          </p>
        </div>
        <div className="absolute sm:relative top-0 right-0 w-5/12 sm:w-3/6 p-4 xl:p-8 mb-4 opacity-25 sm:opacity-100">
          <img className="w-full" src="./davevanhoorn.jpg" alt="Dave van Hoorn van Dave.nl" />
        </div>
      </div>
    </main>
    <Logos />
  </IndexLayout>
)

export default Index
