// EXTERNAL
import Head from 'next/head'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

// INTERNAL
import IndexLayout from '~/components/Layouts/IndexLayout'
import Logos from '~/components/Logos/Logos'
import Project from '~/components/Project/Project'

const Index: FunctionComponent = () => (
  <>
    <Head>
      <title>Freelance web developer - Dave.nl</title>
      <meta name="description" content="Vanuit Portugal werk ik als freelance web developer voor bedrijven als Noten.nl, Capgemini, Schiphol en ReisReport.nl." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <IndexLayout>
      <main className="sm:px-1 sm:mt-6">
        <div className="relative w-12/12 md:w-10/12 lg:w-11/12 flex flex-col-reverse sm:flex-row items-center mx-auto">
          <div className="pt-4 sm:pt-0 w-12/12 sm:w-3/6 pr-6 xl:pr-12 text-lg font-medium">
            <h1 className="text-4xl font-bold leading-none">
              Hallo, Dave hier
              {' '}
              <span role="img" aria-label="Zwaaiende hand">👋</span>
            </h1>
            <p className="mt-6 leading-relaxed">
              Vanuit Portugal werk ik als freelance web developer voor bedrijven als Noten.nl,
              Capgemini, Schiphol en ReisReport.nl.
            </p>
            <p className="mt-6 leading-relaxed">
              Ik help met
              {' '}
              <Link href="/wordpress-websites">
                <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">WordPress optimalisatie</a>
              </Link>
              , het maken van
              {' '}
              <Link href="/woocommerce-plugins">
                <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">WooCommerce plugins</a>
              </Link>
              {' '}
              of het schrijven van full-stack apps in
              {' '}
              <Link href="/full-stack-mvp">
                <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">
                  React en TypeScript
                </a>
              </Link>
              .
            </p>
            <p className="mt-6 leading-relaxed">
              Samenwerken? Neem contact op via
              {' '}
              <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium" href="https://wa.me/31616910079" rel="noopener noreferrer" target="_blank">WhatsApp</a>
              {' '}
              of per
              {' '}
              <a href="mailto:mail@dave.nl" className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium">email</a>
              {' '}
              en ik kom snel bij je terug.
            </p>
            <p className="mt-7 leading-relaxed">
              Tenha um bom dia (heb een fijne dag)
              {' '}
              <span role="img" aria-label="Portugese vlag">🇵🇹</span>
            </p>
          </div>
          <div className="hidden sm:block absolute sm:relative top-0 right-0 w-6/12 sm:w-3/6 sm:p-4 xl:p-16 xl:px-0 sm:opacity-100">
            <img className="w-full" src="./davevanhoorn.jpg" alt="Dave van Hoorn van Dave.nl" />
          </div>
        </div>
      </main>
      <Logos />
    </IndexLayout>
    <Project />
  </>
)

export default Index
