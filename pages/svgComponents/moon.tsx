import { title } from "process";
import { useState } from "react";
import Modal from "../components/modal";

const Moon = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
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
      <g
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`absolute cursor-pointer`}
      >
        <path
          className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M403.317 117.101C393.688 124.804 381.447 129.414 368.123 129.414C337.107 129.414 311.963 104.432 311.963 73.6142C311.963 64.1419 314.339 55.221 318.53 47.4072C305.744 57.6352 297.563 73.3154 297.563 90.8942C297.563 121.712 322.707 146.694 353.723 146.694C375.206 146.694 393.872 134.709 403.317 117.101Z"
          fill="#EFF0F1"
        />
      </g>
    </>
  );
};
export default Moon;
