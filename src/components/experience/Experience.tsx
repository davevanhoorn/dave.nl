type ExperienceProps = {
  title: string;
  dates: string;
  description: string;
  industry: string;
  stack: string;
  rate?: string;
  location: string;
};

export const Experience = ({
  title,
  dates,
  description,
  industry,
  stack,
  rate,
  location,
}: ExperienceProps) => {
  return (
    <div className='mt-4 mb-2 mr-8 border-b pt-2 pb-4 last:border-b-0'>
      <h4 className='mb-1 text-base font-semibold leading-relaxed'>
        {title} <br />
        <span className='text-sm font-medium opacity-40'>{dates}</span>
      </h4>
      <div className='text-sm leading-loose'>
        <p className='mb-2 text-base'>{description}</p>
        <ul className='mb-2'>
          <li>
            <span className='font-semibold'>Industry:</span>
            {` `}
            {industry}
          </li>
          <li>
            <span className='font-semibold'>Stack:</span>
            {` `}
            {stack}
          </li>
          {rate && (
            <li>
              <span className='font-semibold'>Rate:</span>
              {` `}
              {rate}
            </li>
          )}
          <li>
            <span className='font-semibold'>Location:</span>
            {` `}
            {location}
          </li>
        </ul>
      </div>
    </div>
  );
};
