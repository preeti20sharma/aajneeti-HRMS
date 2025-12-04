import { HomeIcon } from "lucide-react";
import { allEmployees } from "@/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const AttendanceInsights = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [sortByOpen, setsortByOpen] = useState(false);
    const [selectedsortBy, setSelectedsortBy] = useState("");

    return (
        <div className="w-full mx-auto  bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="flex flex-row sm:p-4 items-center justify-between mb-6 ">
                <div className="flex flex-col">
                    <h2 className="
                            text-3xl font-bold 
                            bg-gradient-to-r from-red-800 to-slate-900 
                            bg-clip-text text-transparent 
                            animate-gradient-slide
                            dark:text-slate-100
                        ">
                        Attendance Insights
                    </h2>
                    <ul className="flex items-center text-sm mt-2">
                        <li>
                            <Link to="/" className="flex items-center text-slate-900 dark:text-slate-200 hover:underline">
                                <HomeIcon size={15} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Attendance Insights</li>
                    </ul>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-3 pb-4 mt-4 justify-end sm:px-4">

                {/* FILTER DROPDOWN */}
                <div className="relative flex items-center  border rounded-md px-1 py-2 text-sm
    bg-white text-red-800 dark:bg-slate-800 dark:text-slate-200
    border-red-100 dark:border-slate-600">

                    {/* CUSTOM DROPDOWN */}
                    <div className="relative w-40">
                        <div
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="cursor-pointer flex justify-evenly items-center bg-transparent"
                        >
                            <span>{selectedFilter || "Select Department"}</span>
                            <span className="text-xs ">▼</span>
                        </div>

                        {filterOpen && (
                            <div className="absolute  w-40 mt-3 bg-white dark:bg-slate-800 
                            border border-gray-300 dark:border-slate-600 
                            rounded-md shadow-lg z-20 text-sm">

                                {[
                                    "Sales",
                                    "IT",
                                    "Operation",
                                    "Content",
                                    "HR",
                                    "SEO"

                                ].map((opt, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedFilter(opt);
                                            setFilterOpen(false);
                                        }}
                                        className="px-3 py-2 cursor-pointer 
                                   hover:bg-red-800 hover:text-white dark:hover:bg-slate-700"
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>


                {/* SORT DROPDOWN */}
                <div className="relative flex items-center  border rounded-md px-1 py-2 text-sm
                    bg-white text-red-800 dark:bg-slate-800 dark:text-slate-200
                    border-red-100 dark:border-slate-600">

                    {/* CUSTOM DROPDOWN */}
                    <div className="relative w-40">
                        <div
                            onClick={() => setsortByOpen(!sortByOpen)}
                            className="cursor-pointer flex justify-evenly items-center bg-transparent"
                        >
                            <span>{selectedsortBy || "Sort By Office"}</span>
                            <span className="text-xs ">▼</span>
                        </div>

                        {sortByOpen && (
                            <div className="absolute  w-40 mt-3 bg-white dark:bg-slate-800 
                            border border-gray-300 dark:border-slate-600 
                            rounded-md shadow-lg z-20 text-sm">

                                {[
                                    "Noida",
                                    "Lucknow",
                                    "Kolkata",
                                ].map((opt, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedsortBy(opt);
                                            setsortByOpen(false);
                                        }}
                                        className="px-3 py-2 cursor-pointer 
                                   hover:bg-red-800 hover:text-white dark:hover:bg-slate-700"
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table w-full text-left text-sm">
                    <thead className="table-header 
        bg-gradient-to-r from-red-700 to-black text-white 
        dark:bg-slate-800 dark:text-slate-200
        sticky top-0 z-10 shadow-sm">
                        <tr className="table-row">
                            <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide
                 text-white
                border-none
                first:rounded-l-lg last:rounded-r-lg
            ">
                                ID
                            </th>
                            <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide 
                 text-white border-none
            ">
                                Name
                            </th>
                            <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide 
                 text-white border-none last:rounded-r-lg
            ">
                                Department
                            </th>
                            <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide 
                 text-white border-none last:rounded-r-lg
            ">
                                Office
                            </th>
                            <th className="table-head px-4 py-3 text-xs font-semibold uppercase tracking-wide 
                 text-white border-none last:rounded-r-lg
            ">
                                Reporting To
                            </th>
                        </tr>
                    </thead>
                    <tbody className="
                            table-body 
                            divide-y divide-red-100 
                            dark:divide-slate-800

                            [&>*:nth-child(even)]:bg-red-50/40 
                            dark:[&>*:nth-child(even)]:bg-transparent
                        ">
                        {allEmployees.map((Employee) => (
                            <tr key={Employee.number} className="
                    table-row 
                    transition-all duration-200
                    hover:bg-red-100/70 
                    dark:hover:bg-slate-800/60
                    hover:shadow-sm 
                    rounded-lg
                ">
                                <td className="table-cell px-4 py-3 border-none text-sm text-slate-700 dark:text-slate-100">
                                    {Employee.number}
                                </td>

                                <td className="table-cell px-4 py-3 border-none">
                                    <div className="flex w-max gap-x-4 items-center">
                                        <img src={Employee.image} alt={Employee.name} className="size-14 rounded-xl object-cover 
                                shadow-md border border-red-200 
                                dark:border-slate-700 dark:shadow-none" />
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-slate-900 dark:text-slate-100">
                                                {Employee.name}
                                            </p>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                                {Employee.description}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell px-4 py-3 border-none text-sm text-slate-700 dark:text-slate-100">
                                    {Employee.department}
                                </td>
                                <td className="table-cell px-4 py-3 border-none text-sm text-slate-700 dark:text-slate-100">
                                    {Employee.office}
                                </td>
                                <td className="table-cell px-4 py-3 border-none text-sm text-slate-700 dark:text-slate-100">
                                    {Employee.reportingTo}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AttendanceInsights;