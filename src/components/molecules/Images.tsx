'use client'
import Image from 'next/image'

import { shimmer, toBase64 } from '@/utils/shimmer'
import { ImagesResponseDataInner } from 'openai'

import ImagesFallback from './ImagesFallback'

type ImagesProps = {
  images?: ImagesResponseDataInner[]
  prompt: string
}

const Images = ({ images, prompt }: ImagesProps) => {
  return (
    <>
      {images ? (
        <>
          <Image
            className='mt-8 rounded-[32px] object-cover'
            key={images[0].url}
            src={images[0].url ?? ''}
            alt={prompt}
            width={512}
            height={512}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(512, 512)
            )}`}
          />
          <div className='mt-8 flex items-center space-x-8'>
            {images.slice(1).map(image => (
              <Image
                className='rounded-2xl object-cover'
                key={image.url}
                src={image.url ?? ''}
                alt={prompt}
                width={64}
                height={64}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                loading='lazy'
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(64, 64)
                )}`}
              />
            ))}
          </div>
        </>
      ) : <ImagesFallback />}
    </>
  )
}

export default Images
