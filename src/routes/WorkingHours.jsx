import { PencilLine, Trash, SlidersHorizontal, ArrowDownWideNarrow, PlusSquare, HomeIcon } from "lucide-react";
import { Footer } from "@/layouts/footer";
import { WorkingHour } from "@/constants";
import { Link } from "react-router-dom";

const WorkingHours = () => {
    return (
        <div className="w-full mx-auto p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6 sm:p-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Extra Working Hours
                    </h2>
                    <ul className="flex items-center text-sm mt-2">
                        <li>
                            <Link
                                to="/"
                                className="flex items-center text-slate-900 dark:text-slate-200 hover:underline"
                            >
                                <HomeIcon size={15} />
                                <span className="pl-2">Home</span>
                            </Link>
                        </li>
                        <li className="px-2 text-slate-500">|</li>
                        <li className="text-slate-600 dark:text-slate-50">Extra Working Hours</li>
                    </ul>
                </div>
                {/* Add Employee */}
                <div>
                    <Link
                        to="/add-employee"
                        className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white text-slate-900  dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-900"
                    >
                        <PlusSquare size={18} />
                        <span>Add Details</span>
                    </Link>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-3 pb-4 mt-4 justify-end sm:px-4">
                {/* Filter Select */}
                <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white 
                  dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                    <SlidersHorizontal size={18} />
                    <select
                        className="bg-transparent focus:outline-none text-sm"
                        defaultValue=""
                    >
                        <option value="" disabled>Filter</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="invited">Invited</option>
                    </select>
                </div>

                {/* Sort Select */}
                <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white 
                  dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                    <ArrowDownWideNarrow size={18} />
                    <select
                        className="bg-transparent focus:outline-none text-sm"
                        defaultValue=""
                    >
                        <option value="" disabled>Sort by</option>
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="az">A–Z</option>
                        <option value="za">Z–A</option>
                    </select>
                </div>
            </div>


            {/* Table Section */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">ID</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Date</th>
                            <th className="table-head">Total Hours</th>
                            <th className="table-head">Working Place</th>
                            <th className="table-head">Shift</th>
                            <th className="table-head">Status</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {WorkingHour.map((Hours) => (
                            <tr key={Hours.number} className="table-row">
                                <td className="table-cell">{Hours.number}</td>
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={Hours.image}
                                            alt={Hours.name}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{Hours.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">
                                                {Hours.description}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">{Hours.date}</td>
                                <td className="table-cell">{Hours.totalHours}</td>
                                <td className="table-cell">{Hours.workingPlace}</td>
                                <td className="table-cell">{Hours.Shift}</td>
                                <td className="table-cell">{Hours.status}</td>
                                <td className="table-cell">
                                    <div className="flex items-center gap-x-4">
                                        <button className="text-blue-500 dark:text-blue-600">
                                            <PencilLine size={20} />
                                        </button>
                                        <button className="text-red-500">
                                            <Trash size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div >
    );
};

export default WorkingHours;
