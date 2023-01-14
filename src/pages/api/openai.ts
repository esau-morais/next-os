import { NextApiRequest, NextApiResponse } from 'next'

import { openAi } from '@/lib/openAi'
import { generateImageSchema } from '@/lib/schemas'
import { z } from 'zod'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const payload = generateImageSchema.parse(req.body)

      const response = await openAi.createImage({
        prompt: payload.prompt,
        n: 3,
        size: '512x512',
      })

      return res.json(response.data.data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(error.issues)
      }

      return res.status(422).end()
    }
  }
}

export default handler
