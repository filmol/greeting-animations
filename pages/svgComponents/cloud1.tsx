import { useState } from "react";
import Modal from "../components/modal";

const Cloud1 = () => {
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Innovative Tech",
          didYouKnow:
            "That By 2024, 80% of companies that miss out on Cloud adoption will overspend by 20-50%.",
          link: "https://www.devoteam.com/expertise/innovative-tech/",
          src: "2021 IDC Cloud benchmark survey, sponsored by Devoteam.",
          img: "/innovativeCloud.svg",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <g
        className={`animate-cloud1 absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
      >
        <svg
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
          width="118"
          height="53"
          x="60%"
          y="13%"
          viewBox="0 0 118 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.4443 48.7893L19.0155 51.5774C14.0506 51.7797 8.70144 51.3174 5.56803 47.4608C2.10065 43.1932 0.322724 37.1036 3.57077 33.8314C12.8972 24.4356 25.4833 32.218 30.739 37.4083C25.2874 0.879827 59.2786 11.4464 61.237 32.9846C63.984 11.9753 83.7371 9.13373 96.7871 23.9842C98.0975 25.4753 99.5944 27.3094 101.08 29.3054C108.946 39.8693 100.604 48.2531 87.4443 48.7893Z"
            fill="#CFDEFC"
          />
        </svg>
      </g>
    </>
  );
};
export default Cloud1;
