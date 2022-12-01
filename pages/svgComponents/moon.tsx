import { useState } from "react";
import MyModal from "../components/modal";

const Moon = ({
  cssClass,
  onClick,
}: {
  cssClass: string;
  onClick: () => void;
}) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MyModal isModalOpen={modalOpen} setModalOpen={setModalOpen} />
      <svg
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
        width="147"
        height="138"
        viewBox="0 0 147 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M146.88 96.8985C133.506 107.597 116.506 114 98 114C54.9218 114 20 79.3021 20 36.5C20 23.3441 23.2992 10.9538 29.1204 0.10144C11.3627 14.3069 0 36.085 0 60.5C0 103.302 34.9218 138 78 138C107.837 138 133.762 121.354 146.88 96.8985Z"
          fill="#EFF0F1"
        />
      </svg>
    </>
  );
};
export default Moon;