import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className='col-span-12 md:col-span-4 lg:col-span-3'>
      <ul className='mt-2 mb-6 list-inside list-disc text-sm leading-loose marker:text-gray-300'>
        <li className='mb-2 list-none text-sm font-semibold'>
          Personal details
        </li>
        <li>Dave van Hoorn</li>
        <li>33 years old</li>
        <li>Dutch nationality</li>
        <li>Fluent in Dutch, English</li>
        <li>10+ yrs of web experience</li>
      </ul>
      <ul className='mt-2 mb-6 list-inside list-disc text-sm leading-loose marker:text-gray-300'>
        <li className='mb-2 list-none text-sm font-semibold'>
          Business details
        </li>
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
  );
};

export default Sidebar;
