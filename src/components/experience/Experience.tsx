type ExperienceProps = {
  title: string;
  company: string;
  dates: string;
  description: string;
  industry: string;
  stack: string;
  rate?: string;
  location: string;
  review?: string;
};

export const Experience = ({
  title,
  company,
  dates,
  description,
  industry,
  stack,
  rate,
  location,
  review,
}: ExperienceProps) => {
  return (
    <div className='mt-4 pt-2 pb-4 md:mr-8 md: mb-8'>
      <p className='mb-2 text-xl font-medium leading-7'>
        {title}
        <span className='hidden md:inline-block md:mx-1'>@</span>
        <br className='inline-block md:hidden' />
        <span className='inline md:hidden md:mr-1 font-bold md:underline md:decoration-dotted'>
          for{' '}
        </span>
        <span className='inline-block text-md font-bold md:underline md:decoration-dotted'>
          {company}
        </span>
      </p>

      <p className='mb-2 md:text-lg leading-7 md:leading-8'>{description}</p>
      <table className='text-gray-500 text-sm md:text-base'>
        <tbody>
          <tr>
            <td className='align-top py-1'>
              <span>Date:</span>
            </td>
            <td className='pl-4 py-1'>{dates}</td>
          </tr>
          <tr>
            <td className='align-top py-1'>
              <span>Industry:</span>
            </td>
            <td className='pl-4 py-1'>{industry}</td>
          </tr>
          <tr>
            <td className='align-top py-1'>
              <span>Stack:</span>
            </td>
            <td className='pl-4 py-1'>{stack}</td>
          </tr>
          {rate && (
            <tr>
              <td className='align-top py-1'>
                <span>Rate:</span>
              </td>
              <td className='pl-4 py-1'>{rate}</td>
            </tr>
          )}
          <tr>
            <td className='align-top py-1'>
              <span>Location:</span>
            </td>
            <td className='pl-4 py-1'>{location}</td>
          </tr>
          {review && (
            <tr>
              <td className='align-top py-1'>
                <span className='font-medium'>Review:</span>
              </td>
              <td className='pl-4 font-medium'>{review}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
