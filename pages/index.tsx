// EXTERNAL
import Head from 'next/head'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

// INTERNAL
import Header from '~/components/Header/Header'
import Logos from '~/components/Logos/Logos'
import Project from '~/components/Project/Project'
import Services from '~/components/Services/Services'

const Index: FunctionComponent = () => (
  <>
    <Head>
      <title>Freelance Digital Designer - Dave.nl</title>
      <meta name="description" content="Vanuit Portugal werk ik als freelance Digital Designer voor bedrijven als Noten.nl, Capgemini, Schiphol en ReisReport.nl." />

      {/* Facebook tags */}
      <meta property="og:url" content="https://dave.nl/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ik ben Dave, freelance Digital Designer." />
      <meta property="og:description" content="Bedrijven als Capgemini, Schiphol en ReisReport.nl huren mij in voor het optimaliseren of bouwen van hun websites en apps. Waar kan ik jou mee helpen?" />
      <meta property="og:image" content="https://dave.nl/cover_index.jpg" />

      {/* LinkedIn tags */}

      {/* Twitter tags */}
    </Head>
    <Header />
    <main className="p-4 lg:pb-0 lg:pt-8 lg:mb-20 max-w-screen-lg mx-auto">
      <div className="text-lg font-bold mb-8">
        <h1 className="inline sm:block text-2xl sm:text-4xl text-gray-400 mb-2">
          Hi, ik ben Dave, een freelance Digital Designer.
        </h1>
        <p className="inline sm:block ml-1 lg:ml-0 text-2xl sm:text-4xl lg:text-5xl">
          <span className="lg:inline-block">
            Ik maak jouw
            {' '}
            <Link href="/wordpress-websites">
              <a className="border-bottom border-dotted border-solid border-b-2 lg:border-b-4 border-teal-500 hover:text-teal-500">WordPress site sneller</a>
            </Link>
            ,
            {' '}
          </span>
          <span className="lg:inline-block">
            <span className="lg:block">
              schrijf
              {' '}
              <Link href="/woocommerce-plugins">
                <a className="border-bottom border-dotted border-solid border-b-2 lg:border-b-4 border-teal-500 hover:text-teal-500">WooCommerce plugins</a>
              </Link>
              {' '}
            </span>
          </span>
          <span className="lg:block">
            of bouw MVP&apos;s met
            {' '}
            <Link href="/full-stack-mvp">
              <a className="border-bottom border-dotted border-solid border-b-2 lg:border-b-4 border-teal-500 hover:text-teal-500">
                React en TypeScript
              </a>
            </Link>
            .
          </span>
        </p>
      </div>
      <div className="sm:pt-0 py-4 flex flex-col sm:flex-row items-center">
        <Link href="/projecten">
          <a
            className="hover:bg-teal-500 bg-teal-400 text-white rounded font-medium text-xl leading-none py-4 px-8 lg:px-24 mr-2"
            title="Projecten"
          >
            Begin een project
          </a>
        </Link>
        <Link href="/projecten">
          <a
            className="text-gray-400 text-white text-base font-medium leading-none py-2 sm:mt-0 mt-2 sm:ml-4 tracking-wide hover:border-black hover:text-black"
            title="Projecten"
          >
            Of bekijk mijn werk
          </a>
        </Link>
      </div>
    </main>
    <Logos />
    <Project primaryBackgroundColorRgb="202,191,253">
      <>
        <img
          className="relative z-10 w-12/12 lg:w-7/12 -ml-12 lg:-ml-24 origin-bottom-left self-end"
          src="/project_schiphol@2x.png"
          alt="Smartphone met Schiphol project op het scherm"
        />
        <div className="flex flex-col w-12/12 lg:w-6/12 text-lg font-medium items-start px-4 pt-16 lg:pt-40 lg:pb-40 lg:pt-24 lg:pb-12">
          <svg className="pt-2 pb-1 bg-white w-52 px-4" width="265" height="70" viewBox="0 0 265 70" role="img" aria-label="Logo Schiphol">
            <path fill="#000000" d="M56.9,46.9c-5.5,0-8.2-4.1-8.3-10.2s3.2-9.8,8.1-9.9a17.3,17.3,0,0,1,7,1.8l1-9.4a36.3,36.3,0,0,0-9.8-1.4c-5.7,0-10.2,2.1-13.2,5.5s-4.5,8.2-4.6,13.4h0c0,5.5,1.5,10.3,4.6,13.8S49.3,56,55.2,56h0c4,0,7.9-.5,10.1-1.4l-.5-9.8C62.4,45.7,59.8,46.9,56.9,46.9ZM22.5,26.8c-2.6-1.1-5.1-1.9-6.9-2.9s-2.7-1.9-2.7-3.4h0a4.8,4.8,0,0,1,2-4.4A9.2,9.2,0,0,1,19.2,15c3.1,0,6.5,1,10.4,2.5l1.1-10a42.8,42.8,0,0,0-12.3-2A20.9,20.9,0,0,0,6.5,8.9C3.2,11.4,1,15.3,1,20.8H1c0,8.3,5.7,11.6,10.9,13.7l6.9,3c3.8,1.9,3.2,6.3.4,7.6a10.9,10.9,0,0,1-5,1.3c-3.4,0-6.9-1-11.4-3.5l-1.2,11A49.1,49.1,0,0,0,14.7,56h.1c4.8,0,9.4-1,12.9-3.4s5.7-7.1,5.7-11.8C33.4,32.8,27.7,28.9,22.5,26.8Zm220.1-3.9a20.7,20.7,0,0,0-27.2,0,19.7,19.7,0,0,0-5.5,14.2h0a19.6,19.6,0,0,0,5,13.4C218.2,53.9,223,56,229,56h0a18.9,18.9,0,0,0,14.1-5.5,19.6,19.6,0,0,0,5-13.4h0A19.7,19.7,0,0,0,242.6,22.9ZM235,43.6a7.1,7.1,0,0,1-9.8,2.2h0a5.8,5.8,0,0,1-2.2-2.2,15.6,15.6,0,0,1-1.6-7.6c0-4.8,2.5-9.2,7.6-9.2s7.6,4.3,7.6,9.3A14.9,14.9,0,0,1,235,43.6Zm-94.2,8.6a12.3,12.3,0,0,0,9.4,3.6,14.1,14.1,0,0,0,12.1-5.9c2.4-3.6,3.4-8.3,3.4-13.1h0c0-4.9-1-9.5-3.4-13S155.9,18,150.4,18a13.1,13.1,0,0,0-9.6,3.8V18.6H130.1V69h7.5a3.2,3.2,0,0,0,3.2-3.2ZM153,43.7c-1.1,2-2.5,3.2-5,3.2a5.7,5.7,0,0,1-5.3-3.2,14.5,14.5,0,0,1-1.6-6.8h0a12.5,12.5,0,0,1,1.7-6.8,6.5,6.5,0,0,1,5.3-3.2,5.5,5.5,0,0,1,5,3.3,15.5,15.5,0,0,1,1.4,6.7h0A15.7,15.7,0,0,1,153,43.7ZM119.4,55.2a3.2,3.2,0,0,0,3.2-3.2V18.6h-11V55.2ZM114.7,5.7c-1.7.4-3.1,1.5-3.1,3.2v5.9h11V4.1ZM256.1,2.4c-1.8.4-3.2,1.4-3.2,3.2V55.2h7.9A3.2,3.2,0,0,0,264,52h0V.8ZM93.2,35.5V55.2H101a3.2,3.2,0,0,0,3.2-3.2V32.3c0-4-.9-7.6-3-10.3s-5.4-4.3-9.7-4.3a14.8,14.8,0,0,0-10,3.9V1.1L73.7,2.7c-1.8.4-3.2,1.5-3.2,3.2V55.2h11V36.4a16,16,0,0,1,1.4-6.1,5.7,5.7,0,0,1,5.5-3.5c2.5.1,3.4,1,4.1,2.7A17.3,17.3,0,0,1,93.2,35.5Zm101,0V55.2h7.9a3.4,3.4,0,0,0,3.2-3.2V32.3c-.1-4-1-7.6-3.1-10.3s-5.4-4.3-9.7-4.3a14.5,14.5,0,0,0-9.9,3.9V1.1l-7.9,1.6c-1.8.4-3.2,1.5-3.2,3.2V55.2h11.1V36.4a14.3,14.3,0,0,1,1.4-6.1,5.9,5.9,0,0,1,5.4-3.5c2.5.1,3.4,1,4.1,2.7A17.3,17.3,0,0,1,194.2,35.5Z" />
          </svg>
          <p className="mt-4 bg-white p-2 leading-relaxed">
            In opdracht van
            {' '}
            <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium" href="https://orangetribes.com" title="Orange Tribes" rel="noopener noreferrer nofollow" target="_blank">Orange Tribes</a>
            {' '}
            werd ik gevraagd de designs voor Integral Safety Schiphol uit te werken in
            een responsive, custom WordPress thema.
          </p>
          <p className="mt-4 bg-white p-2 leading-relaxed">
            De interactieve kaart werd gemaakt met Adobe Illustrator en Leaflet en is voor
            de medewerkers van Schiphol eenvoudig te beheren vanuit de WordPress admin omgeving.
          </p>
          <p className="mt-6 bg-white p-2 inline leading-relaxed mb-8">
            <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium" href="https://integralsafetyschiphol.com/projects/in-progress" title="Ga naar de website van Integral Safety Schiphol" rel="noopener noreferrer nofollow" target="_blank">Bekijk de interactieve website</a>
          </p>
        </div>
      </>
    </Project>
    <Services />
    <Project primaryBackgroundColorRgb="252,233,106" secondaryBackgroundColorRgb="248,180,217">
      <>
        <img
          className="relative z-10 w-12/12 lg:w-7/12 -ml-12 lg:-ml-24 origin-bottom-left self-end"
          src="/project_noten.png"
          alt="Zakje noten"
        />
        <div className="flex flex-col w-12/12 lg:w-6/12 text-lg font-medium items-start px-4 pt-16 lg:pt-40 lg:pb-40 lg:pt-24 lg:pb-12">
          <img className="pt-2 pb-2 bg-white w-52 px-2" src="/company_noten.svg" alt="Noten.nl logo" />
          <p className="mt-4 bg-white p-2 leading-relaxed">
            In opdracht van
            {' '}
            <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium" href="https://orangetribes.com" title="Orange Tribes" rel="noopener noreferrer nofollow" target="_blank">Orange Tribes</a>
            {' '}
            werd ik gevraagd de designs voor Integral Safety Schiphol uit te werken in
            een responsive, custom WordPress thema.
          </p>
          <p className="mt-4 bg-white p-2 leading-relaxed">
            De interactieve kaart werd gemaakt met Adobe Illustrator en Leaflet en is voor
            de medewerkers van Schiphol eenvoudig te beheren vanuit de WordPress admin omgeving.
          </p>
          <p className="mt-6 bg-white p-2 inline leading-relaxed mb-8">
            <a className="border-bottom border-dotted border-solid border-b-2 border-teal-500 text-teal-500 font-medium" href="https://integralsafetyschiphol.com/projects/in-progress" title="Ga naar de website van Integral Safety Schiphol" rel="noopener noreferrer nofollow" target="_blank">Bekijk de interactieve website</a>
          </p>
        </div>
      </>
    </Project>
  </>
)

export default Index
