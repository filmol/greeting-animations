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
                  <div className="max-w-lg"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
