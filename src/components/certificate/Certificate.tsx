type CertificateProps = {
  title: string;
  issuedDate: string;
};

export const Certificate = ({ title, issuedDate }: CertificateProps) => {
  return (
    <div className='mt-4 mb-2 mr-8 border-b pt-2 pb-4 last:border-b-0'>
      <h4 className='mb-1 text-base font-semibold leading-relaxed'>
        {title} <br />
        <span className='text-sm font-semibold'>{issuedDate}</span>
      </h4>
    </div>
  );
};
