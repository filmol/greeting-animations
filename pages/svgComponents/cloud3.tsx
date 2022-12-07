import { useState } from "react";
import Modal from "../components/modal";

const Cloud3 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Google Cloud",
          didYouKnow:
            "Did you know that 48% of organizations use Google Cloud. And 30% of organizations quote Google Cloud as is their primarily cloud provider",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <path
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300 fill-[#FFFCFC] dark:fill-[#CFDEFC]`}
        d="M1368.75 255.356L1261.24 259.737C1254.07 257.493 1247.03 245.103 1252.41 239.679C1262.77 229.24 1276.76 237.887 1282.6 243.654C1276.54 203.067 1314.77 207.914 1316.95 231.846C1320 208.502 1348.17 192.542 1369 212.51C1385.67 228.485 1375.78 247.731 1368.75 255.356Z"
      />
    </>
  );
};
export default Cloud3;
