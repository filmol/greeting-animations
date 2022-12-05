import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function MyModal({
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
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl h-auto min-h-[25vh] p-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="my-auto">
                    {' '}
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900"
                    >
                      {content.title}
                    </Dialog.Title>
                    <div className="mt-4">
                      {content.didYouKnow && (
                        <p className="text-gray-500 ">{content.description}</p>
                      )}
                      {content.didYouKnow && (
                        <p className="mt-2 text-gray-500">
                          {content.didYouKnow}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 space-x-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 font-medium text-blue-900 duration-300 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none "
                      >
                        <a target="_blank" href={content.link}>
                          Read more
                        </a>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 font-medium text-blue-900 duration-300 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none "
                        onClick={closeModal}
                      >
                        Continue explore
                      </button>
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
