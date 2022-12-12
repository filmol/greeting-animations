import { useState } from "react";
import Modal from "../../components/modal";
import MyModal from "../../components/modal";

const MobileCloud1 = ({ cssClass }: { cssClass: string }) => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Innovative Tech",
          didYouKnow:
            "... that By 2024, 80% of companies that miss out on Cloud adoption will overspend by 20-50%.",
          link: "https://www.devoteam.com/expertise/innovative-tech/",
          src: "2021 IDC Cloud benchmark survey, sponsored by Devoteam.",
          img: "/innovativeCloud.svg",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <g className="animate-cloud1">
        <svg
          x="120"
          y="220"
          width="55"
          height="25"
          viewBox="0 0 55 25"
          fill="none"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
          className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300 fill-[#FFFCFC] dark:fill-[#CFDEFC]`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M41.6231 22.4696L8.57806 23.816C6.27949 23.9097 3.80304 23.6957 2.35239 21.9102C0.747131 19.9345 -0.0759787 17.1152 1.42774 15.6003C5.74551 11.2504 11.5724 14.8534 14.0056 17.2563C11.4817 0.344999 27.4105 2.36487 28.3172 12.3362C29.5889 2.60972 41.3279 -4.04037 50.0072 4.27986C53.5939 7.71825 54.2281 11.5203 53.5993 14.8307C52.6095 20.0419 46.9231 22.2537 41.6231 22.4696Z" />
        </svg>
      </g>
    </>
  );
};
export default MobileCloud1;
