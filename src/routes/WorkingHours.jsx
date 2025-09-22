import {
    PencilLine,
    Trash,
    SlidersHorizontal,
    ArrowDownWideNarrow,
    PlusSquare,
    X,
    HomeIcon
} from "lucide-react";
import { Footer } from "@/layouts/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { WorkingHour } from "../constants";

const WorkingHours = () => {
    // ------------------- State -------------------
    const [open, setOpen] = useState(false);
    const [editForm, seteditForm] = useState(null);
    const [workingData, setworkingData] = useState({
        employees: "",
        employeesID: "",
        designation: "",
        date: "",
        startTime: "",
        endTime: "",
        totalHours: "",
        workingPlace: "",
        reason: "",
        approvedBy: "",
        compensationType: "",
        status: "approved",
    });

    // ------------------- Handlers -------------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        setworkingData({ ...workingData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editForm) {
            console.log("Edited Extra Working Details:", workingData);
            alert("Details updated!");
        } else {
            console.log("New Leave:", workingData);
            alert("Details added!");
        }

        // Reset form after submission
        setOpen(false);
        seteditForm(null);
        setworkingData({
            employees: "",
            employeesID: "",
            designation: "",
            date: "",
            startTime: "",
            endTime: "",
            totalHours: "",
            workingPlace: "",
            reason: "",
            approvedBy: "",
            compensationType: "",
            status: "approved",
        });
    };

    const handleEdit = (ExtraWork) => {
        seteditForm(ExtraWork.number);
        setworkingData({
            employees: ExtraWork.name || "",
            employeesID: ExtraWork.number || "",
            designation: ExtraWork.designation || "",
            date: ExtraWork.date || "",
            startTime: ExtraWork.startTime || "",
            endTime: ExtraWork.endTime || "",
            totalHours: ExtraWork.totalHours || "",
            workingPlace: ExtraWork.workingPlace || "",
            reason: ExtraWork.reason || "",
            approvedBy: ExtraWork.approvedBy || "",
            compensationType: ExtraWork.compensationType || "",
            status: ExtraWork.status || "approved",
        });
        setOpen(true);
    };


    // ------------------- JSX -------------------
    return (
        <div className="w-full mx-auto p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg text-slate-800 dark:text-slate-100">

            {/* ---------- Header Section ---------- */}
            <div className="flex items-center justify-between mb-6 sm:p-4">
                {/* Left: Title + Breadcrumb */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        Full Leave
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
                        <li className="text-slate-600 dark:text-slate-50">Leave</li>
                    </ul>
                </div>

                {/* Right: Add Button */}
                <button
                    onClick={() => {
                        seteditForm(null);
                        setworkingData({
                            employees: "",
                            employeesID: "",
                            designation: "",
                            date: "",
                            startTime: "",
                            endTime: "",
                            totalHours: "",
                            workingPlace: "",
                            reason: "",
                            approvedBy: "",
                            compensationType: "",
                            status: "approved",
                        });
                        setOpen(true);
                    }}
                    className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white text-slate-900 
                        dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-900"
                >
                    <PlusSquare size={18} />
                    <span>New Details</span>
                </button>
            </div>

            {/* ---------- Action Bar ---------- */}
            <div className="flex items-center gap-3 pb-4 mt-4 justify-end sm:px-4">
                {/* Filter */}
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

                {/* Sort */}
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

            {/* ---------- Table Section ---------- */}
            <div className="relative w-full overflow-auto [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">ID</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Date</th>
                            <th className="table-head">In-Time</th>
                            <th className="table-head">Out-Time</th>
                            <th className="table-head">Total Hours</th>
                            <th className="table-head">Working Place</th>
                            <th className="table-head">Reason</th>
                            <th className="table-head">ApprovedBy</th>
                            <th className="table-head">Compensation Type</th>
                            <th className="table-head">Status</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {WorkingHour.map((details) => (
                            <tr key={details.number} className="table-row">
                                {/* ID */}
                                <td className="table-cell">{details.number}</td>

                                {/* Employee Info */}
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={details.image}
                                            alt={details.name}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{details.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">
                                                {details.designation}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Other Columns */}
                                <td className="table-cell">{details.date}</td>
                                <td className="table-cell">{details.startTime}</td>
                                <td className="table-cell">{details.endTime}</td>
                                <td className="table-cell">{details.totalHours}</td>
                                <td className="table-cell">{details.workingPlace}</td>
                                <td className="table-cell">{details.reason}</td>
                                <td className="table-cell">{details.approvedBy}</td>
                                <td className="table-cell">{details.compensationType}</td>
                                <td className="table-cell">{details.status}</td>

                                {/* Actions */}
                                <td className="table-cell">
                                    <div className="flex items-center gap-x-4">
                                        {details.status === "approved" ? (
                                            <button disabled className="text-blue-500 dark:text-blue-600">
                                                <PencilLine size={20} />
                                            </button>
                                        ) : (
                                            <button
                                                className="text-blue-500 dark:text-blue-600"
                                                onClick={() => handleEdit(details)}
                                            >
                                                <PencilLine size={20} />
                                            </button>
                                        )}
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

            {/* ---------- Modal Section ---------- */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl w-full max-w-lg p-6 relative">

                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setOpen(false);
                                seteditForm(null);
                            }}
                            className="absolute top-3 right-3 text-slate-600 dark:text-slate-300 hover:text-slate-900"
                        >
                            <X size={20} />
                        </button>

                        {/* Title */}
                        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                            {editForm ? "Edit Details" : "Add New Details"}
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Employee Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Employee Name
                                    </label>
                                    <input
                                        type="text"
                                        name="employees"
                                        value={workingData.employees}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        name="employeesID"
                                        value={workingData.employeesID}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Time Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        In Time
                                    </label>
                                    <input
                                        type="time"
                                        name="startTime"
                                        value={workingData.startTime}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Out Time
                                    </label>
                                    <input
                                        type="time"
                                        name="endTime"
                                        value={workingData.endTime}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Date + Hours */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Total Hours
                                    </label>
                                    <input
                                        type="number"
                                        name="totalHours"
                                        value={workingData.totalHours}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={workingData.date}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>

                            {/* workplace + reason */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Workplace
                                    </label>
                                    <input
                                        type="text"
                                        name="workingPlace"
                                        value={workingData.workingPlace}
                                        onChange={handleChange}

                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Reason
                                    </label>
                                    <input
                                        type="text"
                                        name="reason"
                                        value={workingData.reason}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>



                            {/* Approval + Compensation */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Approved By
                                    </label>
                                    <input
                                        type="text"
                                        name="approvedBy"
                                        value={workingData.approvedBy}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Compensation Type
                                    </label>
                                    <input
                                        type="text"
                                        name="compensationType"
                                        value={workingData.compensationType}
                                        onChange={handleChange}
                                        className="mt-1 w-full border rounded-lg p-2 text-sm 
                                            bg-white dark:bg-slate-800 
                                            border-gray-300 dark:border-slate-700 
                                            text-slate-900 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        seteditForm(null);
                                    }}
                                    className="px-4 py-2 rounded-lg border 
                                        border-gray-300 dark:border-slate-700 
                                        text-slate-700 dark:text-slate-200 
                                        hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                >
                                    {editForm ? "Update Details" : "Add Details"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ---------- Footer ---------- */}
            <Footer />
        </div>
    );
};

export default WorkingHours;
