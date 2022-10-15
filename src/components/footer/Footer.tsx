const Footer = () => {
  const date = new Date();

  return (
    <footer
      role='contentinfo'
      className='mt-16 pb-16 text-center text-xs font-medium'
    >
      Copyright © {date.getFullYear()} Dave.nl
    </footer>
  );
};

export default Footer;
