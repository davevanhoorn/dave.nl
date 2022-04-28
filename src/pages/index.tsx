import Image from 'next/image';
import * as React from 'react';

import { Certificate } from '@/components/certificate/Certificate';
import { Experience } from '@/components/experience/Experience';
import Layout from '@/components/layouts/Layout';
import { Spotify } from '@/components/spotify/Spotify';

export default function HomePage() {
  return (
    <Layout>
      <div className='text-md mb-8 rounded-lg border-2 border-black bg-yellow-100 p-5 font-medium leading-7'>
        <span className='text-lg font-semibold'>Hi! 🖖</span> <br />
        I&apos;m Dave, a Dutch front-end developer based in the Netherlands.
        With{' '}
        <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-green-200 '>
          <span className='relative font-semibold text-black'>10+ years</span>
        </span>{' '}
        of experience I&apos;m grateful to have worked for both local and
        international brands like Schiphol, Noten.nl, Dept Agency, Capgemini and
        Euroclear. I focus on front-end development with Next.js,{' '}
        <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-1 before:bg-red-200'>
          <span className='relative font-semibold text-black'>React</span>
        </span>{' '}
        and TypeScript. <br />
        <br /> Always in for a chat about{' '}
        <span className='relative inline-block before:absolute before:-inset-1 before:block before:skew-y-1 before:bg-blue-200'>
          <span className='relative font-semibold text-black'>dogs</span>
        </span>{' '}
        , surfing, skateboarding, mountainbiking and your Spotify playlist.
      </div>
      {/* <h3 className='text-2xl font-semibold leading-7 mb-9'>Blog</h3> */}
      <h3 className='text-2xl font-semibold leading-7'>Experience</h3>
      <Experience
        title='Freelance front-end developer @ Dept Agency'
        dates='January 2022 - March 2022'
        description='Develop a component based front-end with a headless Umbraco CMS based on Figma designs. Work in a 100% remote Agile team with two FE developers, one BE developer, two UX / UI designers and multiple project managers. Brownfield, client-faced project for a well known insurance company in the Netherlands.'
        stack='React, TypeScript, Next.js, GraphQL, Chakra UI, Azure DevOps, Git, Figma'
        rate='€80/hour'
        location='Utrecht, Netherlands (100% remote)'
        industry='Insurance'
      />

      <Experience
        title='Freelance front-end developer @ Bankai'
        dates='January 2021 - March 2021'
        description="Develop customer flow based on designs. Enable the user to add car by license plate with external API's (or manually) and calculate efficient BPM models within UsedCarController.nl."
        stack='React, Redux, Formik, Axios, PHP, Netlify, GitLab, ClickUp, Git, Figma'
        rate='€70/hour'
        location='Utrecht, Netherlands (100% remote)'
        industry='Automotive'
      />

      <Experience
        title='Owner | full-stack developer @ Noten.nl'
        dates='January 2018 - December 2021'
        description='Develop the headless frontend and custom WordPress backend (with GraphQL) of Noten.nl and NüsseKaufen.de. I was responsible for design, development, photography, marketing and SEO. Scaled to five figures a month (without running ads) and exited the business.'
        stack='React, TypeScript, Next.js, Tailwind CSS, PHP, Vercel, Git'
        location='Cape Town, South Africa | Utrecht, Netherlands'
        industry='B2C | food'
      />

      <Experience
        title='Front-end developer @ Euroclear Belgium'
        dates='August 2019 - May 2020'
        description='Translate designs into reusable, custom styled Material-UI components for the Euroclear InvestorInsight® webapp. This webapp enables corporations to gain insights in the structure of their shareholders and intermediaries to comply with SRD II obligations.'
        stack='React, TypeScript, .NET, Material-UI, Azure Devops, Formik, Git, Figma'
        location='Amsterdam, Netherlands'
        industry='Fintech'
      />

      <Experience
        title='Front-end developer @ Schiphol Nederland (for Orange Tribes)'
        dates='May 2018 - August 2018'
        description='Create an interactive map for Integral Safety Schiphol (.com). The map should be manageable by Schiphol employees. I built a custom, multilingual WordPress website with jQuery, Leaflet.js. The map can be zoomed in and out of by using pre-exported tiles based on a SVG illustration.'
        stack='WordPress, Advanced Custom Fields, jQuery, Leaflet.js, Git'
        location='Bali, Indonesia (100% remote)'
        industry='Aviation'
      />

      <h4 className='border-t pt-8 text-2xl font-semibold leading-7'>
        Certifications & Studies
      </h4>
      <Certificate
        title='Professional Scrum Master PSMI'
        issuedDate='November 2019'
      />
      <Certificate
        title='HBO Bachelor of Commerce (B.Comm.), Communication & Media Design'
        issuedDate='May 2013'
      />
      <div className='mt-8 flex items-center justify-between border-t pt-6 pr-8'>
        <h4 className='text-2xl font-semibold leading-7'>About</h4>
        <Image
          width={50}
          height={50}
          className='inline-block h-10 w-10 flex-shrink-0 rounded-full ring-2 ring-white'
          src='/images/davevanhoorn.jpg'
          alt='Dave van Hoorn'
        />
      </div>

      <div className='mt-4 mb-2 border-b pb-4 leading-7 last:border-b-0'>
        <p className='mb-5'>
          When I&apos;m not working I enjoy walking my (Balinese) dog, shredding
          Dutch trails on my mountainbike (these can actually be challenging) or
          surfing small to medium sized waves, preferably in warm water.
        </p>
        <p className='mb-5'>
          On the job I consider myself an extravert person with a keen eye for
          user-experience and visual design. I thrive in small teams where
          communication is open, honest feedback is appreciated and there&apos;s
          room for humour and legitimate personal interest.
        </p>
        <p className='mb-5'>
          I&apos;m also an avid music lover. With Spotify playing 24/7 I might
          have some tracks for you to enjoy. Here&apos;s what I&apos;ve been
          listening to:
        </p>
        <Spotify />
      </div>
    </Layout>
  );
}
