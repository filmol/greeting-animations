import { useState } from "react";
import Modal from "../../components/modal";

const Cloud5 = () => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Cloud ",
          didYouKnow:
            "That today 54% of companies use multiple Cloud providers?",
          video: "1Ydcei2jUzI",
          src: "2021 IDC Cloud benchmark survey, sponsored by Devoteam.",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <g
        className="animate-cloud5 absolute cursor-pointer hover:[animation-play-state:paused] duration-300"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <svg
          width="50"
          height="30"
          viewBox="0 0 85 36"
          fill="none"
          x="75%"
          y="13%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white dark:fill-[#CFDEFC]"
            d="M2.26909 30.2106C6.55302 33.8364 49.2859 34.976 69.4501 35.3135C75.9492 35.4223 82.4264 32.1305 83.6128 25.7396C84.9913 18.3144 83.4193 9.32515 72.9648 3.35579C57.0458 -5.7337 43.6749 7.43333 38.9793 15.153C32.8234 -4.98813 14.1108 7.83941 17.7769 23.116C3.2437 6.48009 -3.3587 25.4474 2.26909 30.2106Z"
            fill="#CFDEFC"
          />
        </svg>
      </g>
    </>
  );
};
export default Cloud5;
