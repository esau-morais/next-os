import { ImageGenerator, Logo } from '@/components'

const Home = async () => {
  return (
    <section className='flex w-full flex-col items-center'>
      <h1 className='flex items-center space-x-2 text-h1-mb font-bold md:text-h1'>
        <span>Open</span>
        <span role="img" aria-label='open shot'>
          <Logo />
        </span>
        <span className='pt-2'>Shot</span>
      </h1>
      <p>Generate images using AI</p>

      <ImageGenerator />
    </section>
  )
}
export default Home
