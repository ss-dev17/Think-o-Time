import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown=({
  label,
  items,
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onChange) onChange(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative justify-center ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-background hover:bg-primary flex w-48 items-center justify-between gap-2 rounded-lg border px-4 py-2 text-left transition-colors font-Quicksand"
      >
        <span className="block truncate">
          {selectedItem ? selectedItem.label : label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-background absolute left-0 z-10 w-48 mt-1 origin-top rounded-lg border shadow-lg"
            initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{
              opacity: 0,
              y: -10,
              scaleY: 0.8,
              transition: { duration: 0.2 },
            }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
          >
            <ul className="py-2 w-48 font-Nunito" role="menu">
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  role="menuitem"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="block"
                  whileHover={{ x: 5 }}
                >
                  <button
                    onClick={() => handleItemSelect(item)}
                    className={`flex items-center w-48 px-4 py-2 text-left text-sm ${
                      selectedItem?.id === item.id ? "text-brand font-medium" : ""
                    }`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                    {selectedItem?.id === item.id && (
                      <motion.span
                        className="ml-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <svg
                          className="text-brand h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.span>
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Dropdown;