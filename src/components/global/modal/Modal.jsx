import React, { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ModalBody from "../../index/pricing/Card/ModalBody"

const Modal = ({ onclick, isOpen, title, type }) => {
  const modal = useRef()
  const handleClick = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      onclick()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })

  let body

  if (type === "pricing") {
    body = <ModalBody />
  }

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="fixed w-full h-full inset-0 bg-modal-background modal-blur flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ ease: "easeIn", duration: 0.15 }}
              ref={modal}
              className="p-6 bg-white absolute left-0 right-0 mx-auto max-w-lg rounded-md"
            >
              <div>
                <div className="flex items-center pb-6 relative">
                  <h2 className="text-2xl text-gray-800 font-medium">
                    {title}
                  </h2>
                  <button className="absolute top-0 right-0" onClick={onclick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentcolor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x text-gray-800 ease-in duration-100 transition-colors hover:text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                {body}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Modal
