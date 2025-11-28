import { Users } from "lucide-react";
import CustomDropdown from "./CustomDropdown";
import { Link } from "react-router-dom";

const Attendance = () => {
    return (

        <div className="w-full mx-auto  bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100 p-2">
            {/* Header */}
            <header className="mx-5 my-5">
                <h2 className="
            text-2xl font-bold 
            bg-gradient-to-r from-red-800 to-black
            bg-clip-text text-transparent 
            dark:text-slate-100
        ">
                    Daily Attendance Report
                </h2>
                <p className="text-sm text-red-800 dark:text-red-100 mt-1">Track: Late Coming, Half Day, Short Leave, WFH</p>
            </header>

            {/* Employee attendace form */}
            <div className="bg-white dark:bg-slate-800 p-4 mb-8 rounded-lg shadow-md border border-red-100 dark:border-slate-700">

                {/* Title */}
                <h2 className="text-md font-semibold text-red-700 dark:text-red-300 mb-3">
                    Attendance Entry
                </h2>

                {/* Form */}
                <form className="grid grid-cols-1 sm:grid-cols-5 gap-3">

                    {/* NAME */}
                    <div className="col-span-1">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Name</label>
                        <input
                            type="text"
                            className="mt-1 p-1.5 text-sm rounded-md border border-red-200 dark:border-slate-600
            bg-red-50/40 dark:bg-slate-700/40 w-full focus:outline-none focus:border-red-500"
                        />
                    </div>

                    {/* DATE */}
                    <div className="col-span-1">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Date</label>
                        <input
                            type="date"
                            className="mt-1 p-1.5 text-sm rounded-md border border-red-200 dark:border-slate-600
            bg-red-50/40 dark:bg-slate-700/40 w-full focus:outline-none focus:border-red-500"
                        />
                    </div>

                    {/* IN TIME */}
                    <div className="col-span-1">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">In Time</label>
                        <input
                            type="time"
                            className="mt-1 p-1.5 text-sm rounded-md border border-red-200 dark:border-slate-600
            bg-red-50/40 dark:bg-slate-700/40 w-full focus:outline-none focus:border-red-500"
                        />
                    </div>

                    {/* OUT TIME */}
                    <div className="col-span-1">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Out Time</label>
                        <input
                            type="time"
                            className="mt-1 p-1.5 text-sm rounded-md border border-red-200 dark:border-slate-600
            bg-red-50/40 dark:bg-slate-700/40 w-full focus:outline-none focus:border-red-500"
                        />
                    </div>

                    {/* STATUS */}
                    <div className="col-span-1">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Status</label>
                        <select
                            className="mt-1 p-1.5 text-sm rounded-md border border-red-200 dark:border-slate-600
            bg-red-50/40 dark:bg-slate-700/40 w-full focus:outline-none focus:border-red-500"
                        >
                            <option value="">Select</option>
                            <option>Present</option>
                            <option>Absent</option>
                            <option>Half Day</option>
                            <option>Short Leave</option>
                            <option>WFH</option>
                        </select>
                    </div>

                    {/* REMARKS (FULL WIDTH) */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="text-xs font-medium text-slate-700 dark:text-slate-300">Remarks</label>
                        <textarea
                            rows="2"
                            className="mt-1 p-1.5 text-sm rounded-md border border-red-200 dark:border-slate-600
            bg-red-50/40 dark:bg-slate-700/40 w-full resize-none focus:outline-none focus:border-red-500"
                        ></textarea>
                    </div>

                    {/* BUTTON (aligns right, stays in same grid row) */}
                    <div className="col-span-1 sm:col-span-5 flex justify-start mt-1">
                        <button
                            className="
                px-6 py-1.5 text-sm font-semibold rounded-md text-white 
                bg-gradient-to-r from-red-800 to-black
                hover:from-black hover:to-red-800 transition-all duration-300
            "
                        >
                            Apply
                        </button>
                    </div>

                </form>

            </div>


            {/* Filters Section */}
            <div className="bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700 text-left p-4 rounded-xl shadow-lg mb-6">
                <h2 className="text-lg font-semibold mb-3">Filters</h2>
                <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
                    <CustomDropdown
                        label="Date"
                        options={["Today", "Yesterday", "Last 7 Days", "This Month"]}
                    />

                    <CustomDropdown
                        label="Employee Name"
                        options={["Rahul", "Neha", "Amit", "Sara"]}
                    />

                    <CustomDropdown
                        label="Department"
                        options={["HR", "Sales", "Marketing", "Admin"]}
                    />

                    <button className="
                        border-red-100 dark:border-slate-700 
                        text-center text-slate-100 
                        bg-gradient-to-r from-red-800 to-black
                        hover:bg-gradient-to-r hover:from-black hover:to-red-800
                        transition-all duration-500 ease-in-out px-4 py-2 rounded-md text-sm font-semibold
                        ">
                        Apply
                    </button>

                </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white dark:bg-slate-800 border border-red-100 dark:border-slate-700  rounded-xl shadow-lg overflow-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-red-700 to-black text-white text-center">
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Name</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Date</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">In Time</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Out Time</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Status</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(5)].map((_, i) => {
                            // actual time (from API / DB )
                            const checkInTime = i % 2 === 0 ? "10:05 AM" : "10:20 AM";

                            // split Time : "10:05 AM" -> "10:05" + "AM"
                            const [timePart] = checkInTime.split(" ");
                            const [hourStr, minuteStr] = timePart.split(":");

                            let hour = Number(hourStr);
                            const minute = Number(minuteStr);
                            const isLate = hour > 10 || (hour === 10 && minute > 15);
                            return (
                                <tr
                                    key={i}
                                    className="text-center hover:bg-red-50 dark:hover:bg-slate-700 transition border-b border-red-100 dark:border-slate-700"
                                >
                                    <td className="p-3">Employee {i + 1}</td>
                                    <td className="p-3">24 Nov 2025</td>

                                    {/*  in time time  */}
                                    <td className="p-3">{checkInTime}</td>
                                    {/*  out time  */}
                                    <td className="p-3">{checkInTime}</td>
                                    {/* Status badge: Late / On Time */}
                                    <td className="p-3">
                                        <span
                                            className={`
                                                inline-block          
                                                w-24                 
                                                text-center
                                                py-1 rounded-md text-sm text-white 
                                                ${isLate ? "bg-red-700" : "bg-green-600"}
                                                `}
                                        >
                                            {isLate ? "Late" : "On Time"}
                                        </span>
                                    </td>
                                    <td
                                        className={`p-3 ${isLate
                                            ? "text-red-700 dark:text-red-200"
                                            : "text-green-700 dark:text-green-300"
                                            }`}
                                    >
                                        {isLate ? "Came after 10:15" : "Reached before 10:15"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* Summary Cards */}
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-8">
                {[
                    { label: "Total Employees", value: 40 },
                    { label: "Present", value: 32 },
                    { label: "Late Coming", value: 5 },
                    { label: "WFH", value: 3 },
                    { label: "On Full Leave", value: 7 },
                    { label: "On Half Leave", value: 2 },
                    { label: "On Short Leave", value: 6 },

                ].map((card, i) => (
                    <div key={i} className="card border-red-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg rounded-xl transition-colors hover:shadow-xl">
                        <div className="card-header">
                            <div className="w-fit rounded-lg bg-red-500/20 p-2 text-red-800 transition-colors dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">{card.label}</p>
                        </div>
                        <div className="card-body   bg-red-50 transition-colors dark:bg-slate-900">
                            <div className="flex justify-between">
                                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{card.value}</p>
                                <Link to="/" >
                                    <button className="
                                                                px-4 py-1 rounded-lg text-red-800 hover:text-slate-200
                                                                bg-transparent border border-red-800 hover:bg-red-700 
                                                                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-200 dark:text-slate-200
                                                                transition-all">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Attendance