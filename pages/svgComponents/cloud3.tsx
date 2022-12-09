import { useState } from 'react'
import Modal from '../components/modal'

const Cloud3 = () => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        content={{
          title: 'Google Cloud',
          didYouKnow:
            ' 48% of organizations use Google Cloud, and 30% of companies quote Google Cloud as is their primarily cloud provider?',
          link: 'https://www.devoteam.com/partner/google-cloud/',
          src: '2021 IDC Cloud benchmark survey, sponsored by Devoteam.',
          img: '/googleCloud.svg',
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{' '}
      <g
        className="animate-cloud3 absolute cursor-pointer hover:[animation-play-state:paused] duration-300"
        onClick={() => {
          setModalOpen(!modalOpen)
        }}
      >
        <svg
          width="88"
          height="53"
          viewBox="0 0 88 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          x="60%"
          y="200"
        >
          <path
            d="M68.7892 51.1308L25.8638 52.7528C15.2328 53.1545 -0.986222 51.1577 0.217861 40.5875C0.978156 33.9131 13.9517 32.607 22.5187 41.9192C14.9149 -6.96711 52.9162 -16.0394 52.5296 33.2388C57.7973 18.1626 68.4123 30.4574 66.3875 38.1659C83.0013 24.455 89.2604 33.4349 87.6284 41.8009C86.1257 49.5043 76.6323 50.8345 68.7892 51.1308Z"
            className="fill-white dark:fill-[#CFDEFC]"
          />
        </svg>
      </g>
    </>
  )
}
export default Cloud3
