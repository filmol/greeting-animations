import { useState } from "react";
import MyModal from "../../components/modal";

const MobileCloud4 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MyModal isModalOpen={modalOpen} setModalOpen={setModalOpen} />
      <g className="animate-cloud4">
        <svg
          x="100"
          y="120"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
          className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
          width="40"
          height="25"
          viewBox="0 0 40 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.1861 23.4667L12.2029 24.184C7.50138 24.3616 0.328708 23.4786 0.861196 18.804C1.19743 15.8523 6.93484 15.2747 10.7235 19.3929C7.36082 -2.22653 24.1665 -6.23867 23.9955 15.5541C26.3251 8.88681 31.0195 14.3241 30.124 17.7331C37.4713 11.6696 40.2393 15.6408 39.5176 19.3406C38.853 22.7473 34.6546 23.3356 31.1861 23.4667Z"
            fill="#CFDEFC"
          />
        </svg>
      </g>
    </>
  );
};
export default MobileCloud4;
