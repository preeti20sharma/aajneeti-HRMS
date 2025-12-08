import { useState } from "react";
import PropTypes from "prop-types";

const DateFilter = ({ selectedMonth, setSelectedMonth }) => {
    const [isOpen, setIsOpen] = useState(false);

    const currentYear = new Date().getFullYear();

    // Generate all 12 months for current year
    const months = Array.from({ length: 12 }, (_, i) => {
        const month = (i + 1).toString().padStart(2, "0"); // "01" → "12"
        return `${currentYear}-${month}`;
    });

    return (
        <div className="relative w-60">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-2 
                bg-white dark:bg-slate-700 
                border border-red-300 dark:border-slate-600 
                rounded-lg shadow-sm 
                hover:border-red-800 
                transition-all text-sm"
            >
                {selectedMonth
                    ? new Date(selectedMonth).toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })
                    : "All Months"}
                <span>▾</span>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white dark:bg-slate-700  
                    border border-red-300 dark:border-slate-600 
                    rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">

                    {/* All Months */}
                    <div
                        onClick={() => {
                            setSelectedMonth("");
                            setIsOpen(false);
                        }}
                        className="px-4 py-2 text-sm cursor-pointer 
                        hover:bg-red-600 hover:text-white 
                        dark:hover:bg-red-700 
                        transition-all "
                    >
                        All Months
                    </div>

                    {/* 12-Month List */}
                    {months.map((monthValue) => (
                        <div
                            key={monthValue}
                            onClick={() => {
                                setSelectedMonth(monthValue);
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 text-sm cursor-pointer 
                            hover:bg-red-600 hover:text-white 
                            dark:hover:bg-red-700 
                            transition-all"
                        >
                            {new Date(monthValue).toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DateFilter;

// PropTypes
DateFilter.propTypes = {
    selectedMonth: PropTypes.string,
    setSelectedMonth: PropTypes.func.isRequired,
};
