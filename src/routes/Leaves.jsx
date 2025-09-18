import { PencilLine, Trash, SlidersHorizontal, ArrowDownWideNarrow, PlusSquare } from "lucide-react";
import { Footer } from "@/layouts/footer";
import { leaves } from "../constants";
import { useState } from "react";
import { X } from "lucide-react";
import { allEmployees } from "../constants";


const Leaves = () => {
    const [open, setOpen] = useState(false);
    const [leaveData, setLeaveData] = useState({
        employees: "",
        leaveType: "",
        remainingDays: "",
        fromDate: "",
        toDate: "",
        reason: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeaveData({ ...leaveData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(leaveData);
        alert("Leave added!");
        setOpen(false);
        setLeaveData({ employees: "", leaveType: "", fromDate: "", toDate: "", reason: "" });
    };

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 p-2">
                <h2 className="text-2xl hidden sm:inline font-bold text-slate-800 dark:text-slate-100">
                    Leaves Status
                </h2>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">


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
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-900"
                    >
                        <PlusSquare size={18} />
                        <span>New Leaves</span>
                    </button>
                    {/* Popup Modal */}
                    {open && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl w-full max-w-lg p-6 relative">
                                {/* Close button */}
                                <button
                                    onClick={() => setOpen(false)}
                                    className="absolute top-3 right-3 text-slate-600 dark:text-slate-300 hover:text-slate-900"
                                >
                                    <X size={20} />
                                </button>

                                <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                                    Add New Leave
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                            Employee Name
                                        </label>
                                        <select
                                            name="employees"
                                            value={leaveData.employees}
                                            onChange={handleChange}
                                            className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                            required
                                        >
                                            <option value="">Select</option>
                                            {allEmployees.map((emp) => (
                                                <option key={emp.number} value={emp.name}>
                                                    {emp.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                                Leave Type
                                            </label>
                                            <input
                                                type="text"
                                                name="leaveType"
                                                // value={leaveData.leaveType}
                                                defaultValue={"Full Leave"}
                                                disabled
                                                onChange={handleChange}
                                                className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"

                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                                Duration
                                            </label>
                                            <input
                                                type="number"
                                                name="duration"
                                                defaultValue={0}
                                                onChange={handleChange}
                                                className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"

                                            />
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                                From Date
                                            </label>
                                            <input
                                                type="date"
                                                name="fromDate"
                                                value={leaveData.fromDate}
                                                onChange={handleChange}
                                                className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                                To Date
                                            </label>
                                            <input
                                                type="date"
                                                name="toDate"
                                                value={leaveData.toDate}
                                                onChange={handleChange}
                                                className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                            Reason
                                        </label>
                                        <textarea
                                            name="reason"
                                            value={leaveData.reason}
                                            onChange={handleChange}
                                            className="mt-1 w-full border rounded-lg p-2 text-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-end gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                        >
                                            Add Leave
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Table Section */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">ID</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Leaves Type</th>
                            <th className="table-head">From</th>
                            <th className="table-head">To</th>
                            <th className="table-head">Days</th>
                            <th className="table-head">Remaining Days</th>
                            <th className="table-head">Status</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {leaves.map((fullLeaves) => (
                            <tr key={fullLeaves.number} className="table-row">
                                <td className="table-cell">{fullLeaves.number}</td>
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={fullLeaves.image}
                                            alt={fullLeaves.name}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{fullLeaves.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">
                                                {fullLeaves.description}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">{fullLeaves.leaveType}</td>
                                <td className="table-cell">{fullLeaves.from}</td>
                                <td className="table-cell">{fullLeaves.to}</td>
                                <td className="table-cell">{fullLeaves.days}</td>
                                <td className="table-cell">{fullLeaves.remainingDays}</td>
                                <td className="table-cell">{fullLeaves.status}</td>
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

export default Leaves;
