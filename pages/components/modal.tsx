import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import CloseSVG from '../../public/close.svg'
export default function Modal({
  content,
  isModalOpen,
  setModalOpen,
}: {
  content: {
    title: string
    description?: string
    didYouKnow?: string
    link?: string
    src?: string
    img?: string
    video?: string
    buttonText?: string
  }
  isModalOpen: boolean
  setModalOpen: any
}) {
  let [isOpen, setIsOpen] = useState(isModalOpen)

  function closeModal() {
    setModalOpen(!isModalOpen)
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  useEffect(() => {
    setIsOpen(isModalOpen)
  }, [isModalOpen])
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
                    className={`h-auto px-6 py-3 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl  ${
                      content?.video && content?.didYouKnow
                        ? 'max-w-3xl'
                        : 'max-w-md '
                    }`}
                  >
                    <div className="flex">
                      <Dialog.Title
                        as="h3"
                        className="mt-1 font-bold text-black "
                      >
                        {content?.title}
                      </Dialog.Title>
                      <CloseSVG
                        className="ml-auto duration-300 cursor-pointer lg:hover:scale-110"
                        onClick={closeModal}
                      />
                    </div>
                    <hr className="h-px mt-2 bg-[#EFEEEE] border-none"></hr>
                    <div
                      className={`${content?.video && 'pt-4 justify-center'} ${
                        content?.didYouKnow && 'lg:flex'
                      } ${
                        content?.video &&
                        content?.didYouKnow &&
                        'pb-4 lg:space-x-8'
                      }`}
                    >
                      <iframe
                        className={`${
                          content?.video
                            ? 'col-span-5 m-auto aspect-video w-full min-h-[200px]'
                            : 'hidden'
                        }`}
                        src={`https://www.youtube-nocookie.com/embed/${content?.video}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {content?.didYouKnow ? (
                        <div className="flex flex-col justify-center col-span-5 my-auto">
                          {content?.img && (
                            <div className="w-full mt-6">
                              <Image
                                className="mx-auto"
                                width={500}
                                height={200}
                                src={content?.img}
                                alt={content.title}
                              />
                            </div>
                          )}

                          <div className="mt-4">
                            {content?.description && (
                              <p className="text-gray-500 ">
                                {content.description}
                              </p>
                            )}
                            {content?.didYouKnow && (
                              <>
                                <p className="mt-2 text-[#1c1c1c] text-2xl font-bold">
                                  Did you know that
                                </p>
                                <p className="mt-2 text-[#1c1c1c]">
                                  {content?.didYouKnow}
                                </p>
                              </>
                            )}
                          </div>
                          <div className="mt-8 mb-4">
                            {content?.link && (
                              <button
                                type="button"
                                className="inline-flex text-lg justify-center px-5 py-1 font-medium group hover:text-black duration-300 hover:bg-[#FDDADE] border border-transparent text-white rounded-[56px] bg-[#F8485E] focus:outline-none "
                              >
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={content?.link}
                                  className="flex group"
                                >
                                  {content.buttonText
                                    ? content.buttonText
                                    : 'Read more'}
                                  <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    className="my-auto ml-2 group"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.79773 6.23438H5.34399C4.87151 6.23438 4.41838 6.42207 4.08429 6.75616C3.75019 7.09025 3.5625 7.54338 3.5625 8.01586V16.0326C3.5625 16.505 3.75019 16.9582 4.08429 17.2923C4.41838 17.6263 4.87151 17.814 5.34399 17.814H13.3607C13.8332 17.814 14.2863 17.6263 14.6204 17.2923C14.9545 16.9582 15.1422 16.505 15.1422 16.0326V11.5788"
                                      className="duration-300 group-hover:stroke-black stroke-white"
                                      strokeWidth="1.78149"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.90723 12.4699L17.8147 3.5625"
                                      className="duration-300 group-hover:stroke-black stroke-white"
                                      strokeWidth="1.78149"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M13.3615 3.5625H17.8152V8.01622"
                                      className="duration-300 group-hover:stroke-black stroke-white"
                                      strokeWidth="1.78149"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-4 mb-4">
                          {content?.link && (
                            <button
                              type="button"
                              className="inline-flex text-lg justify-center px-5 py-1 font-medium group hover:text-black duration-300 hover:bg-[#FDDADE] border border-transparent text-white rounded-[56px] bg-[#F8485E] focus:outline-none "
                            >
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={content?.link}
                                className="flex group"
                              >
                                {content.buttonText
                                  ? content.buttonText
                                  : 'Read more'}
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  className="my-auto ml-2 group"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.79773 6.23438H5.34399C4.87151 6.23438 4.41838 6.42207 4.08429 6.75616C3.75019 7.09025 3.5625 7.54338 3.5625 8.01586V16.0326C3.5625 16.505 3.75019 16.9582 4.08429 17.2923C4.41838 17.6263 4.87151 17.814 5.34399 17.814H13.3607C13.8332 17.814 14.2863 17.6263 14.6204 17.2923C14.9545 16.9582 15.1422 16.505 15.1422 16.0326V11.5788"
                                    className="duration-300 group-hover:stroke-black stroke-white"
                                    strokeWidth="1.78149"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8.90723 12.4699L17.8147 3.5625"
                                    className="duration-300 group-hover:stroke-black stroke-white"
                                    strokeWidth="1.78149"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.3615 3.5625H17.8152V8.01622"
                                    className="duration-300 group-hover:stroke-black stroke-white"
                                    strokeWidth="1.78149"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    {content?.src && (
                      <div>
                        <hr className="h-px bg-[#EFEEEE] border-none"></hr>
                        <p className="font-medium text-xs leading-8 text-[#1c1c1c] opacity-60 ">
                          {content?.src}
                        </p>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
