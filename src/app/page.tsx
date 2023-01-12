import { Button, Form, Logo } from '@/components'

const Home = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <h1 className='text-h1-mb md:text-h1 font-bold flex items-center space-x-2'>
        <span>Open</span>
        <span role="img" aria-label='open shot'>
          <Logo />
        </span>
        <span className='pt-2'>Shot</span>
      </h1>
      <p>Generate images using AI</p>

      <div className='w-full mt-8 flex items-center justify-between md:justify-around space-x-[12px]'>
        <Button label="Provide a phrase" />
        <Button label="Lucky shot!" theme="gray" />
      </div>

      <Form />
    </section>
  )
}
export default Home
