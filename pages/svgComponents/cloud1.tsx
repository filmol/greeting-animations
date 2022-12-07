import { title } from "process";
import { useState } from "react";
import Modal from "../components/modal";

const Cloud1 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Cloud Services",
          didYouKnow: "Did you know that 54% of organisations use multi cloud?",
          link: "https://www.devoteam.com/partner/google-cloud/",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <path
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300 fill-[#FFFCFC] dark:fill-[#CFDEFC]`}
        d="M963.129 161.874L863.754 168.578C858.213 159.731 852.226 139.127 872.609 127.489C892.992 115.85 910.112 132.71 916.124 142.594C924.006 116.805 947.966 133.23 943.272 152.79C961.881 131.489 970.334 155.775 963.129 161.874Z"
      />
    </>
  );
};
export default Cloud1;
