import { Users } from "lucide-react";
import CustomDropdown from "./CustomDropdown";
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
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">ID</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Name</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Date</th>
                            <th className="p-3 border-b border-red-100 dark:border-slate-700 text-center">Entry Time</th>
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
                                    <td className="p-3">EMP{100 + i}</td>
                                    <td className="p-3">Employee {i + 1}</td>
                                    <td className="p-3">24 Nov 2025</td>

                                    {/*  Actual time  */}
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
                ].map((card, i) => (
                    <div key={i} className="card border-red-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg rounded-xl transition-colors hover:shadow-xl">
                        <div className="card-header">
                            <div className="w-fit rounded-lg bg-red-500/20 p-2 text-red-800 transition-colors dark:bg-red-100 dark:text-red-800">
                                <Users size={26} />
                            </div>
                            <p className="card-title">{card.label}</p>
                        </div>
                        <div className="card-body bg-red-50 transition-colors dark:bg-slate-900">
                            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">{card.value}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Attendance