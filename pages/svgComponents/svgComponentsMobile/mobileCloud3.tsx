import { useState } from 'react'
import MyModal from '../../components/modal'

const MobileCloud3 = ({ cssClass }: { cssClass: string }) => {
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <MyModal
        content={{
          title: '',
          didYouKnow: '',
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <g className="animate-cloud3">
        <svg
          x="300"
          y="170"
          onClick={() => {
            setModalOpen(!modalOpen)
          }}
          className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300 fill-[#FFFCFC] dark:fill-[#CFDEFC]`}
          width="49"
          height="29"
          viewBox="0 0 49 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38.3651 24.3453L13.8798 27.4818C9.79477 28.0051 5.45746 26.8343 3.36709 23.2858C1.35723 19.874 0.278611 15.6505 3.0371 12.0815C7.48611 6.3252 13.8422 12.0826 16.4641 15.6809C16.4641 15.6809 15.1192 3.88456 24.4205 2.52686C32.0887 1.40752 32.7431 15.5903 32.7431 15.5903C32.7431 15.5903 38.2962 5.7363 45.5126 11.4611C48.0649 15.037 46.6334 18.5782 44.9437 20.9517C43.4473 23.0538 40.9246 24.0174 38.3651 24.3453Z" />
        </svg>
      </g>
    </>
  )
}
export default MobileCloud3
