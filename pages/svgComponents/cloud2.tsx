import { useState } from 'react'
import MyModal from '../components/modal'

const Cloud2 = ({ cssClass }: { cssClass: string }) => {
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
        width="161"
        height="71"
        viewBox="0 0 161 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M148.426 65.3974L14.0374 70.873C5.08251 68.0686 -3.72197 52.5809 3.0076 45.8013C15.9609 32.7517 33.4416 43.5604 40.7411 50.7692C33.1694 0.0354312 80.9558 6.09504 83.6758 36.0091C87.4911 6.82958 122.708 -13.1207 148.746 11.84C169.576 31.8085 157.212 55.8652 148.426 65.3974Z"
          fill="white"
          fillOpacity="0.93"
        />
      </svg>
    </>
  )
}
export default Cloud2
