import React, { useState } from "react";
import Modal from "../components/modal";

export default function WindmillXs() {
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Sustainability Enabled by Digital",
          link: "https://www.devoteam.com/news-and-pr/cloud-a-catalyst-for-sustainable-development/",
          src: "2021 IDC Cloud benchmark survey, sponsored by Devoteam.",
          didYouKnow:
            "...that for 1/5 of CIOs, sustainability is a Key cloud priority in the next 3 years, and for 1/4, sustainable offers are a main benefice of cloud?",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <svg
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        width="132"
        height="240"
        viewBox="0 0 144 244"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group duration-300 cursor-pointers hover:scale-105 bottom-8 cursor-pointer hover:[animation-play-state:paused] h-full"
      >
        <path
          d="M58.6437 242.992L84.0341 243.33L83.357 213.878L79.6331 213.539L74.8936 77.4473H67.7842L62.3676 213.201L58.9822 213.539L58.6437 242.992Z"
          className="fill-[#6D6BB2] dark:fill-[#4BA9E2]"
        />
        <g className="transFormXs turbineSpin will-change-transform group-hover:[animation-play-state:paused]">
          <path
            d="M117.329 93.3142L79.7511 71.9863C72.9803 79.0956 73.6578 79.4342 73.6578 79.4342C74.9931 96.6995 90.9044 98.0537 105.123 101.101C131.529 106.179 123.423 96.361 117.329 93.3142Z"
            className="fill-[#6D6BB2] dark:fill-[#4BA9E2]"
          />
          <path
            d="M68.5427 20.934L68.6954 64.1423C78.2287 66.488 78.186 65.7318 78.186 65.7318C92.5082 55.9976 85.7808 41.5151 81.3633 27.661C72.6557 2.22015 68.1606 14.1318 68.5427 20.934Z"
            className="fill-[#6D6BB2] dark:fill-[#4BA9E2]"
          />
          <path
            d="M29.1694 100.215L66.8681 78.0806C64.0967 68.6623 63.0257 69.3342 63.0257 69.3342C47.4057 61.8579 38.2773 74.9604 28.5293 85.7506C10.9286 106.08 23.4839 103.968 29.1694 100.215Z"
            className="fill-[#6D6BB2] dark:fill-[#4BA9E2]"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M71.6098 77.0301C74.7883 77.0301 77.365 74.4534 77.365 71.2749C77.365 68.0965 74.7883 65.5198 71.6098 65.5198C68.4313 65.5198 65.8547 68.0965 65.8547 71.2749C65.8547 74.4534 68.4313 77.0301 71.6098 77.0301ZM71.6098 79.7384C76.2841 79.7384 80.0733 75.9492 80.0733 71.2749C80.0733 66.6007 76.2841 62.8115 71.6098 62.8115C66.9356 62.8115 63.1464 66.6007 63.1464 71.2749C63.1464 75.9492 66.9356 79.7384 71.6098 79.7384Z"
            className="fill-[#6D6BB2] dark:fill-[#4BA9E2]"
          />
        </g>
      </svg>
    </>
  );
}
