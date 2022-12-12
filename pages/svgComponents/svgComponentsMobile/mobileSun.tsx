import { useState } from "react";
import Modal from "../../components/modal";
const Sun = ({ cssClass }: { cssClass: string }) => {
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Cyber Trust",
          link: "https://www.devoteam.com/expertise/cyber-trust/",
          src: "https://drive.google.com/drive/folders/1KRA7Et-S7uj3AjsOQu8ZMtKzFiOfC5LN",
          video: "/S8xkJvVNmmQ",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <svg
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
        width="74"
        height="74"
        x="70"
        y="40"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="37" cy="37" r="37" fill="#F3C4C4" fill-opacity="0.49" />
        <circle cx="37.3959" cy="37" r="24.3369" fill="#FFE2E2" />
      </svg>
    </>
  );
};
export default Sun;
