// EXTERNAL
import React, { FunctionComponent } from 'react'

// INTERNAL
import IndexLayout from '~/components/Layouts/IndexLayout'

const Index: FunctionComponent = () => (
  <IndexLayout>
    <main className="px-1 mt-24">
      <div className="w-4/6 flex items-center mx-auto">
        <div className="w-3/6 pr-12">
          <h1 className="text-4xl font-bold">Hi, ik ben Dave</h1>
          <p className="text-xl mt-6">
            Vanuit Portugal werk ik als developer voor bedrijven als Noten.nl,
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
          </p>
        </div>
        <div className="w-3/6">
          <img className="w-full" src="./davevanhoorn.jpg" alt="Dave van Hoorn van Dave.nl" />
        </div>
      </div>
    </main>
  </IndexLayout>
)

export default Index
