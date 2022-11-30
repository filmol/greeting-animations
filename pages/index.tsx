
import Head from 'next/head'
import Windmill from './windmill'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greetings Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
<div className="max-w-screen overflow-hidden scroll-x-none max-h-screen bg-cover bg-right bg-[url('/background.svg')]">
{/* absolute left-8 bottom-16 */}
          <div className='flex h-[15%] absolute bottom-8 left-8 cursor-pointer'>
            <Windmill />
            <Windmill />
            <Windmill />
          </div>
        </div>
      </main>
    </div>
  );
}
