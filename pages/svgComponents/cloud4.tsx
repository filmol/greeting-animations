import { useState } from 'react'
import MyModal from '../components/modal'

const Cloud4 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <MyModal isModalOpen={modalOpen} setModalOpen={setModalOpen} />
      <svg
        onClick={() => {
          setModalOpen(!modalOpen)
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
        width="98"
        height="56"
        viewBox="0 0 98 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M87.3429 46.0055L13.1475 55.5099C6.07137 49.0993 -5.71186 33.213 3.76401 20.9527C13.2399 8.69247 26.7777 20.9551 32.3621 28.619C32.3621 28.619 29.4976 3.4942 49.308 0.602443C65.6405 -1.78162 67.0344 28.4261 67.0344 28.4261C67.0344 28.4261 78.8619 7.43817 94.2318 19.6314C103.725 32.9314 87.3429 46.0055 87.3429 46.0055Z"
          fill="white"
          fillOpacity="0.93"
        />
      </svg>
    </>
  )
}
export default Cloud4
