import { PencilLine, Trash, LayoutGrid, SlidersHorizontal, ArrowDownWideNarrow, PlusSquare } from "lucide-react";
import { Footer } from "@/layouts/footer";
import { allEmployees } from "@/constants";
import { Link } from "react-router-dom";

const Employees = () => {
    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 p-2">
                <h2 className="text-2xl hidden sm:inline font-bold text-slate-800 dark:text-slate-100">
                    Employees
                </h2>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    {/* All Button */}
                    <Link
                        to="/employeesgrid"
                        className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <LayoutGrid size={18} />
                        <span>All</span>
                    </Link>

                    {/* Filter Select */}
                    <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                        <SlidersHorizontal size={18} />
                        <select
                            className="bg-transparent focus:outline-none text-sm"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Filter
                            </option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="invited">Invited</option>
                        </select>
                    </div>

                    {/* Sort Select */}
                    <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                        <ArrowDownWideNarrow size={18} />
                        <select
                            className="bg-transparent focus:outline-none text-sm"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Sort by
                            </option>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="az">A–Z</option>
                            <option value="za">Z–A</option>
                        </select>
                    </div>
                    {/* Add Employee */}
                    <Link
                        to="/add-employee"
                        className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white text-slate-900  dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-900"
                    >
                        <PlusSquare size={18} />
                        <span>Add Employee</span>
                    </Link>
                </div>
            </div>

            {/* Table Section */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">ID</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Team Leader</th>
                            <th className="table-head">Position</th>
                            <th className="table-head">Department</th>
                            <th className="table-head">Status</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {allEmployees.map((Employee) => (
                            <tr key={Employee.number} className="table-row">
                                <td className="table-cell">{Employee.number}</td>
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={Employee.image}
                                            alt={Employee.name}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{Employee.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">
                                                {Employee.description}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">{Employee.teamLeader}</td>
                                <td className="table-cell">{Employee.position}</td>
                                <td className="table-cell">{Employee.department}</td>
                                <td className="table-cell">{Employee.status}</td>
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
        </div>
    );
};

export default Employees;
