import { useState } from "react";
import MyModal from "../../components/modal";

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
        width="74"
        height="74"
        x="65"
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
