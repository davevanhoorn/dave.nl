type ExperienceProps = {
  title: string;
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
  dates,
  description,
  industry,
  stack,
  rate,
  location,
  review,
}: ExperienceProps) => {
  return (
    <div className='mt-4 mb-4 pt-2 pb-4 md:mr-8'>
      <p className='mb-2 text-xl font-medium leading-7'>{title}</p>

      <p className='mb-2 text-lg leading-8'>{description}</p>
      <table className='leading-7 text-gray-500 '>
        <tbody>
          <tr>
            <td>
              <span>Date:</span>
            </td>
            <td className='pl-4'>{dates}</td>
          </tr>
          <tr>
            <td>
              <span>Industry:</span>
            </td>
            <td className='pl-4'>{industry}</td>
          </tr>
          <tr>
            <td>
              <span>Stack:</span>
            </td>
            <td className='pl-4'>{stack}</td>
          </tr>
          {rate && (
            <tr>
              <td>
                <span>Rate:</span>
              </td>
              <td className='pl-4'>{rate}</td>
            </tr>
          )}
          <tr>
            <td>
              <span>Location:</span>
            </td>
            <td className='pl-4'>{location}</td>
          </tr>
          {review && (
            <tr>
              <td>
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
