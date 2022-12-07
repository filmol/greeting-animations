import { useState } from "react";
import Modal from "../components/modal";

const Cloud2 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "AWS",
          didYouKnow:
            "Did you know that 48% of organizations use AWS. And 21% of organizations quote AWS as is their primarily cloud provider",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <path
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300 fill-[#FFFCFC] dark:fill-[#CFDEFC]`}
        d="M183.511 208.981L124.154 216.585C118.493 211.456 109.067 198.747 116.648 188.939C124.228 179.131 135.058 188.941 139.526 195.072C139.526 195.072 137.234 174.972 153.083 172.659C166.149 170.752 167.264 194.918 167.264 194.918C167.264 194.918 176.726 178.127 189.022 187.882C196.616 198.522 183.511 208.981 183.511 208.981Z"
      />
    </>
  );
};
export default Cloud2;
