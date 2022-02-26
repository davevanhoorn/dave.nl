/* eslint-disable  @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from 'next';

import { cors } from '@/lib/helper';
import { getTopTracks } from '@/lib/spotify';

const spotify = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 5).map((track: any) => ({
    image:
      track?.album?.images && track?.album?.images.length > 0
        ? track?.album?.images[0]
        : undefined,
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  res.status(200).json(tracks);
};

export default spotify;
