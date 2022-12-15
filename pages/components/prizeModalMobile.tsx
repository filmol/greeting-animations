import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import CloseSVG from "../../public/close.svg";

export default function Modal({
  isModalOpen,
  setModalOpen,
}: {
  isModalOpen: boolean;
  setModalOpen: any;
}) {
  let [isOpen, setIsOpen] = useState(isModalOpen);

  function closeModal() {
    setModalOpen(!isModalOpen);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      <Transition appear show={isOpen ? isOpen : false} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <div
                    className={`h-auto px-6 py-3 align-middle transition-all transform bg-white shadow-xl rounded-2xl lg:min-w-[500px] min-h-[25vh] max-w-lg`}
                  >
                    <div className="w-full mt-6">
                      <Image
                        className="absolute w-48 mx-auto -top-32 lg:w-72 lg:-top-44 left-[50%] -ml-24 lg:-ml-[150px]"
                        width={300}
                        height={300}
                        src="/presents.svg"
                        alt="presents"
                      />
                    </div>
                    <div className="mt-16 text-center lg:mt-28">
                      <h1 className="text-3xl font-bold text-[#F8485E]">
                        Congratulations!{" "}
                      </h1>
                      <p className="text-[#1c1c1c] text-lg mt-4">
                        Please fill the form for your chance to win a special
                        Devoteam prize*.
                      </p>
                      <iframe
                        className="customIframe mt-3"
                        src="https://www.info.devoteam.com/l/505131/2022-12-15/jv852f"
                        width="100%"
                        height="100"
                        // type="text/html"
                        frameBorder="0"
                        style={{ border: "0" }}
                      />
                    </div>

                    <div className="mt-8">
                      <hr className="h-px bg-[#EFEEEE] border-none"></hr>
                      <p className="font-medium text-xs leading-8 text-[#1c1c1c] opacity-60 appearance-none">
                        {/* *Quantities are limited to 100 gifts, awarded to the
                        first 100 emails received.{' '} */}
                        <a
                          href={"../TermsAndConditions.pdf"}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-900 outline-0 appearance-none"
                        >
                          *Click here for Terms and Conditions.
                        </a>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
