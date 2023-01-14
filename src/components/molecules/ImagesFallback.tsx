import { AsteriskIcon, FreeIcon, TwinkleIcon } from '../atoms'

const ImagesFallback = () => {
  return (
    <div className='mt-8 flex flex-col items-start gap-y-8 md:flex-row md:items-center md:gap-x-8'>
      <p className='flex gap-x-1'>
        <span role="img">
          <TwinkleIcon />
        </span>
        Easy to use
      </p>
      <p className='flex gap-x-1'>
        <span role="img">
          <AsteriskIcon />
        </span>
        Lightweight
      </p>
      <p className='flex gap-x-1'>
        <span role="img">
          <FreeIcon />
        </span>
        Free-forever
      </p>
    </div>
  )
}

export default ImagesFallback
