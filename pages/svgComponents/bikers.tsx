import React, { useState } from 'react'
import Modal from '../components/modal'
import Biker1 from './Bicycle1.svg'

export default function Bikers() {
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        content={{
          title: 'BIKING',
          didYouKnow:
            'Did you know that Devoteam is a leading consulting firm focused on Cloud, cyber and data in more than 25 countries in EMEA?',
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
          <Biker1 />
        </svg>
      </g>
    </>
  )
}
