import { z } from 'zod'

export const generateImageSchema = z.object({
  prompt: z.string().trim().min(1, { message: 'Phrase is required!' }).max(255, { message: 'Phrase should not exceed 255 characters!' }),
})
