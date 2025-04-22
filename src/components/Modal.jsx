import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Modal({ title, isOpen, onClose, children, footer }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            tabIndex="-1"
            className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-lg space-y-4 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

            {children}

            {footer && <div className="flex justify-end space-x-3 pt-4">{footer}</div>}

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
              aria-label="Fechar modal"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
