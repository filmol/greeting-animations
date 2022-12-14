import { title } from "process";
import { useState } from "react";
import Modal from "../components/modal";

const Sun = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Cyber Trust",
          link: "https://www.devoteam.com/expertise/cyber-trust/",
          video: "/S8xkJvVNmmQ",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <g
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`absolute cursor-pointer`}
      >
        <svg
          className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
          x="20%"
          y="6%"
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
      </g>
    </>
  );
};
export default Sun;
