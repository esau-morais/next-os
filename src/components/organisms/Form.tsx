'use client'
import { useForm } from 'react-hook-form'

import { generateImageSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, FlareIcon } from '../atoms'

type GenerateImageData = z.infer<typeof generateImageSchema>

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<GenerateImageData>({
    resolver: zodResolver(generateImageSchema)
  })

  const generateImage = async ({ prompt }: GenerateImageData) => {
    await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    })
  }

  return (
    <form className='mt-4 relative w-full md:max-w-[348px]' onSubmit={handleSubmit(generateImage)}>
      <input
        className='bg-[transparent] px-6 py-3 w-full h-[72px] border border-light rounded-full'
        placeholder='ui illustration brutalism people'
        {...register('prompt')}
      />
      {errors.prompt ? (
        <span role="alert" className='text-red inline-block mt-2 w-full text-center'>{errors.prompt?.message}</span>
      ) : null}
      <Button
        className='absolute right-0 inset-y-0'
        type='submit'
        spacing='icon-only'
        icon={<FlareIcon />}
      />
    </form>
  )
}

export default Form 
