import Image from 'next/image';
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
import { Modal } from '@/components/modal/Modal';
import Seo from '@/components/Seo';
import { Spotify } from '@/components/spotify/Spotify';

import { useModalStore } from '@/store/modal';

export default function HomePage() {
  const { setVisibility, visible } = useModalStore();

  return (
    <div className='container mx-auto max-w-4xl px-4 md:px-8'>
      <Seo />
      <header className='mb-8 flex flex-col items-center justify-between border-b py-8 md:flex-row'>
        <div>
          <h1 className='mb-1 text-2xl font-semibold'>Dave van Hoorn</h1>
          <h2 className='text-base font-medium'>
            Front-end Developer • Available May &apos;22
          </h2>
        </div>
        <Button
          onClick={() => setVisibility(!visible)}
          variant='outline'
          className='mt-6 md:mt-0'
        >
          <BsFillFileEarmarkPdfFill size={20} className='mr-2 text-red-500' />
          Download CV
        </Button>
      </header>
      <main>
        <div className='grid md:grid-cols-12 md:gap-8'>
          <div className='col-span-12 md:col-span-8 md:border-r lg:col-span-9'>
            <h3 className='text-2xl font-semibold leading-7'>Experience</h3>
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
              title='Freelance front-end developer @ Bankai'
              dates='01-2021 - 03-2021'
              description="Develop customer flow based on designs. Enable the user to add car by license plate with external API\'s (or manually) and calculate efficient BPM models within UsedCarController.nl."
              stack='React, Redux, Formik, Axios, PHP, Netlify, GitLab, ClickUp, Git, Figma'
              rate='€70/hour'
              location='Utrecht, Netherlands (100% remote)'
              industry='Automotive'
            />

            <Experience
              title='Full-stack developer @ Noten.nl'
              dates='01-2018 - 12-2021'
              description='Develop the headless front-end and custom WordPress (with GraphQL) back-end of Noten.nl, NüsseKaufen.de. I was responsible for design, development, marketing etc. Exited the business after organically scaling to five figures.'
              stack='React, TypeScript, Next.js, Tailwind CSS, PHP, Vercel, Git'
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
            />
            <h4 className='border-t pt-8 text-2xl font-semibold leading-7'>
              Certifications & Studies
            </h4>
            <Certificate
              title='Professional Scrum Master PSMI'
              issuedDate='11-2019'
            />
            <Certificate
              title='HBO Bachelor of Commerce (B.Comm.), Communication & Media Design'
              issuedDate='05-2013'
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

            <div className='mt-4 mb-2 border-b pb-4 leading-7 last:border-b-0 md:mr-8'>
              <p className='mb-5'>
                Hi! 👋 I&apos;m Dave, a 33 year old web enthousiast.{' '}
              </p>
              <p className='mb-5'>
                Outside of work I enjoy walking my Balinese dog, shredding Dutch
                trails on my mountainbike (these can actually be challenging) or
                surfing small to medium sized waves - preferably in warm water.
              </p>
              <p className='mb-5'>
                At work I consider myself an extravert person with a keen eye
                for user-experience and visual design. I thrive in small teams
                where communication is open, honest feedback is appreciated and
                there&apos;s room for humour and legitimate personal interest.
              </p>
              <p className='mb-5'>
                I&apos;m also an avid music lover. With Spotify playing 24/7 I
                might have some tracks for you to enjoy. Here&apos;s what
                I&apos;ve been listening to:
              </p>
              <Spotify />
            </div>
          </div>
          <div className='col-span-12 md:col-span-4 lg:col-span-3'>
            <ul className='mt-2 mb-6 list-inside list-disc text-sm leading-loose marker:text-gray-300'>
              <li className='mb-2 list-none text-sm font-semibold'>
                Personal details
              </li>
              <li>Dave van Hoorn</li>
              <li>33 years old</li>
              <li>Born in the Netherlands</li>
              <li>Fluent in Dutch, English</li>
              <li>10+ years experience</li>
            </ul>
            <ul className='mt-2 mb-6 list-inside list-disc text-sm leading-loose marker:text-gray-300'>
              <li className='mb-2 list-none text-sm font-semibold'>
                Business details
              </li>
              <li>Dave van Hoorn</li>
              <li>Meindert Hobbemalaan 8</li>
              <li>3401 NB IJsselstein</li>
              <li>Utrecht, The Netherlands</li>
              <li>
                <span className='font-semibold'>CoC:</span> 51002922
              </li>
              <li>
                <span className='font-semibold'>Tax:</span> NL001234740B24
              </li>
            </ul>
            <ul className='mt-2 mb-6 list-inside list-disc text-sm leading-loose marker:text-gray-300'>
              <li className='mb-2 list-none text-sm font-semibold'>
                Contact details
              </li>
              <li>mail [@] dave.nl</li>
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
      <Modal />
    </div>
  );
}
