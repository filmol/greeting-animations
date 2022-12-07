import { useState } from 'react'
import Modal from '../components/modal'

const Cloud4 = () => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        content={{
          title: 'Cloud Microsoft',
          didYouKnow:
            '...that 58% of organizations use Microsoft Azure, and 39% of companies quote Azure as is their primarily cloud provider?',
          link: 'https://www.devoteam.com/partner/microsoft/',
          src: '2021 IDC Cloud benchmark survey, sponsored by Devoteam. ',
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{' '}
      <g className="animate-cloud2 absolute cursor-pointer hover:[animation-play-state:paused] duration-300">
        <svg
          x="0%"
          y="22%"
          width="79"
          height="44"
          viewBox="0 0 79 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            onClick={() => {
              setModalOpen(!modalOpen)
            }}
            d="M63.6068 37.6585L21.8861 43.0029C14.9257 43.8946 7.53529 41.8995 3.97349 35.8533C0.548875 30.04 -1.28899 22.8435 3.41121 16.7622C10.9919 6.95402 21.8221 16.7641 26.2897 22.8952C26.2897 22.8952 23.9981 2.79541 39.8464 0.482007C52.9124 -1.42524 54.0275 22.7409 54.0275 22.7409C54.0275 22.7409 63.4895 5.95059 75.7854 15.7051C80.1343 21.7982 77.6952 27.8319 74.8162 31.8762C72.2664 35.4581 67.9679 37.0999 63.6068 37.6585Z"
            fill="#CFDEFC"
          />
        </svg>
      </g>
    </>
  )
}
export default Cloud4
