import { useState } from 'react'
import MyModal from '../components/modal'

const Cloud1 = ({ cssClass }: { cssClass: string }) => {
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
        width="111"
        height="67"
        viewBox="0 0 111 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100.934 62.7719L11.992 66.1326C-15.5047 46.4558 12.4465 34.5724 28.3103 51.8161C18.8055 -9.29172 66.3071 -20.6321 65.8238 40.9655C72.4085 22.1203 85.6773 37.4888 83.1463 47.1244C113.457 22.1096 116.195 57.518 100.934 62.7719Z"
          fill="white"
          fill-opacity="0.93"
        />
      </svg>
    </>
  )
}
export default Cloud1
