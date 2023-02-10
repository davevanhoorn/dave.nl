import dynamic from 'next/dynamic';

import { Certificate } from '@/components/certificate/Certificate';
import { Experience } from '@/components/experience/Experience';
import Layout from '@/components/layouts/Layout';

import Capgemini from '@/icons/capgemini.svg';
import Dept from '@/icons/dept.svg';
import Expatfile from '@/icons/expatfile.svg';
import Formule1 from '@/icons/formule1-nl.svg';
import Schiphol from '@/icons/schiphol.svg';

const Spotify = dynamic(() => import('@/components/spotify/Spotify'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <Layout>
      <div className='font-display text-2xl md:text-4xl font-semibold leading-snug md:leading-normal'>
        <p>
          Hello 👋 Dave here. I&apos;ve been working as a (remote) web designer
          for more than ten years. Let&apos;s build something cool!
        </p>
      </div>
      {/* <h3 className='text-2xl font-medium leading-7 mb-9'>Blog</h3> */}
      <div className='my-12 grid grid-cols-2 items-center gap-10 px-2 lg:my-16 lg:flex lg:justify-between lg:px-0 lg:pr-12'>
        <Expatfile
          aria-label='Expatfile logo'
          style={{
            marginLeft: '0',
            marginBottom: '-8px',
            width: '124px',
            height: 'auto',
          }}
        />

        <Dept
          aria-label='Dept logo'
          style={{
            marginLeft: '-2px',
            marginBottom: '-4px',
            width: '67px',
            height: '18px',
          }}
        />

        <Capgemini
          aria-label='Capgemini logo'
          style={{
            position: 'relative',
            marginTop: '-1px',
            marginBottom: '-10px',
            marginLeft: '-2px',
            width: '127px',
            height: '28px',
          }}
        />

        <Schiphol
          aria-label='Schiphol logo'
          style={{
            marginBottom: '-5px',
            width: '89px',
            height: '23px',
          }}
        />

        <Formule1
          aria-label='Formule1.nl logo'
          style={{
            position: 'relative',
            top: '2px',
            marginBottom: '1px',
            width: '125px',
            height: '12px',
          }}
        />
      </div>

      <Experience
        title='Freelance front-end developer'
        company='ExpatFile'
        dates='November 2022 - February 2023'
        description='Turn Figma designs into a highly optimized (e.g. Google Pagespeed Insights) front-end with Next.js. Work on the Expatfile.tax app to implement a new design. Build and use a component library with React, TypeScript, Next.js.'
        stack='React, TypeScript, Next.js, GraphQL, Material UI, GitHub Actions, Git, Figma'
        location='Sri Lanka (100% remote)'
        industry='Finance / Taxes'
      />

      <Experience
        title='Freelance front-end developer'
        company='DEPT Agency'
        dates='January 2022 - March 2022'
        description='Develop a component based front-end with a headless Umbraco CMS based on Figma designs. Work in a 100% remote Agile team with two FE developers, one BE developer, two UX / UI designers and multiple project managers. Brownfield, client-faced project for a well known insurance company in the Netherlands.'
        stack='React, TypeScript, Next.js, GraphQL, Chakra UI, Azure DevOps, Git, Figma'
        rate='€80/hour'
        location='Utrecht, Netherlands (100% remote)'
        industry='Insurance'
      />

      <Experience
        title='Freelance front-end developer'
        company='Bankai'
        dates='January 2021 - March 2021'
        description="Develop customer flow based on designs. Enable the user to add car by license plate with external API's (or manually) and calculate efficient BPM models within UsedCarController.nl."
        stack='React, Redux, Formik, Axios, PHP, Netlify, GitLab, ClickUp, Git, Figma'
        rate='€70/hour'
        location='Utrecht, Netherlands (100% remote)'
        industry='Automotive'
      />

      <Experience
        title='Owner | full-stack developer'
        company='Noten.nl'
        dates='January 2018 - December 2021'
        description='Develop the headless frontend and custom WordPress backend (with GraphQL) of Noten.nl and NüsseKaufen.de. I was responsible for design, development, photography, marketing and SEO. Scaled to five figures a month (without running ads) and exited the business.'
        stack='React, TypeScript, Next.js, Tailwind CSS, PHP, Vercel, Git'
        location='Cape Town, South Africa | Utrecht, Netherlands'
        industry='B2C | food'
      />

      <Experience
        title='Front-end developer'
        company='Euroclear'
        dates='August 2019 - May 2020'
        description='Translate designs into reusable, custom styled Material-UI components for the Euroclear InvestorInsight® webapp. This webapp enables corporations to gain insights in the structure of their shareholders and intermediaries to comply with SRD II obligations.'
        stack='React, TypeScript, .NET, Material-UI, Azure Devops, Formik, Git, Figma'
        location='Amsterdam, Netherlands'
        industry='Fintech'
      />

      <Experience
        title='Front-end developer'
        company='Schiphol Nederland'
        dates='May 2018 - August 2018'
        description='Create an interactive map for Integral Safety Schiphol (.com). The map should be manageable by Schiphol employees. I built a custom, multilingual WordPress website with jQuery, Leaflet.js. The map can be zoomed in and out of by using pre-exported tiles based on a SVG illustration.'
        stack='WordPress, Advanced Custom Fields, jQuery, Leaflet.js, Git'
        location='Bali, Indonesia (100% remote)'
        industry='Aviation'
      />

      <h3 className='mb-5 mt-9 border-t pt-12 font-display text-3xl md:font-4xl font-medium'>
        Certifications & Studies
      </h3>
      <Certificate
        title='Professional Scrum Master PSMI'
        issuedDate='November 2019'
      />
      <Certificate
        title='HBO Bachelor of Commerce (B.Comm.), Communication & Media Design'
        issuedDate='May 2013'
      />

      <h4 className='mt-12 border-t pt-12 pr-8 font-display text-3xl md:font-4xl font-medium'>
        About me
      </h4>

      <div className='mt-8 mb-2 border-b pb-4 md:text-lg leading-8 last:border-b-0'>
        <p className='mb-5'>
          When I&apos;m not working I like shredding Dutch trails on my
          mountainbike (these can actually be challenging) or surfing small to
          medium sized waves, preferably in warm water.
        </p>
        <p className='mb-5'>
          In office or on the job I consider myself an extravert person with a
          keen eye for user-experience and visual design. I thrive in small
          teams where communication is open, honest feedback is appreciated and
          there&apos;s room for humour and legitimate personal interest.
        </p>
        <p className='mb-5'>
          I&apos;m also an avid music lover. With Spotify playing 24/7 I might
          have some tracks for you to enjoy.
        </p>
        <p className='mb-5'>
          Here&apos;s what I&apos;ve recently been listening to:
        </p>
        <Spotify />
      </div>
    </Layout>
  );
}
