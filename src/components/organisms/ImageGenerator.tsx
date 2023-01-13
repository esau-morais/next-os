'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { generateImageSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { ImagesResponseDataInner } from 'openai'
import { z } from 'zod'

import { Button, FlareIcon } from '../atoms'
import { Images } from '../molecules'

type GenerateImageData = z.infer<typeof generateImageSchema>

const ImageGenerator = () => {
  const [images, setImages] = useState<ImagesResponseDataInner[] | undefined>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<GenerateImageData>({
    resolver: zodResolver(generateImageSchema)
  })
  const prompt = watch('prompt')

  const generateImages = async ({ prompt }: GenerateImageData) => {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    })
    const data = await response.json()
    setImages(data)
  }

  return (
    <>
      <form className='relative mt-4 w-full md:max-w-[348px]' onSubmit={handleSubmit(generateImages)}>
        <input
          autoComplete='off'
          className='h-[72px] w-full rounded-full border border-light bg-[transparent] px-6 py-3'
          placeholder='ui illustration brutalism people'
          {...register('prompt')}
        />
        {errors.prompt ? (
          <span role="alert" className='mt-2 inline-block w-full text-center text-red'>{errors.prompt?.message}</span>
        ) : null}
        <Button
          className='absolute inset-y-0 right-0'
          type='submit'
          size='icon-only'
          icon={<FlareIcon />}
        />
      </form>

      <Images
        images={images}
        prompt={prompt}
      />
    </>
  )
}

export default ImageGenerator 
