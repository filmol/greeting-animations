import { title } from 'process'
import { useState } from 'react'
import Modal from '../components/modal'

const Cloud1 = () => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        content={{
          title: 'Cloud',
          didYouKnow:
            '...that today 54% of companies use multiple Cloud providers?',
          link: 'https://www.devoteam.com/expertise/data-driven/',
          src: '2021 IDC Cloud benchmark survey, sponsored by Devoteam.',
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <g
        className={`animate-cloud1 absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
      >
        <svg x="50%" y="15%">
          <path
            onClick={() => {
              setModalOpen(!modalOpen)
            }}
            d="M98.8955 52.9275L19.5873 56.1589C14.0708 56.3836 8.1273 55.87 4.64574 51.5849C0.793115 46.8431 -1.18235 40.0769 2.42658 36.4411C12.7892 26.0014 26.7738 34.6484 32.6134 40.4155C26.5561 -0.171611 64.7851 4.67608 66.9612 28.6074C70.0134 5.26372 98.187 -10.6965 119.017 9.27206C127.625 17.5242 129.147 26.649 127.638 34.5941C125.263 47.1009 111.615 52.4092 98.8955 52.9275Z"
            fill="#CFDEFC"
          />
        </svg>
      </g>
    </>
  )
}
export default Cloud1
