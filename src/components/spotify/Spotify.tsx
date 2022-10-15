import Image from 'next/future/image';
import { BsPlayCircleFill } from 'react-icons/bs';
import useSWR from 'swr';

import { fetcher } from '@/helpers/common';

export const Spotify = () => {
  const { data, error } = useSWR('/api/spotify', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className='mt-8'></div>
      {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
      {data.map((song: any, index: number) => (
        <div key={`song-${index}`} className='mb-4 flex items-center last:mb-0'>
          <div className='relative mr-4 h-14 w-14 flex-shrink-0 overflow-hidden rounded'>
            <a
              href={song.songUrl}
              target='_blank'
              rel='noreferrer noopener nofollow'
              title={`Listen to the song "${song.title}" from ${song.artist} on Spotify`}
            >
              <BsPlayCircleFill
                className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white opacity-70 hover:cursor-pointer hover:opacity-100'
                size={30}
              />
            </a>
            <Image
              src={song.image.url}
              width={100}
              height={100}
              alt={`${song.artist} - ${song.title}`}
            />
          </div>
          <div>
            <p className='overflow-hidden font-medium leading-none'>
              {song.title}
            </p>
            <p className='mt-1 overflow-hidden text-ellipsis text-sm'>
              {song.artist}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
