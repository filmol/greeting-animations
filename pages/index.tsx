import Head from 'next/head'
import AwsClouldSVG from './svgComponents/cloud'
import Windmill from './svgComponents/windmill'
import { useRef } from 'react'
import ToggleButton from './components/toggleButton'
import Modal from './components/modal'
import Cloud1 from './svgComponents/cloud1'
import Cloud2 from './svgComponents/cloud2'
import Cloud3 from './svgComponents/cloud3'
import Cloud4 from './svgComponents/cloud4'
import Moon from './svgComponents/moon'
import dynamic from 'next/dynamic'
import Bg from './svgComponents/bg'
import Desk from './svgComponents/desk'
import SvgBgDesktop from './svgComponents/svgBgDesktop'
import SvgBgMobile from './svgComponents/svgBgMobile'
import Windmill2 from './svgComponents/windmill2'
const LazyLoadSnowfall = dynamic(
  () => import('./components/lazyLoadSnowfall'),
  {
    loading: () => <header />,
  }
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greetings Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className="dark">
        <LazyLoadSnowfall />

        <div className=" lg:hidden">
          <SvgBgMobile />
        </div>
        <div className="hidden lg:inline">
          {/* <div className="flex justify-center ">
          <ToggleButton
            onClick={() => main.current?.classList.toggle('dark')}
          />
        </div> */}
          <SvgBgDesktop />
        </div>
      </main>
    </div>
  )
}
