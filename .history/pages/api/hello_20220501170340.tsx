// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest } from "next";

export default function handler(req:NextApiRequest, res: NextApi) {
  res.status(200).json({ name: 'John Doe' })
}
