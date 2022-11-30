import Head from 'next/head'
import AwsClouldSVG from './svgComponents/cloud'
import Windmill from './windmill'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greetings Project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="max-w-screen relative overflow-hidden h-screen w-screen max-h-screen bg-cover bg-right bg-[url('/background.svg')]">
        {/* absolute left-8 bottom-16 */}
        <AwsClouldSVG
          onClick={() => console.log('object')}
          cssClass={'animate-could1 w-[25%] xl:hover:w-[26%]'}
        />
        <AwsClouldSVG
          onClick={() => console.log('object')}
          cssClass={'animate-could2  w-[20%] xl:hover:w-[21%]'}
        />
        <AwsClouldSVG
          onClick={() => console.log('object')}
          cssClass={'animate-could3 w-[15%] xl:hover:w-[16%]'}
        />
        <div className='absolute flex bottom-14 right-4 lg:right-0 lg:left-8 h-[15%]'>
          <Windmill />
          <Windmill hideOnMobile={true} />
          <Windmill hideOnMobile={true} />
        </div>
      </main>
    </div>
  )
}
