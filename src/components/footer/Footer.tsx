import { format } from 'date-fns';

const Footer = () => {
  const date = format(new Date(), 'yyyy');

  return (
    <footer className='mt-16 pb-16 text-center text-xs font-medium'>
      Copyright © {date} Dave.nl - This is a size 8 footer 🦶
    </footer>
  );
};

export default Footer;
