import { useState } from "react";
import Modal from "../components/modal";

const Cloud2 = () => {
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Cloud AWS",
          link: "https://www.devoteam.com/partner/aws/",
          src: "2021 IDC Cloud benchmark survey, sponsored by Devoteam.",
          didYouKnow:
            "48% of organizations use AWS, and 21% of companies quote AWS as is their primarily cloud provider?",
          img: "/aCloud.svg",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <g className="animate-cloud2 absolute cursor-pointer hover:[animation-play-state:paused] duration-300">
        <svg
          x="75%"
          y="12%"
          width="109"
          height="46"
          viewBox="0 0 109 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            d="M105.445 38.5567C99.9597 43.1992 45.2439 44.6583 19.4255 45.0905C11.1039 45.2297 2.81049 41.0148 1.29135 32.8319C-0.473669 23.3246 1.53916 11.8146 14.9252 4.17136C35.3081 -7.46694 52.4284 9.3923 58.4406 19.2767C66.3228 -6.51231 90.2826 9.91225 85.5885 29.4726C104.197 8.17176 112.651 32.4578 105.445 38.5567Z"
            className="fill-white dark:fill-[#CFDEFC]"
          />
        </svg>
      </g>
    </>
  );
};
export default Cloud2;
