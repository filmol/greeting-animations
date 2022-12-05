import { useState } from 'react'
import MyModal from '../components/modal'

const Cloud4 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <MyModal
        content={{
          title: 'Microsoft Azure',
          didYouKnow:
            'And 58% of organizations use  Microsoft. And 39% of organizations quote Azure as is their primarily cloud provider',
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{' '}
      <path
        onClick={() => {
          setModalOpen(!modalOpen)
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
        d="M1194.62 92.6836L1123.46 95.3722C1101.47 79.6308 1123.83 70.124 1136.52 83.919C1128.92 35.0326 1166.92 25.9603 1166.53 75.2385C1171.8 60.1623 1182.41 72.4572 1180.39 80.1656C1204.64 60.1538 1206.83 88.4805 1194.62 92.6836Z"
        fill="#CFDEFC"
      />
    </>
  )
}
export default Cloud4
