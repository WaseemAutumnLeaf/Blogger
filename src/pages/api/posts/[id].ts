// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data> | any
) {
  const {id} = req.query;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.status(200).json(response.data);
  }

  catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
