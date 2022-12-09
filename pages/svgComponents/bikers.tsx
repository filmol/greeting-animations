import React, { useState } from 'react'
import Modal from '../components/modal'
import Biker3 from './Bicycle3.svg'

export default function Bikers() {
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        content={{
          title: 'Data-driven',
          link: 'https://www.devoteam.com/expertise/data-driven/',
          src: 'https://drive.google.com/drive/folders/1KRA7Et-S7uj3AjsOQu8ZMtKzFiOfC5LN',
          video: 'ZXLMbvmHcDA',
          didYouKnow:
            '82% of organisations are spending more than 10% of their IT budgets on data technologies?',
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{' '}
      <g
        className="animate-bike xl:animate-slowerBike cursor-pointer hover:[animation-play-state:paused] duration-300"
        onClick={() => {
          setModalOpen(!modalOpen)
        }}
      >
        <svg x="-10%" y="90%" className="" clipPath="url(#clip0_228_646)">
          <Biker3 />
        </svg>
      </g>
    </>
  )
}
