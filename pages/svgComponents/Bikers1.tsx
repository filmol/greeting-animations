import React, { useState } from "react";
import Modal from "../components/modal";
import Biker1 from "./Bicycle1.svg";

export default function Bikers1() {
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Creative tech",
          link: "https://www.devoteam.com/playground/sustainability-enabled-by-digital/",
          src: "https://drive.google.com/file/d/1FXSDYY6tzZvwNLYmFdqNvKCTZRwczj3u/view?usp=sharing",
          video: "1Ydcei2jUzI",
          didYouKnow:
            "... that there are more than 1000 creative technologists in our teams",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <g
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <g className="animate-bike1 xl:animate-slowerBike1 cursor-pointer hover:[animation-play-state:paused] duration-300">
          <svg x="-20%" y="90%" className="">
            <Biker1 />
          </svg>
        </g>
      </g>
    </>
  );
}
