// EXTERNAL
import React, { FunctionComponent } from 'react'

// INTERNAL
import IndexLayout from '~/components/Layouts/IndexLayout'
import Logos from '~/components/Logos/Logos'

const Index: FunctionComponent = () => (
  <IndexLayout>
    <main className="px-1 mt-12">
      <div className="w-4/6 flex items-center mx-auto">
        <div className="w-3/6 pr-12">
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
        <div className="w-3/6 p-8">
          <img className="w-full" src="./davevanhoorn.jpg" alt="Dave van Hoorn van Dave.nl" />
        </div>
      </div>
    </main>
    <Logos />
  </IndexLayout>
)

export default Index
