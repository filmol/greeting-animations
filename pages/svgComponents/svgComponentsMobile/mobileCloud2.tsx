import { useState } from 'react'
import MyModal from '../../components/modal'

const MobileCloud2 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
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
      <g className="animate-cloud2">
        <svg
          onClick={() => {
            setModalOpen(!modalOpen)
          }}
          className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
          x="180"
          y="120"
          width="50"
          height="23"
          viewBox="0 0 50 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.4413 19.8215C45.9451 21.9342 21.0448 22.5983 9.29529 22.7949C5.5083 22.8583 1.73409 20.9402 1.04275 17.2163C0.239525 12.8896 1.15553 7.65164 7.24731 4.17333C16.5232 -1.12306 24.3143 6.54929 27.0504 11.0475C30.6375 -0.688627 41.5412 6.78591 39.4049 15.6875C47.8734 5.99384 51.7206 17.046 48.4413 19.8215Z"
            fill="#CFDEFC"
          />
        </svg>
      </g>
    </>
  )
}
export default MobileCloud2
