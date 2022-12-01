import { useState } from "react";
import MyModal from "../components/modal";

const Cloud3 = ({
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
        width="135"
        height="57"
        viewBox="0 0 135 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M131.056 48.4459L6.83847 56.8257C-0.0882508 45.7668 -7.57204 20.0121 17.9066 5.46424C43.3851 -9.08366 64.7855 11.9904 72.3008 24.3459C82.1535 -7.89036 112.103 12.6403 106.236 37.0908C129.496 10.4647 140.064 40.8223 131.056 48.4459Z"
          fill="white"
          fill-opacity="0.93"
        />
      </svg>
    </>
  );
};
export default Cloud3;
