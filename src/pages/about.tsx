import { NextPage } from 'next';
import Image from 'next/image';

import Layout from '@/components/layouts/Layout';

const About: NextPage = () => {
  return (
    <Layout>
      <h1 className='font-display text-4xl font-medium leading-tight lg:text-5xl lg:leading-none'>
        About me
      </h1>
      <article className='prose prose-stone max-w-fit text-black prose-h1:font-display prose-h2:font-display lg:prose-lg lg:pt-6 lg:prose-p:mt-0 lg:prose-img:mt-0'>
        <div className='flex flex-col items-start lg:flex-row'>
          <div className='pr-12 leading-8 lg:w-1/2'>
            <ul className='font-medium lg:mt-0 lg:pl-0'>
              <li>I grin when the clock hits 12:34</li>
              <li>I travel with hand luggage only</li>
              <li>I love a cappuccino after 11:00</li>
              <li>I prefer shorebreaks over pointbreaks</li>
              <li>I always listen to music</li>
            </ul>
            <p className='mb-3 font-display text-3xl font-medium md:mt-12 lg:mt-12 lg:mb-5 xl:mt-12'>
              Why I started developing
            </p>
            <p>
              Inspired by my dad (who owned a website around the year 2000) I
              picked up HTML and CSS around the age of 14.
            </p>
            <p>
              He needed a website, I needed money, and so it happened. I had no
              idea where to start, but Google is your friend and day by day I
              improved my computer skills.
            </p>
          </div>
          <Image
            className='mt-0 flex-shrink-0 lg:w-1/2 lg:pr-12'
            src='/images/dave-nl_about-composition_resized.webp'
            alt='Dave van Hoorn'
            width={677}
            height={976}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              33vw'
          />
        </div>
        <div className='md:pr-12 lg:pr-32'>
          <p className='mb-0 font-display text-3xl font-medium lg:mb-5 xl:mb-5 xl:mt-2'>
            When I close my laptop, I...
          </p>
          <p>
            Make myself a cappuccino and head out for either a surf, a ride on
            my bike or I cruise the city on my skateboard. I don&apos;t know how
            it happened, but the contrast between my day-to-day job and what I
            do in my free time is really big. I love spending any free minute I
            have outdoors and as much as I like Netflix, I&apos;d give up my
            account for a surfsession in a heartbeat.
          </p>

          <p className='mb-0 font-display text-3xl font-medium lg:mb-5 xl:mb-5 xl:mt-8'>
            What I value in life:
          </p>
          <p>
            Honesty, humour, food, health, being open-minded, quality over
            quantity, life over money, minimalism.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default About;
