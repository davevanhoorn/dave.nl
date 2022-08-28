import { format } from 'date-fns';

const Footer = () => {
  const date = format(new Date(), 'yyyy');

  return (
    <footer
      role='contentinfo'
      className='mt-16 pb-16 text-center text-xs font-medium'
    >
      Copyright © {date} Dave.nl
    </footer>
  );
};

export default Footer;
