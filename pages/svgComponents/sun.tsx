import { useState } from "react";
import MyModal from "../components/modal";

const Sun = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MyModal isModalOpen={modalOpen} setModalOpen={setModalOpen} />
      <svg
        onClick={() => {
          document?.getElementById("main")?.classList.toggle("dark");
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
        x="255"
        y="40"
        width="135"
        height="135"
        viewBox="0 0 135 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="67.28" cy="67.28" r="44.28" fill="#FFE2E2" />
        <circle
          cx="67.32"
          cy="67.32"
          r="67.32"
          fill="#F3C4C4"
          fill-opacity="0.49"
        />
      </svg>
    </>
  );
};
export default Sun;
