import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import CloseSVG from '../../public/close.svg'
import RightSVG from '../../public/right.svg'
import LeftSVG from '../../public/left.svg'

export default function FiveValuesModal({
  isModalOpen,
  setModalOpen,
}: {
  isModalOpen: boolean
  setModalOpen: any
}) {
  const values = [
    {
      title: 'Respect',
      content: 'It is the foundation of the relations between Devoteamers.',
      image: '/respect.jpg',
    },
    {
      title: 'Frankness',
      content: 'We make bold decisions without fear of disrupting habits.',
      image: '/frankness.jpg',
    },
    {
      title: 'Ambition',
      content:
        'We work as one team & family, to add value and become a leader in the market.',
      image: '/ambition.jpg',
    },
    {
      title: 'Entrepreneurship',
      content: 'We are self-disciplined, and continuously fight bureaucracy.',
      image: '/entrepreneurship.jpg',
    },
    {
      title: 'Collaboration',
      content: 'Everybody is sort of an expert in their own fields.',
      image: '/collaboration.jpg',
    },
  ]
  let [isOpen, setIsOpen] = useState(isModalOpen)
  let [currentValue, setCurrentValue] = useState<number>(0)

  function changeCurrentValue(increase: boolean) {
    if (increase) {
      currentValue != 4 && setCurrentValue(currentValue + 1)
    } else {
      currentValue != 0 && setCurrentValue(currentValue - 1)
    }
  }

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
                  <div className="h-auto max-w-lg px-6 py-3 overflow-hidden align-middle transition-all transform bg-white shadow-xl lg:max-w-2xl rounded-2xl">
                    <div className="flex">
                      <Dialog.Title
                        as="h3"
                        className="mt-1 font-bold text-black "
                      >
                        Devoteam 5 Values
                      </Dialog.Title>
                      <CloseSVG
                        className="ml-auto duration-300 cursor-pointer lg:hover:scale-110"
                        onClick={closeModal}
                      />
                    </div>
                    <hr className="h-px mt-2 bg-[#EFEEEE] border-none"></hr>
                    <div>
                      <div className="flex flex-col justify-center pb-6 my-auto">
                        <div className="relative w-full mt-6">
                          <Image
                            className="object-cover mx-auto md:w-full focus:outline-none min-h-[200px]"
                            width={500}
                            height={200}
                            src={values[currentValue].image}
                            alt="5Values "
                          />
                          <button
                            onClick={() => {
                              changeCurrentValue(false)
                            }}
                            className="absolute focus:outline-none py-auto py-[20%] group top-0 left-0"
                          >
                            <LeftSVG className="duration-300 cursor-pointer group-hover:scale-125" />
                          </button>

                          <button
                            onClick={() => {
                              changeCurrentValue(true)
                            }}
                            className="absolute focus:outline-none py-auto py-[20%] group top-0 right-0"
                          >
                            <RightSVG className="duration-300 cursor-pointer group-hover:scale-125" />
                          </button>
                        </div>

                        <div className="flex flex-col mt-4 lg:flex-row">
                          <div className="max-w-md lg:min-h-0 min-h-[84px]">
                            <p className=" text-[#1c1c1c] text-lg font-bold">
                              {values[currentValue].title}
                              <span className="ml-2 font-normal">
                                - {values[currentValue].content}
                              </span>
                            </p>
                          </div>
                          <div className="w-auto mt-4 sm:mt-8 lg:mt-0 lg:ml-auto">
                            <button
                              type="button"
                              className="inline-flex text-lg justify-center px-5 py-1 font-medium group hover:text-black duration-300 hover:bg-[#FDDADE] border border-transparent text-white rounded-[56px] bg-[#F8485E] focus:outline-none "
                            >
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.devoteam.com/join-us/values/"
                                className="flex group"
                              >
                                Read more
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
                          </div>
                        </div>
                      </div>
                    </div>
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
