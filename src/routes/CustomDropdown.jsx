import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

const CustomDropdown = ({ label, options }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(label);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full">

            {/* TOP BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="
          w-full p-2 
          bg-white dark:bg-slate-900 
          border border-red-200 dark:border-slate-700 
          rounded-md text-sm 
          text-slate-700 dark:text-slate-200 
          flex justify-between items-center
          shadow-sm hover:shadow-md dark:hover:shadow-none
          transition-all
        "
            >
                {selected}

                <ChevronDown
                    size={18}
                    className={`text-red-600 dark:text-red-400 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* DROPDOWN LIST */}
            {open && (
                <div
                    className="
            absolute left-0 mt-2 w-full z-50 
            bg-gradient-to-r from-red-100 to-white dark:bg-none dark:bg-slate-700 
            border border-red-200 dark:border-slate-700 
            rounded-md shadow-xl
            max-h-56 overflow-y-auto
            animate-fade-slide
          "
                >
                    {options.map((opt, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelected(opt);
                                setOpen(false);
                            }}
                            className="
                p-2 cursor-pointer text-sm font-semibold
                text-red-700 dark:text-slate-200
                hover:bg-red-50 dark:hover:bg-slate-700 
                hover:text-red-600 dark:hover:text-red-400
                transition-all
              "
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default CustomDropdown;
/* ⭐ FIX: Add PropTypes */
CustomDropdown.propTypes = {
    label: PropTypes.string.isRequired,     // 🔥 ESLint error solved
    options: PropTypes.arrayOf(PropTypes.string).isRequired
};
