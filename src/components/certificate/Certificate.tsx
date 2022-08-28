type CertificateProps = {
  title: string;
  issuedDate: string;
};

export const Certificate = ({ title, issuedDate }: CertificateProps) => {
  return (
    <div className='mt-4 mr-8 pt-2'>
      <h4 className='mb-1 text-base font-medium leading-7'>
        {title} <br />
        <span className='text-sm font-medium opacity-80'>{issuedDate}</span>
      </h4>
    </div>
  );
};
