import { NextApiRequest, NextApiResponse } from 'next';

import { cors } from '@/lib/helper';

import { ReceiveResumeForm, validationSchema } from '@/components/form/Form';

const sendgrid = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res).catch(() => res.status(500).json({ message: 'cors not ok' }));

  if (!req.body) res.status(500).json({ message: 'Request body missing' });

  if (!validationSchema.isValid(req.body))
    res.status(500).json({ message: 'Request body invalid' });

  const contactData = req.body as ReceiveResumeForm;
  const client = await require('@sendgrid/client');
  client.setApiKey(process.env.SENDGRID_API_KEY);

  const data = {
    contacts: [
      {
        first_name: contactData.fname,
        last_name: contactData.lname,
        email: contactData.email,
      },
    ],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: data,
  };

  await client
    .request(request)
    .then(() => {
      res.status(200).json({ message: 'ok' });
    })
    .catch(() => {
      res.status(500).json({ message: 'not ok' });
    });
};

export default sendgrid;
