"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductModal({ open, onClose, product }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative ocean-card max-w-2xl w-full mx-6 p-6 bg-surface text-body"
            role="dialog"
            aria-modal="true"
          >
            <button onClick={onClose} className="absolute top-4 right-4 ocean-outline px-3 py-1">Close</button>
            {product && (
              <div className="text-center">
                <img src={product.image} alt={product.name} className="mx-auto h-48 object-contain" />
                <h3 className="mt-4 text-2xl font-semibold text-heading">{product.name}</h3>
                <p className="mt-2">{product.description}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="ocean-card p-4">
                      <p className="text-sm">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
