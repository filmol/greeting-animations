import { useState } from "react";
import Modal from "../components/modal";

const Cloud3 = () => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Cloud Google Cloud",
          didYouKnow:
            "...that 48% of organizations use Google Cloud, and 30% of companies quote Google Cloud as is their primarily cloud provider?",
          link: "https://www.devoteam.com/partner/google-cloud/",
          src: "2021 IDC Cloud benchmark survey, sponsored by Devoteam.",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <g className="animate-cloud3 absolute cursor-pointer hover:[animation-play-state:paused] duration-300">
        <svg x="60%" y="200">
          <path
            filter="url(#filter0_d_225_35725)"
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            d="M69.5187 51.0642L26.5933 52.6861C15.9623 53.0878 -0.25673 51.0911 0.947353 40.5208C1.70765 33.8464 14.6812 32.5403 23.2482 41.8526C15.6444 -7.03376 53.6456 -16.1061 53.2591 33.1721C58.5268 18.0959 69.1418 30.3908 67.117 38.0992C83.7308 24.3883 89.9899 33.3683 88.3579 41.7342C86.8552 49.4376 77.3617 50.7678 69.5187 51.0642Z"
            className="fill-[#FFFCFC] dark:fill-[#CFDEFC]"
          />
        </svg>
      </g>
    </>
  );
};
export default Cloud3;
