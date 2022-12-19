import React, { useState } from "react";
import Modal from "../../components/modal";

export default function MobileWindmillSm() {
  let [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal
        content={{
          title: "Digital Impulse: Next-gen consulting",
          link: "https://www.devoteam.com/expertise/digital-impulse/",
          video: "p3Y2RAheH6s",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <svg
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        width="80"
        height="180"
        viewBox="0 0 174 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group duration-300 cursor-pointers hover:scale-105 bottom-8 cursor-pointer hover:[animation-play-state:paused] h-full"
      >
        <path
          d="M72.2019 307.35L103.655 307.769L102.817 271.284L98.2034 270.864L92.3321 102.275H83.5251L76.8151 270.445L72.6213 270.864L72.2019 307.35Z"
          className="fill-[#6D6BB2] dark:fill-[#3288BD]"
        />
        <g className="transFormSm turbineSpin will-change-transform group-hover:[animation-play-state:paused]">
          <path
            d="M144.901 121.931L98.3497 95.5107C89.9622 104.318 90.8014 104.737 90.8014 104.737C92.4556 126.125 112.166 127.803 129.78 131.577C162.492 137.868 152.45 125.706 144.901 121.931Z"
            className="fill-[#6D6BB2] dark:fill-[#3288BD]"
          />
          <path
            d="M84.4648 32.2676L84.6539 85.7936C96.4637 88.6993 96.4109 87.7626 96.4109 87.7626C114.153 75.704 105.819 57.7632 100.347 40.6009C89.5599 9.08515 83.9915 23.8411 84.4648 32.2676Z"
            className="fill-[#6D6BB2] dark:fill-[#3288BD]"
          />
          <path
            d="M35.6898 130.479L82.3905 103.06C78.9572 91.3926 77.6306 92.2249 77.6306 92.2249C58.2807 82.9634 46.9725 99.1945 34.8968 112.561C13.0932 137.745 28.6466 135.129 35.6898 130.479Z"
            className="fill-[#6D6BB2] dark:fill-[#3288BD]"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88.2642 101.759C92.2017 101.759 95.3937 98.5673 95.3937 94.6299C95.3937 90.6924 92.2017 87.5005 88.2642 87.5005C84.3268 87.5005 81.1348 90.6924 81.1348 94.6299C81.1348 98.5673 84.3268 101.759 88.2642 101.759ZM88.2642 105.114C94.0546 105.114 98.7487 100.42 98.7487 94.6299C98.7487 88.8395 94.0546 84.1455 88.2642 84.1455C82.4738 84.1455 77.7798 88.8395 77.7798 94.6299C77.7798 100.42 82.4738 105.114 88.2642 105.114Z"
            className="fill-[#6D6BB2] dark:fill-[#3288BD]"
          />
        </g>
      </svg>
    </>
  );
}
