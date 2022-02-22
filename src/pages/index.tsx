import * as React from 'react';
import {
  BsFillFileEarmarkPdfFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import { Certificate } from '@/components/certificate/Certificate';
import { Experience } from '@/components/experience/Experience';
import Seo from '@/components/Seo';
export default function HomePage() {
  return (
    <div className='container mx-auto max-w-4xl px-8'>
      <Seo />
      <header className='mb-8 flex items-center justify-between border-b py-8'>
        <div>
          <h1 className='text-xl font-semibold leading-relaxed'>
            Dave van Hoorn
          </h1>
          <h2 className='text-sm font-normal'>
            Freelance front-end developer | available March 2022
          </h2>
        </div>
        <Button variant='light'>
          <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
          Download CV
        </Button>
      </header>
      <main>
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-9 border-r'>
            <h3 className='text-xl font-semibold leading-relaxed'>
              Experience
            </h3>
            <Experience
              title='Freelance front-end developer @ Dept Agency'
              dates='01-2022 - present'
              description='Develop a component based front-end with a headless Umbraco CMS based on Figma designs. Work in a 100% remote Agile team with two FE developers, one BE developer, two UX / UI designers and multiple project managers. Client faced project for a well known insurance company in the Netherlands.'
              stack='React, TypeScript, Next.js, GraphQL, Chakra UI, Azure DevOps, Git, Figma'
              rate='€80/hour'
              location='Utrecht, Netherlands (100% remote)'
              industry='Insurance'
            />

            <Experience
              title='Owner, full-stack developer @ Noten.nl'
              dates='01-2018 - 12-2021'
              description='Develop the headless front-end and custom WordPress (with GraphQL) back-end of Noten.nl, NüsseKaufen.de. I was responsible for design, development, marketing etc. Exited the business after organically scaling to five figures.'
              stack='React, TypeScript, Next.js, GraphQL, Tailwind CSS, PHP, Vercel, Git, Adobe XD'
              rate='-'
              location='Utrecht, Netherlands'
              industry='B2C | food'
            />

            <Experience
              title='Front-end developer @ Euroclear Belgium'
              dates='08-2019 - 05-2020'
              description='Translate designs into reusable, custom styled Material-UI components for the Euroclear InvestorInsight® webapp. This webapp enables corporations to gain insights in the structure of their shareholders and intermediaries to comply with SRD II obligations.'
              stack='React, TypeScript, .NET, Material-UI, Azure Devops, Formik, Git, Figma'
              location='Amsterdam, Netherlands'
              industry='Fintech'
              rate='-'
            />
            <h4 className='pt-6 text-xl font-semibold leading-relaxed'>
              Certifications
            </h4>
            <Certificate
              title='Professional Scrum Master PSMI'
              issuedDate='11-2019'
            />
            <Certificate
              title='HBO Bachelor of Commerce (B.Comm.), Communication & Media Design'
              issuedDate='05-2013'
            />
            <h4 className='pt-6 text-xl font-semibold leading-relaxed'>
              About me
            </h4>
            <div className='mt-4 mb-2 mr-8 border-b pt-2 pb-4 last:border-b-0'>
              <p className='mb-4'>
                Hi! 👋 I&apos;m Dave, a 33 year old web enthousiast.{' '}
              </p>
              <p className='mb-4'>
                Outside of work I enjoy walking my Balinese dog, shredding Dutch
                trails on my mountainbike (these can actually be challenging) or
                surfing small to medium sized waves - preferably in warm water.
              </p>
              <p className='mb-4'>
                At work I consider myself an extravert person with a keen eye
                for user-experience and visual design. I thrive in small teams
                where communication is open, honest feedback (even when it
                hurts) is appreciated and there&apos;s room for humour and
                legitimate personal interest.
              </p>
              <p className='mb-4'>
                I&apos;m also an avid music lover. With Spotify playing 24/7 I
                might have some tracks for you to enjoy. Here&apos;s what
                I&apos;ve recently been listening to:
              </p>
            </div>
          </div>
          <div className='col-span-3'>
            <ul className='mt-2 mb-4 text-sm leading-relaxed'>
              <li className='mb-2 text-base font-semibold'>Personal details</li>
              <li>Dave van Hoorn</li>
              <li>33 years old</li>
              <li>Born in the Netherlands</li>
              <li>Fluent in Dutch, English</li>
              <li>10+ years experience</li>
            </ul>
            <ul className='mb-4 text-sm leading-relaxed'>
              <li className='mb-2 text-base font-semibold'>Business details</li>
              <li>Dave van Hoorn</li>
              <li>Meindert Hobbemalaan 8</li>
              <li>3401 NB IJsselstein</li>
              <li className='mb-2'>Utrecht, The Netherlands</li>
              <li>CoC: 51002922</li>
              <li>Tax: NL001234740B24</li>
            </ul>
            <ul className='mb-4 text-sm leading-relaxed'>
              <li className='mb-2 text-base font-semibold'>Contact details</li>
              <li>yo@dave.nl</li>
              <li>+31 (0)6 169 100 79</li>
              <li className='mt-8 flex'>
                <span className='mr-2'>
                  <a
                    title='Dave van Hoorn on GitHub'
                    target='_blank'
                    href='https://github.com/davevanhoorn'
                    rel='nofollow noreferrer noopener'
                  >
                    <BsGithub size={20} />
                  </a>
                </span>
                <span className='mx-2'>
                  <a
                    title='Dave van Hoorn on LinkedIn'
                    target='_blank'
                    href='https://www.linkedin.com/in/davevanhoorn/?locale=nl_NL'
                    rel='nofollow noreferrer noopener'
                  >
                    <BsLinkedin size={20} />
                  </a>
                </span>
                <span className='ml-2'>
                  <a
                    title='Dave van Hoorn on Instagram'
                    target='_blank'
                    href='https://www.instagram.com/davevanhoorn/'
                    rel='nofollow noreferrer noopener'
                  >
                    <BsInstagram size={20} />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
